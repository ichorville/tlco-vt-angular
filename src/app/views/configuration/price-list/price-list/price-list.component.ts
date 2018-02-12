import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Validators } from '@angular/forms';

import { AppLoaderService } from '../../../../services/app-loader/app-loader.service';
import { PriceListService } from '../price-list.service';

import { FormElement } from '../../../shared/form-elements/form-element';
import { FormTextbox } from '../../../shared/form-elements/form-textbox';
import { FormDropdown } from '../../../shared/form-elements/form-dropdown';
import { FormSlideToggle } from '../../../shared/form-elements/form-slide-toggle';
import { FormDatepicker } from '../../../shared/form-elements/form-datepicker';

@Component({
	selector: 'app-price-list',
	templateUrl: './price-list.component.html',
	styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

	columns: any[];
	rows: any[];
	title: string;

	priceLists: any[];
	formElements: FormElement<any>[];

	loadingCompleted: boolean;

	constructor (
		private snackBar: MatSnackBar,
		private loader: AppLoaderService,
		private _pls: PriceListService
	) {
		this.loadingCompleted = false;		
		this.title = 'Price List';
		this.priceLists = [];
		this.columns = [
			{ name: 'Price List Type', attr: 'type', type: 'string' },
			{ name: 'Price List ID', attr: 'id', type: 'string' },
			{ name: 'Creation Date', attr: 'creationDate', type: 'string' },
			{ name: 'Expiry Date', attr: 'expiryDate', type: 'string' },
			{ name: 'Status', attr: 'activated', type: 'chip' }
		];

		this.formElements = [
			new FormDropdown({
				key: 'type',
				label: 'List Type',
				value: '',
				controlType: 'dropbox',
				options: [
					{ key: 'DPL', value: 'DPL'},
					{ key: 'RPL', value: 'RPL'},
					{ key: 'MRP', value: 'MRP'}
				],
				required: true,
				order: 1,
				placeholder: 'Price List Type',
				validators: [
					Validators.required
				]
			}),
			new FormTextbox({
				key: 'id',
				label: 'Price List ID',
				value: '',
				controlType: 'textbox',
				type: 'text',
				required: true,
				order: 2,
				placeholder: 'Price List ID',
				validators: [
					Validators.required
				]
			}),
			new FormDatepicker({
				key: 'creationDate',
				label: 'Creation Date',
				placeholder: 'Creation Date',
				value: new Date(),
				controlType: 'datepicker',
				order: 3,
				required: true,
				validators: [
					Validators.required
				]
			}),
			new FormSlideToggle({
				key: 'activated',
				label: 'Active Price List',
				value: true,
				controlType: 'slide-toggle',
				order: 4
			})
		]
	}

	ngOnInit() {
		this._pls.all().then((priceLists) => {
			this.priceLists = priceLists;
			this.openLoader();
			this.updateRows();
		});
	}

	add(event) {
		let priceList = {
			type: event.controls['type'].value,
            id: event.controls['id'].value,
            creationDate: event.controls['creationDate'].value,
            expiryDate: '01/02/2018 11:57 AM',
            activated: event.controls['activated'].value
		};
		this._pls.add(priceList).then(response => {
			if (response == 200) {
				this._pls.all().then((priceLists) => {
					this.priceLists = priceLists;
					this.loadingCompleted = false;
					setTimeout(() => {
						this.openLoader();
						this.updateRows();
					}, 200);
				});
				return this.openSnackBar(`Item Successfully Added!`);
			} else {
				this.openSnackBar(`Could Not Add Item`);
			}
		})
	}

	update(event) {
		console.log(event);
	}

	delete(event) {
		this._pls.remove(event).then((response) => {
			if (response == 200) {
				this._pls.all().then((priceLists) => {
					this.priceLists = priceLists;
					this.loadingCompleted = false;
					setTimeout(() => {
						this.openLoader();
						this.updateRows();
					}, 200);
				});
				return this.openSnackBar(`Item ${ event } deleted!`);
			} else {
				this.openSnackBar(`Could Not Delete Item`);
			}
		});
	}

	openSnackBar(message) {
		this.snackBar.open(`${ message }`, 'close', { duration: 2000 });
	}

	private updateRows() {
		this.rows = [];
		this.priceLists.forEach(element => {
			this.rows.push({
				type: element['type'],
				id: element['id'],
				creationDate: element['creationDate'],
				expiryDate: element['expiryDate'],
				activated: element['activated'],
				// for delete recognition
				toBeDeleted: element['id']
			});
		});
		this.loadingCompleted = true;
	}

	openLoader() {
		this.loader.open('Loading');
	}

	closeLoader(event) {
		this.loader.close();
	}
}
