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

import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutes } from "./product.routing";
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

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
		DatatableModule,
		ConfigurationModule
	],
	declarations: [
		ProductListComponent,
		ProductAddComponent,
		ProductEditComponent
	],
	providers:[
		ProductService
	]
})
export class ProductModule { }
