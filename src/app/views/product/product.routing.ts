import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { AdminLayoutComponent } from '../../components/common/layouts/admin-layout/admin-layout.component';

export const ProductRoutes: Routes = [
    {
		path: '',
		redirectTo: '/products/list',
		pathMatch: 'full'
	},
    {
        path: 'list',
        component: ProductListComponent,
        data: { title: 'List', breadcrumb: 'List' },
    },
    {
        path: 'config',
        component: ProductAddComponent,
        data: { title: 'Configuration', breadcrumb: 'Configuration' },
    },
    {
        path: ':id/config',
        component: ProductEditComponent,
        data: { title: 'Configuration', breadcrumb: 'Configuration' },
    }
];