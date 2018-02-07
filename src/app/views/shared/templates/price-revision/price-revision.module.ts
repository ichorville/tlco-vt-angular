import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';

import { PriceRevisionComponent } from './price-revision.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		FlexLayoutModule,
		QuillModule
	],
	declarations: [
		PriceRevisionComponent
	], 
	exports: [
		PriceRevisionComponent
	]
})
export class PriceRevisionModule { }
