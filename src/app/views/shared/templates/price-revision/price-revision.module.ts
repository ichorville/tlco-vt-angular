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
	MatDatepickerModule,
	MatStepperModule
} from '@angular/material';
import { SimpleDatatableModule } from '../../simple-datatable/simple-datatable.module';
import { AppLoaderModule } from '../../../../services/app-loader/app-loader.module';

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
		MatDatepickerModule,
		MatStepperModule,
		SimpleDatatableModule,
		AppLoaderModule
	],
	declarations: [
		PriceRevisionComponent
	], 
	exports: [
		PriceRevisionComponent
	]
})
export class PriceRevisionModule { }
