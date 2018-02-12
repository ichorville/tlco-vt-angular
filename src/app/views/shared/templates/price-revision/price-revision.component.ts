import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-price-revision',
	templateUrl: './price-revision.component.html',
	styleUrls: ['./price-revision.component.css']
})
export class PriceRevisionComponent implements OnInit {

	@Input()
	priceListItems: any[];

	constructor() { }

	ngOnInit() {
		
	}

}
