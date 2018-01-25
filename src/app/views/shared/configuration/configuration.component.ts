import { 
	Component, 
	OnInit, 
	Input, 
	ChangeDetectorRef,
	Output,
	EventEmitter,
	ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

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

	@Input()
	isEdit?: boolean;

	@Output()
	onConfigSubmit: EventEmitter<any>;

	configEntity = {};

	configForm: FormGroup;

	@ViewChild('configStepper') stepper: MatStepper;

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
		console.log(this.stepper);
		// step['isCompleted'] only available in edit component
		this.steps.forEach(step => {
			this.configEntity[step['order']] = {
				value: '',
				isCompleted: '' || step['isCompleted']
			};
		});
		this.configForm = this._cs.toStepFormGroup(this.steps);
		this.cd.detectChanges();
	}

	unlockStep(event: any) {
		Object.keys(this.configEntity).map((element) => {
			if (element == event['key']) {
				// bind values to necessary configEntity attribute
				this.configEntity[element]['value'] = event['value'];
				this.configEntity[element]['isCompleted'] = event['completed'];

				console.log(this.stepper._stepHeader);
				
				// add css classes on stepper as to indicate completion status of current stepper
				this.stepper._stepHeader.forEach((stepElement, index) => {
					if (index == event['key'] - 1) {
						if (this.configEntity[element]['isCompleted'] == true) {
							stepElement.nativeElement.style.background = 'lawngreen';
						} else {
							stepElement.nativeElement.style.background = '';
						}
					}				
				});
			}
		});
		console.log(this.configEntity);
	}

	onSumit() {
		this.onConfigSubmit.emit(this.configEntity);
	}
}