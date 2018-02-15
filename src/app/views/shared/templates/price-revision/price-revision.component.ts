import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

import { AppLoaderService } from '../../../../services/app-loader/app-loader.service';

import { PRICE_REVISIONS } from '../../mock-data/price-revisions';

@Component({
	selector: 'app-price-revision',
	templateUrl: './price-revision.component.html',
	styleUrls: ['./price-revision.component.css']
})
export class PriceRevisionComponent implements OnInit {

	@Input()
	priceListItems: any[];

	priceListEntity = {};

	priceListForm: FormGroup;
	
	columns = [
		{ name: 'Price', attr: 'price', type: 'string' },
		{ name: 'Effective Date', attr: 'effectiveDate', type: 'string' },
		{ name: 'Expiry Date', attr: 'expiryDate', type: 'string' },
		{ name: 'Status', attr: 'activated', type: 'chip' },
	];

	rows: any[];
	loadingCompleted: boolean;

	@ViewChild('priceListStepper') stepper: MatStepper;

	get priceListConfigArray(): AbstractControl | null { 
		return this.priceListForm.get('priceListConfigArray'); 
	}

	constructor (
		private _formBuilder: FormBuilder,
		private cd: ChangeDetectorRef,
		private loader: AppLoaderService
	) {
		
	}

	ngOnInit() {
		let priceListConfigArray = this._formBuilder.array([]);

		this.priceListItems.forEach(element => {

			this.priceListEntity[element['order']] = {
				value: '',
				isCompleted: '' || element['isCompleted']
			};

			priceListConfigArray.push(this._formBuilder.group({
				[element.order]: [element.isCompleted || '', Validators.required]
			}));
		});
		
		this.priceListForm = new FormGroup({priceListConfigArray});

		setTimeout(() => {
			this.loadRevsionTable(PRICE_REVISIONS);
		}, 200);

		this.cd.detectChanges();
	}

	filterByListType(listItem) {
		// this.loadRevsionTable(listItem);
	}

	loadRevsionTable(itemList) {
		this.openLoader();
		this.rows = [];
		itemList.forEach(element => {
			this.rows.push({
				type: element['type'],
				id: element['id'],
				price: element['price'],
				effectiveDate: element['effectiveDate'],
				expiryDate: element['expiryDate'],
				activated: element['activated']
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
