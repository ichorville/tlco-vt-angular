import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { SimpleDatatableModule } from '../../shared/simple-datatable/simple-datatable.module';

import { PriceListComponent } from './price-list/price-list.component';
import { PriceListAddComponent } from './price-list-add/price-list-add.component';
import { PriceListEditComponent } from './price-list-edit/price-list-edit.component';

import { PriceListRoutes } from "./price-list.routing";
import { PriceListService } from './price-list.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(PriceListRoutes),
		SimpleDatatableModule
	],
	declarations: [
		PriceListComponent, 
		PriceListAddComponent, 
		PriceListEditComponent
	],
	providers: [
		PriceListService
	]
})
export class PriceListModule { }
