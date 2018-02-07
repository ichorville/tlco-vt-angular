import { Component, OnInit } from '@angular/core';

import { DistributorService } from '../distributor.service';

@Component({
	selector: 'app-distributor-list',
	templateUrl: './distributor-list.component.html',
	styleUrls: ['./distributor-list.component.css']
})
export class DistributorListComponent implements OnInit {

	rows: any;
	url: string;

	constructor(
		private _ds: DistributorService
	) { 
		this.url = 'distributors';
	}

	ngOnInit() {
		this.rows = this._ds.messages;
	}
}
