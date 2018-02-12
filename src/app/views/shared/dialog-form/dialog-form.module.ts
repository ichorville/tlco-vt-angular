import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatDialogModule,
	MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { DialogFormComponent } from './dialog-form.component';

import { DialogFormService } from './dialog-form.service';

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule,
		MatButtonModule,
		FlexLayoutModule,
		DynamicFormModule
	],
	declarations: [
		DialogFormComponent
	],
	providers: [
		DialogFormService
	], 
	exports: [
		DialogFormComponent
	],
  	entryComponents: [
		DialogFormComponent
	]
})
export class DialogFormModule { }
