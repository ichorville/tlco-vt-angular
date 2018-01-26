import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

import { FormElement } from '../../shared/form-elements/form-element';
import { FormTextbox } from '../../shared/form-elements/form-textbox';

import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-edit',
	templateUrl: './product-edit.component.html',
	styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

	// only an edit function specific variable
	isEdit = true;

	isLinear = true;
	steps: any[];

	// form properties
	title: string;
	buttonValue: string;
	formElements: FormElement<any>[];

	distributters: any[];
	asms: any[];

	url: string;
	product: any;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private _ps: ProductService
	) { 
		this.url = 'products/list';
		this.product = {};
		this.steps = [];
		this.asms = [];
		this.distributters = [];
		this.createSteps();
	}

	ngOnInit() {
		const id = +this.route.snapshot.paramMap.get('id');
		this._ps.get(id).then((product) => {
			this.product = product;
			this.createSteps();
		});
		this.distributters = this._ps.distributors;
		this.asms = this._ps.asms;
		
	}

	onSubmit(event) {
		console.log(event);
		let product = event['1']['value'];

		this._ps.update(product)
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
						value: this.product['name'],
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
						value: this.product['subject'],
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
						value: this.product['message'],
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
						key: 'distributors',
						title: 'Assign Distributors',
						value: this.distributters
					},
					{
						key: 'AMS',
						title: 'Assign ASMs',
						value: this.asms
					}
				]
			}
		]
	}
}
