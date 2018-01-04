import { 
	Component, 
	OnInit, 
	Input, 
	AfterViewChecked, 
	ChangeDetectorRef,
	AfterContentChecked, 
	EventEmitter, 
	Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FormElement } from '../form-elements/form-element';

@Component({
	selector: 'app-dynamic-step-form',
	templateUrl: './dynamic-step-form.component.html',
	styleUrls: ['./dynamic-step-form.component.css']
})
export class DynamicStepFormComponent implements OnInit {

	@Input()
	formElements: FormElement<any>[];

	form: FormGroup;

	mockModel = {};
	model = {};

	tempFormElements: any[];

	constructor(
		// private _fcs: FormControlService,
		private cd: ChangeDetectorRef
	) { 
		this.tempFormElements = [];
	}

	ngOnInit() {

	}
}
