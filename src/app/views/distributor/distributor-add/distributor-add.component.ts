import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormElement } from '../../shared/form-elements/form-element';
import { FormTextbox } from '../../shared/form-elements/form-textbox';

import { DistributorService } from '../distributor.service';

@Component({
	selector: 'app-distributor-add',
	templateUrl: './distributor-add.component.html',
	styleUrls: ['./distributor-add.component.css']
})
export class DistributorAddComponent implements OnInit {

	// step properties
	isLinear = true;
	steps: any[];

	// form properties
	title: string;
	buttonValue: string;
	formElements: FormElement<any>[];

	products: any[];

	url: string;

	constructor (
		private router: Router,
		private _ds: DistributorService
	) { 
		this.url = 'distributors/list';
		this.steps = [];
		this.products = [];
	}

	ngOnInit() {
		// get products list and do midifications later
		// as in convert the array to attributes with text and status likewise in the service
		this.products = this._ds.products;

		this.createSteps();
	}

	onSubmit(event) {
		console.log(event);
		let distributor = event['1']['value'];

		this._ds.add(distributor)
		setTimeout(() => {
			this.router.navigateByUrl(`${ this.url }`);
		}, 200);
	}

	private createSteps() {
		this.steps = [
			{
				label: 'Add Product',
				order: 1,
				type: 'form',
				// isCompleted: false,
				formElements: this.formElements = [
					new FormTextbox({
						key: 'name',
						label: 'Name',
						value: '',
						controlType: 'textbox',
						type: 'text',
						required: true,
						order: 1,
						placeholder: 'Name',
						validators: [
							Validators.required
						]
					}),
					new FormTextbox({
						key: 'subject',
						label: 'Subject',
						value: '',
						controlType: 'textbox',
						type: 'text',
						required: null,
						order: 2,
						placeholder: 'Subject',
						validators: [
							// Validators.required
						]
					}),
					new FormTextbox({
						key: 'message',
						label: 'Message',
						value: '',
						controlType: 'textbox',
						type: 'text',
						required: true,
						order: 3,
						placeholder: 'Message',
						validators: [
							Validators.required
						]
					})
				]
			},
			{
				label: 'Map Entities',
				order: 2,
				type: 'mapping',
				// isCompleted: false,
				arrayElements: [
					{
						key: 'products',
						title: 'Assign Products',
						value: this.products
					}
				]
			},
		];
	}
}
