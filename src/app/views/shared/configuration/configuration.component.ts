import { 
	Component, 
	OnInit, 
	Input, 
	ChangeDetectorRef,
	Output,
	EventEmitter } from '@angular/core';
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

	@Output()
	onConfigSubmit: EventEmitter<any>;

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
		this.onConfigSubmit = new EventEmitter<any>();
	}

	ngOnInit() {
		// step['isCompleted'] only available in edit component
		this.steps.forEach(step => {
			this.configEntity[step['order']] = {
				value: '',
				isCompleted: '' || step['isCompleted']
			};
		});
		this.configForm = this._cs.toStepFormGroup(this.steps);
	}

	unlockStep(event: any) {
		Object.keys(this.configEntity).map((element) => {
			if (element == event['key']) {
				this.configEntity[element]['value'] = event['value'];
				this.configEntity[element]['isCompleted'] = event['completed'];
			} 
			return;
		});
		console.log(this.configEntity);	
	}

	onSumit() {
		this.onConfigSubmit.emit(this.configEntity);
	}
}