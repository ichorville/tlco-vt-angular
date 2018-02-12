import { Routes } from '@angular/router';

import { PriceListComponent } from './price-list/price-list.component';

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
        data: { title: 'List', breadcrumb: 'List' }
    }
];