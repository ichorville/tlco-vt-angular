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
	
	/** Returns a FormArray with the name 'formArray'. */
	get formArray(): AbstractControl | null { return this.form.get('formArray'); }

	constructor (
		private _dfs: DynamicStepFormService,
		private cd: ChangeDetectorRef
	) { 
		this.onFormCompletion = new EventEmitter<any>();
	}

	ngOnInit() {	
		// to bind form values with ngModel
		this.formElements.forEach(formElement => {
			this.entity[formElement['key']] = formElement['value'];
		});

		// convert each foemElement to a FormGroup
		this.form = this._dfs.toFormGroup(this.formElements);

		// to subscribe in each form value change in order to keep the stepper static
		this.form.valueChanges.subscribe(data => this.onValueChanged(data));
		this.onValueChanged();
	}

	onValueChanged(data?: any) {
		const control = this.form.get(`formArray`);
		// if a required field is invalid then emit invalid signal 
		// whihc will result an incomplete stepper if the stepper was already completed
		if (control && control.dirty && !control.valid) {
			this.onFormCompletion.emit({
				key: this.stepOrder,
				completed: '' // this isnt false
			});
		}
	}

	// on form submittion emit form values via the bound entity object
	onCompletion() {
		this.onFormCompletion.emit({
			key: this.stepOrder,
			value: this.entity,
			completed: true
		});
	}
}
