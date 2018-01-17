import { 
	Component, 
	OnInit, 
	Input, 
	EventEmitter, 
	Output } from '@angular/core';

@Component({
	selector: 'app-entity-mapping',
	templateUrl: './entity-mapping.component.html',
	styleUrls: ['./entity-mapping.component.css']
})
export class EntityMappingComponent implements OnInit {

	@Input()
	arrayElements: any[];

	tasks: any;
	isValid = true;
	selectToggleFlag = false;
	selectedTotal: number;

	tempIntparam = 0;
	tempSeacrVal = [];

	mapEntityArray: any[];

	constructor() {
		this.mapEntityArray = [];
	 }

	ngOnInit() {

		this.arrayElements.forEach((element, index) => {

			this.mapEntityArray.push({
				index: index,
				title: element['title'],
				arrElement: element['value'],
				tempArrElement: element['value'],
				isValid: true,
				selectToggleFlag: false,
				selectedTotal: 0
			});
			this.calculateTotalSelected(index);	
		});	
	}

	toggleAll(index) {
		this.mapEntityArray[index]['arrElement'].forEach(element => element.status = this.mapEntityArray[index].selectToggleFlag);
		this.calculateTotalSelected(index);
	}

	toggleEntity(index) {
		if (this.mapEntityArray[index].selectToggleFlag == true) {
			this.mapEntityArray[index].selectToggleFlag = !this.mapEntityArray[index].selectToggleFlag;
		}
		this.calculateTotalSelected(index);	
		return;
	}

	calculateTotalSelected(index) {
		this.mapEntityArray[index].selectedTotal = 0;
		this.mapEntityArray[index]['tempArrElement'].forEach(element => element.status == true 
			? this.mapEntityArray[index].selectedTotal++ 
				: this.mapEntityArray[index].selectedTotal);
	}

	reloadList(event) {
		console.log(event[1]);
		if (event != undefined) {
			if (event[0] == 'NDF') {
				this.mapEntityArray[event[1]].isValid = false;
			} else {
				this.tempIntparam = event[1];
				this.tempSeacrVal = event;
				// if (this.tempIntparam > 0) {
				// 	this.mapEntityArray[this.tempIntparam].isValid = true;
				// 	this.mapEntityArray[this.tempIntparam]['arrElement'] = event[0];
				// }

				if (event[1] == undefined) { // wrong implementation change it
					if (this.tempIntparam > 0) {
						this.mapEntityArray[this.tempIntparam].isValid = true;
						this.mapEntityArray[this.tempIntparam]['arrElement'] = event;
					}
				} else {
					this.mapEntityArray[this.tempIntparam].isValid = true;
					this.mapEntityArray[this.tempIntparam]['arrElement'] = event[0];
				}

				// // calculate the no of pagination pages
				// this._ds.getPageCount(this.rows.length).then((pages) => {
				// 	this.pages = pages;
				// });
				// // paginate the whole dataset according to the pagination pages
				// this._ds.paginate(10, this.rows).then((filteredRows) => {
				// 	this.totalPaginatedRows = filteredRows;
				// 	this.filteredRows = filteredRows[0].items;
				// 	this.isInit = true;
				// });
				// // load the first data set hence first selected page
				// this.selectedPage = 1;
			}
		}
	}

}
