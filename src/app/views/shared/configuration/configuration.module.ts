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
import { DynamicStepFormModule } from '../dynamic-step-form/dynamic-step-form.module';
import { EntityMappingModule } from '../entity-mapping/entity-mapping.module';

import { ConfigurationComponent } from './configuration.component';
import { ConfigurationService } from './configuration.service';

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
		QuillModule,
		DynamicStepFormModule,
		EntityMappingModule
	],
	declarations: [
		ConfigurationComponent
	],
	providers: [
		ConfigurationService
	],
	exports: [
		ConfigurationComponent
	]
})
export class ConfigurationModule { }
