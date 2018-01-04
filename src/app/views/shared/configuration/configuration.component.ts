import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
	selector: 'app-configuration',
	templateUrl: './configuration.component.html',
	styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

	@Input()
	isLinear: boolean;

	@Input()
	steps: any[];

	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;

	form: FormGroup;

	formGroup: FormGroup;
	isNonEditable = false;

	nameFormGroup: FormGroup;
	emailFormGroup: FormGroup;

	/** Returns a FormArray with the name 'formArray'. */
	get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

	constructor(
		private _formBuilder: FormBuilder
	) {
		this.steps = [];
	}

	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
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
		console.log(this.formGroup);
	}
}