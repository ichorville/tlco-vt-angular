import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { FormElement } from '../form-elements/form-element';

@Injectable()
export class DynamicStepFormService {

	constructor(
        private _formBuilder: FormBuilder 
    ) { }

    /**
     * This method signature feviates from the dynamic form toFormGroup method where the
     * form elements are configured to bind to the behaviour of the mat-step series
     */
	toFormGroup(formElements: FormElement<any>[]) {       
        // create a new formArray of type FormBuilder
        let formArray = this._formBuilder.array([]);

        // create a group of form chunks for each step available
        formElements.forEach(formElement => {
            formArray.push(this._formBuilder.group({
                // create custom formControl elements per value of each formElement
                [formElement.key]: [formElement.value || '', formElement.validators]
            }))
        });

        // return customised formArray as new formGroup
        return new FormGroup({formArray});
	}
}
