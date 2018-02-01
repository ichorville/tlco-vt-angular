import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface IMenuItem {
	type: string,       // Possible values: link/dropDown/icon/separator/extLink
	name?: string,      // Used as display text for item and title for separator type
	state?: string,     // Router state
	icon?: string,      // Item icon name
	tooltip?: string,   // Tooltip text 
	disabled?: boolean, // If true, item will not be appeared in sidenav.
	sub?: IChildItem[]  // Dropdown items
}
interface IChildItem {
	name: string,       // Display text
	state: string       // Router state
}

@Injectable()
export class NavigationService {
	constructor() { }

	defaultMenu: IMenuItem[] = [
		{
			name: 'DASHBOARD',
			type: 'link',
			tooltip: 'Dashboard',
			icon: 'dashboard',
			state: 'dashboard'
		},
		{
			name: 'Products',
			type: 'link',
			tooltip: 'Products',
			icon: 'shopping_cart',
			state: 'products/list', 
		},
		{
			name: 'Price List',
			type: 'link',
			tooltip: 'Price List',
			icon: 'shopping_cart',
			state: 'configuration', 
			sub: [
				{ name: 'Price List', state: 'prices/list' }
			]
		}
	]


	// Icon menu TITLE at the very top of navigation.
	// This title will appear if any icon type item is present in menu.
	iconTypeMenuTitle: string = 'Frequently Accessed';
	// sets iconMenu as default;
	menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
	// navigation component has subscribed to this Observable
	menuItems$ = this.menuItems.asObservable();
}