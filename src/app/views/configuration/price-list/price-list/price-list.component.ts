import { Component, OnInit } from '@angular/core';

import { PriceListService } from '../price-list.service';

@Component({
	selector: 'app-price-list',
	templateUrl: './price-list.component.html',
	styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

	columns: any[];
	rows: any[];

	priceLists: any[];

	constructor (
		private _pls: PriceListService
	) {
		this.priceLists = [];
		this.columns = [
			{ name: 'Price List Type', attr: 'type', type: 'string' },
			{ name: 'Price List ID', attr: 'id', type: 'string' },
			{ name: 'Creation Date', attr: 'creationDate', type: 'string' },
			{ name: 'Expiry Date', attr: 'expiryDate', type: 'string' }
		];
	}

	ngOnInit() {
		this.priceLists = this._pls.priceLists;
		this.updateRows();
	}

	private updateRows() {
		this.rows = [];
		this.priceLists.forEach(element => {
			this.rows.push({
				type: element['type'],
				id: element['id'],
				creationDate: element['creationDate'],
				expiryDate: element['expiryDate']
			});
		});
	}
}
