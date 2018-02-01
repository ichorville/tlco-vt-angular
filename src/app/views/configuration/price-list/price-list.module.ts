import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PriceListComponent } from './price-list/price-list.component';
import { PriceListAddComponent } from './price-list-add/price-list-add.component';
import { PriceListEditComponent } from './price-list-edit/price-list-edit.component';

import { PriceListRoutes } from "./price-list.routing";

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(PriceListRoutes)
	],
	declarations: [
		PriceListComponent, 
		PriceListAddComponent, 
		PriceListEditComponent
	]
})
export class PriceListModule { }
