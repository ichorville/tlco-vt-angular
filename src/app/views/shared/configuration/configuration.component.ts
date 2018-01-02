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
	
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;

	constructor(private _formBuilder: FormBuilder) { }

	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});
	}
}