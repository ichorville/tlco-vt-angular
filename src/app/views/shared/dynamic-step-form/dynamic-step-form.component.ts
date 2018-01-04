import { 
	Component, 
	OnInit, 
	Input, 
	AfterViewChecked, 
	ChangeDetectorRef,
	AfterContentChecked, 
	EventEmitter, 
	Output } from '@angular/core';
import { AbstractControl, FormGroup, 
	FormControl, Validators } from '@angular/forms';

import { FormElement } from '../form-elements/form-element';

import { DynamicStepFormService } from './dynamic-step-form.service';

@Component({
	selector: 'app-dynamic-step-form',
	templateUrl: './dynamic-step-form.component.html',
	styleUrls: ['./dynamic-step-form.component.css']
})
export class DynamicStepFormComponent implements OnInit {

	@Input()
	isLinear: boolean;

	@Input()
	formElements: FormElement<any>[];

	form: FormGroup;

	entity = {};

	tempFormElements: any[];

	/** Returns a FormArray with the name 'formArray'. */
	get formArray(): AbstractControl | null { return this.form.get('formArray'); }

	constructor(
		private _dfs: DynamicStepFormService,
		private cd: ChangeDetectorRef
	) { 
		this.tempFormElements = [];
		
	}

	ngOnInit() {
		this.tempFormElements = this.formElements;
		
		this.formElements.forEach(formElement => {
			this.entity[formElement['key']] = formElement['value'];
		});

		this.form = this._dfs.toFormGroup(this.formElements);
		console.log(this.form);
	}
}
