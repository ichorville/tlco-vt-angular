import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	rows: any;

	constructor(
		private _ps: ProductService
	) { }

	ngOnInit() {
		this.rows = this._ps.messages;
	}
}
