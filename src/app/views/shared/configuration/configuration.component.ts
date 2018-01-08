import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

import { ConfigurationService } from './configuration.service';

@Component({
	selector: 'app-configuration',
	templateUrl: './configuration.component.html',
	styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit, OnChanges {

	@Input()
	isLinear: boolean;

	@Input()
	steps: any[];

	configEntity = {};

	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;

	form: FormGroup;

	formGroup: FormGroup;
	isNonEditable = false;

	nameFormGroup: FormGroup;
	emailFormGroup: FormGroup;

	/** Returns a FormArray with the name 'formArray'. */
	get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

	get formConfigArray(): AbstractControl | null { return this.form.get('formConfigArray'); }

	constructor(
		private _formBuilder: FormBuilder,
		private _cs: ConfigurationService
	) {
		this.steps = [];
	}

	ngOnInit() {

		this.steps.forEach(step => {
			this.configEntity[step['order']] = '';
		});

		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		console.log(this.firstFormGroup);
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});

		this.formGroup = this._formBuilder.group({
			formArray: this._formBuilder.array([
				this._formBuilder.group({
					firstNameFormCtrl: ['', Validators.required],
					lastNameFormCtrl: ['', Validators.required],
				}),
				this._formBuilder.group({
					emailFormCtrl: ['', Validators.email]
				}),
			])
		});

		this.form = this._cs.toFormGroup(this.steps);

		console.log(this.form);
		console.log(this.configEntity);
	}

	ngOnChanges() {
		console.log(this.firstFormGroup);
	}

	unlockStep(event: any) {
		console.log(event);
		Object.keys(this.configEntity).map(element => {
			if (element == event['key']) {
				this.configEntity[element] = event['value'];
			}
			return;
		});
		console.log(this.configEntity);	
	}

	onClick() {
		console.log(this.firstFormGroup);
	}

	onSumit() {
		console.log(this.form);
	}
}