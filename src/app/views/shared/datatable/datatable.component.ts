import { Component, OnInit, OnChanges, OnDestroy, ViewChild, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MatSidenav, MatDialog, MatExpansionPanel } from '@angular/material';

import { DatatableService } from './datatable.service';

@Component({
	selector: 'app-datatable',
	templateUrl: './datatable.component.html',
	styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, OnChanges {

	@Input()
	rows: any[];

	@Input()
	url: string;

	pages: any[];
	filteredRows: any[];
	searchResults: any[];
	totalPaginatedRows: any[];

	selectedPage: number;

	isValid: boolean;
	isInit: boolean;

	isMobile;
	screenSizeWatcher: Subscription;
	isSidenavOpen: Boolean = true;
	selectToggleFlag = false;

	panelOpenState: boolean = false;
  
	constructor(
		private router: Router,
		private media: ObservableMedia,
		private _ds: DatatableService,
		public composeDialog: MatDialog
	) {		
		this.isValid = true;
		this.rows = [];
		this.pages = [];
		this.filteredRows = [];
		this.searchResults = [];
		this.totalPaginatedRows = [];
	}

	ngOnInit() {
		this.inboxSideNavInit();
		this.rows.forEach(element => {
			element['panelOpenState'] = false;
		});
		this.searchResults = this.rows;
		// calculate the no of pagination pages
		this._ds.getPageCount(this.rows.length).then((pages) => {
			this.pages = pages;
		});
		// paginate the whole dataset according to the pagination pages
		this._ds.paginate(10, this.rows).then((filteredRows) => {
			this.totalPaginatedRows = filteredRows;
			this.filteredRows = filteredRows[0].items;
			this.isInit = true;
		});
		// load the first data set hence first selected page
		this.selectedPage = 1;
	}

	ngOnChanges() {
		// paginate on every button click: every change event
		this.paginate(event);
	}

	paginate(event: any) {
		if (event) {
			if (event > 0) {
				if (this.filteredRows) {
					// extract the relevant data set from the paginated data array
					this.filteredRows = this.totalPaginatedRows[event - 1].items;
				}
			}
		}
	}

	reDraw(event: any) {
		if (event != undefined) {
			if (event == 'NDF') {
				this.isValid = false;
			} else {
				this.isValid = true;
				this.rows = event;

				// calculate the no of pagination pages
				this._ds.getPageCount(this.rows.length).then((pages) => {
					this.pages = pages;
				});
				// paginate the whole dataset according to the pagination pages
				this._ds.paginate(10, this.rows).then((filteredRows) => {
					this.totalPaginatedRows = filteredRows;
					this.filteredRows = filteredRows[0].items;
					this.isInit = true;
				});
				// load the first data set hence first selected page
				this.selectedPage = 1;
			}
		}
	}

	inboxSideNavInit() {
		this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
		this.screenSizeWatcher = this.media.subscribe((change: MediaChange) => {
			this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
		});
	}

	expandPanel(matExpansionPanel: MatExpansionPanel, event: Event) {
		event.stopPropagation();
		if (!this._isExpansionIndicator(event.target)) {
		  	matExpansionPanel.close();
		}
	}

	private _isExpansionIndicator(target: any): boolean {	
		const expansionIndicatorClass = 'mat-checkbox-inner-container';
		const expansionMatMenuClass = 'mat-icon';

		if (target.classList && target.classList.contains(expansionIndicatorClass) || target.classList && target.classList.contains(expansionMatMenuClass)) {
			return false;
		} else {
			return true;
		}
	}
}
