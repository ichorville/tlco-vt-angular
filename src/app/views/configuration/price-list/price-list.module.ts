import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { SimpleDatatableModule } from '../../shared/simple-datatable/simple-datatable.module';
import { AppLoaderModule } from '../../../services/app-loader/app-loader.module';

import { PriceListComponent } from './price-list/price-list.component';

import { PriceListRoutes } from "./price-list.routing";
import { PriceListService } from './price-list.service';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(PriceListRoutes),
		SimpleDatatableModule,
		AppLoaderModule
	],
	declarations: [
		PriceListComponent
	],
	providers: [
		PriceListService,
		AppLoaderService
	]
})
export class PriceListModule { }
