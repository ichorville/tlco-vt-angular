import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { AdminLayoutComponent } from '../../components/common/layouts/admin-layout/admin-layout.component';

export const ProductRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: ProductListComponent,
                data: { title: 'List', breadcrumb: 'List' },
            }, 
            {
                path: 'add',
                component: ProductListComponent,
                data: { title: 'Add', breadcrumb: 'Add' },
            }
        ]
    }
];