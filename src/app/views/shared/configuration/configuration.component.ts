import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
	selector: 'app-configuration',
	templateUrl: './configuration.component.html',
	styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

	@Input()
	isLinear: boolean;

	// @Input()
	// steps: any[];
	
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;

	form: FormGroup;

	formGroup: FormGroup;
	isNonEditable = false;

	nameFormGroup: FormGroup;
	emailFormGroup: FormGroup;

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
	  
		  this.nameFormGroup = this._formBuilder.group({
			firstNameCtrl: ['', Validators.required],
			lastNameCtrl: ['', Validators.required],
		  });
	  
		  this.emailFormGroup = this._formBuilder.group({
			emailCtrl: ['']
		  });
	}
	steps = [
		{label: 'Confirm your name', content: 'Last name, First name.'},
		{label: 'Confirm your contact information', content: '123-456-7890'},
		{label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV'},
		{label: 'You are now done', content: 'Finished!'}
	  ];


}