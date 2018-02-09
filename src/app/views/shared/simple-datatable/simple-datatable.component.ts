import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { SimpleDatatableService } from './simple-datatable.service';

@Component({
	selector: 'app-simple-datatable',
	templateUrl: './simple-datatable.component.html',
	styleUrls: ['./simple-datatable.component.css']
})
export class SimpleDatatableComponent implements OnInit, OnChanges {

	@Input()
	rows: any[];

	@Input()
	columns: any[];

	pages: any[];
	filteredRows: any[];
	searchResults: any[];
	totalPaginatedRows: any[];

	selectedPage: number;

	isValid: boolean;
	isInit: boolean;

	constructor (
		private router: Router,
		private _sds: SimpleDatatableService
	) { 
		this.isValid = true;
		this.rows = [];
		this.pages = [];
		this.filteredRows = [];
		this.searchResults = [];
		this.totalPaginatedRows = [];
	}

	ngOnInit() {
		this.searchResults = this.rows;
		// calculate the no of pagination pages
		this._sds.getPageCount(this.rows.length).then((pages) => {
			this.pages = pages;
		});
		// paginate the whole dataset according to the pagination pages
		this._sds.paginate(10, this.rows).then((filteredRows) => {
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
				this._sds.getPageCount(this.rows.length).then((pages) => {
					this.pages = pages;
				});
				// paginate the whole dataset according to the pagination pages
				this._sds.paginate(10, this.rows).then((filteredRows) => {
					this.totalPaginatedRows = filteredRows;
					this.filteredRows = filteredRows[0].items;
					this.isInit = true;
				});
				// load the first data set hence first selected page
				this.selectedPage = 1;
			}
		}
	}
}
