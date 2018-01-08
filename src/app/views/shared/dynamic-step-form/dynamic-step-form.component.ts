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
	stepOrder: number;

	@Input()
	isLinear: boolean;

	@Input()
	formElements: FormElement<any>[];

	@Output()
	onFormCompletion: EventEmitter<any>;

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
		this.onFormCompletion = new EventEmitter<any>();
	}

	ngOnInit() {
		this.tempFormElements = this.formElements;
		
		this.formElements.forEach(formElement => {
			this.entity[formElement['key']] = formElement['value'];
		});

		this.form = this._dfs.toFormGroup(this.formElements);

		this.onCompletion();
	}

	onCompletion() {
		this.onFormCompletion.emit({
			key: this.stepOrder,
			value: this.entity
		});
	}
}
