import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-entity-mapping',
	templateUrl: './entity-mapping.component.html',
	styleUrls: ['./entity-mapping.component.css']
})
export class EntityMappingComponent implements OnInit {

	tasks: any;

	constructor() {
		this.tasks = [
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 0
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 0
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 1
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 1
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 1
			},
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 0
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 0
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 1
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 1
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 1
			},
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 0
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 0
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 1
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 1
			}, 
			{
				text: 'Lorem, ipsum dolor sit amet',
				status: 1
			}
		];
	 }

	ngOnInit() {
		
	}

}
