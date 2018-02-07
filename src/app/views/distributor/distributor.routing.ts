import { Routes } from '@angular/router';

import { DistributorListComponent } from './distributor-list/distributor-list.component';
import { DistributorAddComponent } from './distributor-add/distributor-add.component';
import { DistributorEditComponent } from './distributor-edit/distributor-edit.component';

import { AdminLayoutComponent } from '../../components/common/layouts/admin-layout/admin-layout.component';

export const DistributorRoutes: Routes = [
    {
		path: '',
		redirectTo: '/distributors/list',
		pathMatch: 'full'
	},
    {
        path: 'list',
        component: DistributorListComponent,
        data: { title: 'List', breadcrumb: 'List' },
    },
    {
        path: 'config',
        component: DistributorAddComponent,
        data: { title: 'Configuration', breadcrumb: 'Configuration' },
    },
    {
        path: ':id/config',
        component: DistributorEditComponent,
        data: { title: 'Configuration', breadcrumb: 'Configuration' },
    }
];