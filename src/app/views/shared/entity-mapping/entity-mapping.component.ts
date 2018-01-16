import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-entity-mapping',
	templateUrl: './entity-mapping.component.html',
	styleUrls: ['./entity-mapping.component.css']
})
export class EntityMappingComponent implements OnInit {

	tasks: any;
	isValid = true;
	selectToggleFlag = false;
	selectedTotal: number;

	tempArr: any[];

	constructor() {
		this.tempArr = [];
		this.tasks = [
			{
				text: 'Cranjus McBasketball',
				status: false
			}, 
			{
				text: 'Minty Cherubandtug',
				status: false
			}, 
			{
				text: 'Mary Beth BethBeth',
				status: true
			}, 
			{
				text: 'Helena Bottom-Farter',
				status: true
			}, 
			{
				text: 'Beefy McWhatnow',
				status: true
			},
			{
				text: 'Tammy BundleBalls',
				status: false
			}, 
			{
				text: 'Captain Melvin Seashorse',
				status: false
			}, 
			{
				text: 'Dr. Shrimp Puerto Rico',
				status: true
			}, 
			{
				text: 'Simmy Cantstandyourbitz',
				status: true
			}, 
			{
				text: 'Wandamian Crucifixplate',
				status: true
			},
			{
				text: 'Denise Fat',
				status: false
			}, 
			{
				text: 'Jury Prosciutto',
				status: false
			}, 
			{
				text: 'Rickyticky Bobbywobbin',
				status: true
			}, 
			{
				text: 'Dungaresse Weatherspoons',
				status: true
			}, 
			{
				text: 'Eyna Mouthhole',
				status: true
			}
		];
	 }

	ngOnInit() {
		this.tempArr = this.tasks;
		this.calculateTotalSelected();	
	}

	toggleAll() {
		// console.log(value);
		console.log(this.selectToggleFlag);
		this.tasks.forEach(task => task.status = this.selectToggleFlag);
		// if (this.selectToggleFlag == true) {
		// 	this.tasks.forEach(task => task.status = true);
		// } else if (this.selectToggleFlag == false) {
		// 	this.tasks.forEach(task => task.status = false);
		// }
		this.calculateTotalSelected();
	}

	toggleEntity() {
		if (this.selectToggleFlag == true) {
			this.selectToggleFlag = !this.selectToggleFlag;
		}
		this.calculateTotalSelected();	
		return;
	}

	calculateTotalSelected() {
		this.selectedTotal = 0;
		this.tempArr.forEach(task => task.status == true ? this.selectedTotal++ : this.selectedTotal);
		console.log(this.selectedTotal);
	}

	reloadList(event) {
		console.log(event);
		if (event != undefined) {
			if (event == 'NDF') {
				this.isValid = false;
			} else {
				this.isValid = true;
				this.tasks = event;

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
