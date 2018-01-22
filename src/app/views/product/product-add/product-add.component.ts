import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormElement } from '../../shared/form-elements/form-element';
import { FormTextbox } from '../../shared/form-elements/form-textbox';

import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

	// step properties
	isLinear = false;
	steps: any[];

	// form properties
	title: string;
	buttonValue: string;
	formElements: FormElement<any>[];

	distributters: any[];
	asms: any[];

	url: string;

	constructor(
		private router: Router,
		private _ps: ProductService
	) {
		this.url = 'products/list';
		this.steps = [];
		this.asms = [];
		this.distributters = [];
	}

	ngOnInit() {
		this.distributters = this._ps.distributors;
		this.asms = this._ps.asms;
		this.createSteps();
	}

	onSubmit(event) {
		console.log(event);
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
				isCompleted: false,
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
						required: true,
						order: 2,
						placeholder: 'Subject',
						validators: [
							Validators.required
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
				isCompleted: false,
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
