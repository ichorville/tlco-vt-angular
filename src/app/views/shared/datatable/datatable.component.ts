import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MatSidenav, MatDialog } from '@angular/material';

import { DatatableService } from './datatable.service';

@Component({
	selector: 'app-datatable',
	templateUrl: './datatable.component.html',
	styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

	isMobile;
	screenSizeWatcher: Subscription;
	isSidenavOpen: Boolean = true;
	selectToggleFlag = false;
	@ViewChild(MatSidenav) private sideNave: MatSidenav;
	messages;
  
	constructor(
		private router: Router,
		private media: ObservableMedia,
		public composeDialog: MatDialog,
		private _ds: DatatableService
	) { }

	ngOnInit() {
		this.inboxSideNavInit();
		this.messages = this._ds.messages;
	}

	selectToggleAll() {
		this.selectToggleFlag = !this.selectToggleFlag;
		this.messages.forEach((msg) => { msg.selected = this.selectToggleFlag });
	}

	updateSidenav() {
		var self = this;
		setTimeout(() => {
			self.isSidenavOpen = !self.isMobile;
			self.sideNave.mode = self.isMobile ? 'over' : 'side';
		});
	}

	inboxSideNavInit() {
		this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
		this.updateSidenav();
		this.screenSizeWatcher = this.media.subscribe((change: MediaChange) => {
			this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
			this.updateSidenav();
		});
	}
}
