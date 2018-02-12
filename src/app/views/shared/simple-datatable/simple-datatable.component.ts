import { Component, OnInit, Input, OnChanges,
	Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { SimpleDatatableService } from './simple-datatable.service';
import { AppConfirmService } from '../../../services/app-confirm/app-confirm.service';
import { DialogFormService } from '../dialog-form/dialog-form.service';

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

	@Input()
	title: string;

	@Input()
	formElements: any[];

	@Output()
	onLoad: EventEmitter<any>;

	@Output()
	onAdd: EventEmitter<any>;

	@Output()
	onEdit: EventEmitter<any>;
	
	@Output()
	onDelete: EventEmitter<any>;

	pages: any[];
	filteredRows: any[];
	searchResults: any[];
	totalPaginatedRows: any[];

	selectedPage: number;

	isValid: boolean;
	isInit: boolean;

	constructor (
		private router: Router,
		private _sds: SimpleDatatableService,
		private confirmService: AppConfirmService,
		private dialogFormService: DialogFormService
	) { 
		this.isValid = true;
		this.rows = [];
		this.pages = [];
		this.filteredRows = [];
		this.searchResults = [];
		this.totalPaginatedRows = [];

		this.onLoad = new EventEmitter();
		this.onAdd = new EventEmitter();
		this.onEdit = new EventEmitter();
		this.onDelete = new EventEmitter();
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
		// emit finilasied datatable
		this.onLoad.emit(true);
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

	addRecord() {
		this.formElements.forEach(element => {
			element['value'] = '';
		});
		this.dialogFormService.addItem(`Add ${ this.title }`, this.formElements).subscribe(result => {
			if (result != false) {
				this.onAdd.emit(result);
			}
		});
	}

	editRecord(row) {
		this.formElements.forEach(element => {
			Object.getOwnPropertyNames(row).forEach((index, match) => {
				if (element['key'] == index) {
					element['value'] = row[`${ index }`];
				}
			});
		});
		this.dialogFormService.editItem(`Edit ${ this.title }`, this.formElements).subscribe(result => {
			if (result != false) {
				this.onEdit.emit(result);
			}
		});
	}

	deleteRecord(type) {
		let title = 'Conform';
		let text = `Delete ${ type } ?`;
		this.confirmService.confirm(title, text).subscribe((result) => {
		  	if (result == true) {
				this.onDelete.emit(type);
			}
		});
	}
}
