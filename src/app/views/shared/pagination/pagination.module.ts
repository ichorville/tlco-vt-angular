import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
	MatTooltipModule
   } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PaginationComponent } from './pagination.component';
import { PaginationService } from './pagination.service';

@NgModule({
	imports: [
		CommonModule,
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
		FlexLayoutModule
	],
	declarations: [
		PaginationComponent
	],
	providers: [
		PaginationService
	],
	exports: [
		PaginationComponent
	]
})
export class PaginationModule { }
