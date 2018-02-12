import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { 
	MatTabsModule,
	MatCardModule,
	MatListModule,
	MatIconModule,
	MatToolbarModule,
	MatButtonModule,
	MatMenuModule,
	MatSlideToggleModule,
	MatGridListModule,
	MatChipsModule,
	MatCheckboxModule,
	MatRadioModule,
	MatInputModule,
	MatProgressBarModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatSelectModule,
	MatDatepickerModule
} from '@angular/material';

import { PriceRevisionComponent } from './price-revision.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		FlexLayoutModule,
		QuillModule,
		MatTabsModule,
		MatCardModule,
		MatListModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatMenuModule,
		MatSlideToggleModule,
		MatGridListModule,
		MatChipsModule,
		MatCheckboxModule,
		MatRadioModule,
		MatInputModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatSelectModule,
		MatDatepickerModule
	],
	declarations: [
		PriceRevisionComponent
	], 
	exports: [
		PriceRevisionComponent
	]
})
export class PriceRevisionModule { }
