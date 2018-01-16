import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfigurationService } from './configuration.service';

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

	configEntity = {};

	configForm: FormGroup;

	get formConfigArray(): AbstractControl | null { 
		return this.configForm.get('formConfigArray'); 
	}

	constructor(
		private _formBuilder: FormBuilder,
		private _cs: ConfigurationService,
		private cd: ChangeDetectorRef
	) {
		this.steps = [];
	}

	ngOnInit() {
		// for add
		this.steps.forEach(step => {
			this.configEntity[step['order']] = {
				value: '',
				isCompleted: ''
			};
		});
		// for edit isCompleted has to be true
		this.configForm = this._cs.toStepFormGroup(this.steps);
	}

	unlockStep(event: any) {
		Object.keys(this.configEntity).map((element) => {
			if (element == event['key']) {
				this.configEntity[element]['value'] = event['value'];
				this.configEntity[element]['isCompleted'] = true;
			}
			return;
		});
		console.log(this.configEntity);	
	}

	onSumit() {
		console.log(this.configEntity);	
		console.log(this.configForm);
	}
}