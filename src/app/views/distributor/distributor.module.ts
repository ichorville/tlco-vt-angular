import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistributorComponent } from './distributor.component';
import { DistributorAddComponent } from './distributor-add/distributor-add.component';
import { DistributorEditComponent } from './distributor-edit/distributor-edit.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		DistributorComponent,
		DistributorAddComponent,
		DistributorEditComponent
	],
	exports: [
		DistributorComponent
	]
})
export class DistributorModule { }
