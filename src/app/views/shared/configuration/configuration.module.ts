import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
	MatCardModule,
	MatIconModule,
	MatButtonModule,
	MatToolbarModule,
	MatSidenavModule,
	MatMenuModule,
	MatInputModule,
	MatDialogModule,
	MatListModule,
	MatCheckboxModule,
	MatTooltipModule,
	MatStepperModule
   } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { ConfigurationComponent } from './configuration.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatSidenavModule,
		MatMenuModule,
		MatInputModule,
		MatDialogModule,
		MatListModule,
		MatCheckboxModule,
		MatTooltipModule,
		MatStepperModule,
		FlexLayoutModule,
		QuillModule
	],
	declarations: [
		ConfigurationComponent
	],
	exports: [
		ConfigurationComponent
	]
})
export class ConfigurationModule { }
