import { Routes } from '@angular/router';

import { PriceListComponent } from './price-list/price-list.component';
import { PriceListAddComponent } from './price-list-add/price-list-add.component';
import { PriceListEditComponent } from './price-list-edit/price-list-edit.component';

import { AdminLayoutComponent } from '../../../components/common/layouts/admin-layout/admin-layout.component';

export const PriceListRoutes: Routes = [
    {
		path: '',
		redirectTo: '/configuration/prices/list',
		pathMatch: 'full'
	},
    {
        path: 'list',
        component: PriceListComponent,
        data: { title: 'List', breadcrumb: 'List' },
    },
    {
        path: 'add',
        component: PriceListAddComponent,
        data: { title: 'Add', breadcrumb: 'Add' },
    },
    {
        path: ':id/edit',
        component: PriceListEditComponent,
        data: { title: 'Edit', breadcrumb: 'Edit' },
    }
];