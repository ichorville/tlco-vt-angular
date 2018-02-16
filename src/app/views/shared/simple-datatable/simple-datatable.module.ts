import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
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
	MatChipsModule, 
	MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { CommonDirectivesModule } from '../../../directives/common/common-directives.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SearchModule } from '../search/search.module';

import { AppConfirmModule } from '../../../services/app-confirm/app-confirm.module';
import { AppConfirmService } from '../../../services/app-confirm/app-confirm.service';

import { DialogFormModule } from '../dialog-form/dialog-form.module';
import { DialogFormService } from '../dialog-form/dialog-form.service';

import { SimpleDatatableComponent } from './simple-datatable.component';
import { SimpleDatatableService } from './simple-datatable.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule, 
		ReactiveFormsModule,
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
		MatChipsModule,
		FlexLayoutModule,
		QuillModule,
		CommonDirectivesModule,
		PaginationModule,
		SearchModule,
		AppConfirmModule,
		DialogFormModule,
		MatCardModule
	],
	declarations: [
		SimpleDatatableComponent
	], 
	providers: [
		SimpleDatatableService,
		AppConfirmService,
		DialogFormService
	],
	exports: [
		SimpleDatatableComponent
	]
})
export class SimpleDatatableModule { }
