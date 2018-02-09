import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';

import { AuthService } from './services/auth/auth.service';

export const rootRouterConfig: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: 'sessions',
				loadChildren: './views/sessions/sessions.module#SessionsModule',
				data: { title: 'Session' }
			}
		]
	},
	{
		path: '',
		component: AdminLayoutComponent,
		canActivate: [AuthService],
		children: [
			{
				path: 'dashboard',
				loadChildren: './views/others/others.module#OthersModule',
				data: { title: 'Dashboard Blank', breadcrumb: 'DASHBOARD' }
			},
			{
				path: 'products',
				loadChildren: './views/product/product.module#ProductModule',
				data: { title: 'Products', breadcrumb: 'Product' }
			},
			{
				path: 'distributors',
				loadChildren: './views/distributor/distributor.module#DistributorModule',
				data: { title: 'Distributors', breadcrumb: 'Distributor' }
			},
			{
				path: 'configuration/prices',
				loadChildren: './views/configuration/price-list/price-list.module#PriceListModule',
				data: { title: 'Price-List', breadcrumb: 'Price-List' }
			}
		]
	},
	{
		path: '**',
		redirectTo: 'sessions/404'
	}
];