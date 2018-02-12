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
	isLinear = true;
	steps: any[];

	// form properties
	title: string;
	buttonValue: string;
	formElements: FormElement<any>[];

	distributters: any[];
	asms: any[];

	priceRevisionList: any[];

	url: string;

	constructor(
		private router: Router,
		private _ps: ProductService
	) {
		this.url = 'products/list';
		this.steps = [];
		this.asms = [];
		this.distributters = [];
		this.priceRevisionList = [];
	}

	ngOnInit() {
		this.distributters = this._ps.distributors;
		this.asms = this._ps.asms;
		this.priceRevisionList = this._ps.priceRevision;
		this.createSteps();
	}

	onSubmit(event) {
		console.log(event);
		let product = event['1']['value'];

		this._ps.add(product)
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
				label: 'Price Revision',
				order: 2,
				type: 'price-list',
				listItems: this.priceRevisionList
				// isCompleted: false
			}
		]
	}
}
/**
 * Form elements
 * 	if a form element is an optional attribute,
 * 		then required: false,
 * 			 validators: []
 */