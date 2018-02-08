import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDatatableComponent } from './simple-datatable.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SimpleDatatableComponent
	], 
	exports: [
		SimpleDatatableComponent
	]
})
export class SimpleDatatableModule { }
