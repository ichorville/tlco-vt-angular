import { Component, OnInit, OnChanges, OnDestroy, ViewChild, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MatSidenav, MatDialog } from '@angular/material';

import { DatatableService } from './datatable.service';

@Component({
	selector: 'app-datatable',
	templateUrl: './datatable.component.html',
	styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, OnChanges {

	@Input()
	rows: any[];

	pages: any[];
	filteredRows: any[];
	totalPaginatedRows: any[];

	selectedPage: number;

	isInit: boolean;

	isMobile;
	screenSizeWatcher: Subscription;
	isSidenavOpen: Boolean = true;
	selectToggleFlag = false;
  
	constructor(
		private router: Router,
		private media: ObservableMedia,
		public composeDialog: MatDialog,
		private _ds: DatatableService
	) {
		this.pages = [];
		this.rows = [];
		this.filteredRows = [];
		this.totalPaginatedRows = [];
	}

	ngOnInit() {
		this.inboxSideNavInit();
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

	selectToggleAll() {
		this.selectToggleFlag = !this.selectToggleFlag;
		this.rows.forEach((msg) => { msg.selected = this.selectToggleFlag });
	}

	inboxSideNavInit() {
		this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
		this.screenSizeWatcher = this.media.subscribe((change: MediaChange) => {
			this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
		});
	}
}
