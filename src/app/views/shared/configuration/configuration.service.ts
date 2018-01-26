import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Injectable()
export class ConfigurationService {

	constructor(
        private _formBuilder: FormBuilder 
    ) { }

    /**
     * This method signature deviates from the dynamic form toFormGroup method where the
     * elements are configured to bind to the behaviour of the mat-step series
     */
	toStepFormGroup(stepElements: any[]) {       
        // create a new formConfigArray of type FormArray
        let formConfigArray = this._formBuilder.array([]);

        // create a group of form chunks for each step available
        stepElements.forEach(element => {
            formConfigArray.push(this._formBuilder.group({
                // create custom formControl elements per value of each step
                [element.order]: [element.isCompleted || '', Validators.required]
            }))
        });

        // return customised formConfigArray as new formGroup
        return new FormGroup({formConfigArray});
    }
    
    /**
     * Main functionality is to configure Form steps with specific names derived
     * from the from elements provided; in this case the form names are converted to 
     * FormGroups according to the available steps with element order as the names
     */
}
