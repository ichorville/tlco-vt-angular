import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import {
	MatProgressBarModule,
	MatButtonModule,
	MatInputModule,
	MatCardModule,
	MatCheckboxModule,
	MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DatatableModule } from '../shared/datatable/datatable.module';
import { ConfigurationModule } from '../shared/configuration/configuration.module';

import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { DistributorAddComponent } from './distributor-add/distributor-add.component';
import { DistributorEditComponent } from './distributor-edit/distributor-edit.component';

import { DistributorRoutes } from "./distributor.routing";
import { DistributorService } from './distributor.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		MatProgressBarModule,
		MatButtonModule,
		MatInputModule,
		MatCardModule,
		MatCheckboxModule,
		MatIconModule,
		FlexLayoutModule,
		RouterModule.forChild(DistributorRoutes),
		DatatableModule,
		ConfigurationModule
	],
	declarations: [
		DistributorListComponent,
		DistributorAddComponent,
		DistributorEditComponent
	],
	providers: [
		DistributorService
	]
})
export class DistributorModule { }
