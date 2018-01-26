import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { FormElement } from '../form-elements/form-element';

@Injectable()
export class FormControlService {

	constructor() { }

	toFormGroup(formElements: FormElement<any>[]) {
		let group: any = {};

		formElements.forEach(formElement => {
			group[formElement.key] = new FormControl(formElement.value || '', formElement.validators);
		});

		return new FormGroup(group);
	}
}
