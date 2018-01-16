import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatListModule,
	MatIconModule,
	MatToolbarModule,
	MatButtonModule,
	MatCardModule,
	MatMenuModule,
	MatSlideToggleModule,
	MatGridListModule,
	MatChipsModule,
	MatCheckboxModule,
	MatRadioModule,
	MatTabsModule,
	MatInputModule,
	MatProgressBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { SearchModule } from '../search/search.module';

import { EntityMappingComponent } from './entity-mapping.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		MatListModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		MatMenuModule,
		MatSlideToggleModule,
		MatGridListModule,
		MatChipsModule,
		MatCheckboxModule,
		MatRadioModule,
		MatTabsModule,
		MatInputModule,
		MatProgressBarModule,
		FlexLayoutModule,
		QuillModule,
		SearchModule
	],
	declarations: [
		EntityMappingComponent
	],
	exports: [
		EntityMappingComponent
	]
})
export class EntityMappingModule { }
