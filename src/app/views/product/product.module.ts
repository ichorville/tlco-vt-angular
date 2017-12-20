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

import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutes } from "./product.routing";

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
		RouterModule.forChild(ProductRoutes),
		DatatableModule
	],
	declarations: [
		ProductListComponent
	]
})
export class ProductModule { }
