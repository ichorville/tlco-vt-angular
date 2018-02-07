import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

import { FormElement } from '../../shared/form-elements/form-element';
import { FormTextbox } from '../../shared/form-elements/form-textbox';

import { DistributorService } from '../distributor.service';

@Component({
	selector: 'app-distributor-edit',
	templateUrl: './distributor-edit.component.html',
	styleUrls: ['./distributor-edit.component.css']
})
export class DistributorEditComponent implements OnInit {

	// only an edit function specific variable
	isEdit = true;

	isLinear = true;
	steps: any[];

	// form properties
	title: string;
	buttonValue: string;
	formElements: FormElement<any>[];

	products: any[];

	url: string;
	distributor: any;

	constructor (
		private router: Router,
		private route: ActivatedRoute,
		private _ds: DistributorService
	) { 
		this.url = 'distributors/list';
		this.distributor = {};
		this.steps = [];
		this.products = [];
		this.createSteps();
	}

	ngOnInit() {
		const id = +this.route.snapshot.paramMap.get('id');
		this._ds.get(id).then((distributor) => {
			this.distributor = distributor;
			this.createSteps();
		});
		this.products = this._ds.products;
	}

	onSubmit(event) {
		console.log(event);
		let distributor = event['1']['value'];

		this._ds.update(distributor)
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
				isCompleted: true,
				formElements: this.formElements = [
					new FormTextbox({
						key: 'name',
						label: 'Name',
						value: this.distributor['name'],
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
						value: this.distributor['subject'],
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
						value: this.distributor['message'],
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
				isCompleted: true,
				arrayElements: [
					{
						key: 'products',
						title: 'Assign Products',
						value: this.products
					},
				]
			}
		];
	}
}
