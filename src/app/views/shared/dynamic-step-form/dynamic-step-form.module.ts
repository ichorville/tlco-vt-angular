import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatListModule,
	MatCardModule,
	MatProgressBarModule,
	MatRadioModule,
	MatCheckboxModule,
	MatButtonModule,
	MatIconModule,
	MatStepperModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { DynamicStepFormComponent } from './dynamic-step-form.component';
import { DynamicStepFormService } from './dynamic-step-form.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatListModule,
		MatCardModule,
		MatProgressBarModule,
		MatRadioModule,
		MatCheckboxModule,
		MatButtonModule,
		MatIconModule,
		MatStepperModule
	],
	declarations: [
		DynamicStepFormComponent
	],
	providers: [
		DynamicStepFormService
	],
	exports: [
		DynamicStepFormComponent
	]
})
export class DynamicStepFormModule { }
