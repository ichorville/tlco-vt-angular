import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FormElement } from '../../shared/form-elements/form-element';
import { FormTextbox } from '../../shared/form-elements/form-textbox';

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

	constructor() {
		this.steps = [];
	}

	ngOnInit() {
		this.createSteps();
	}

	private createSteps() {
		this.steps = [
			{
				label: 'Add Product',
				isFormGroup: true,
				order: 1,
				formElements: this.formElements = [
					new FormTextbox({
						key: 'name',
						label: 'name',
						value: '',
						controlType: 'textbox',
						type: 'text',
						required: true,
						order: 1,
						placeholder: 'Name',
						validators: [
							Validators.required,
						]
					}),
					new FormTextbox({
						key: 'subject',
						label: 'subject',
						value: '',
						controlType: 'textbox',
						type: 'text',
						required: true,
						order: 2,
						placeholder: 'Subject',
						validators: [
							Validators.required,
						]
					}),
					new FormTextbox({
						key: 'message',
						label: 'message',
						value: '',
						controlType: 'textbox',
						type: 'text',
						required: true,
						order: 3,
						placeholder: 'Message',
						validators: [
							Validators.required,
						]
					})
				]
			}
		]
	}
}
