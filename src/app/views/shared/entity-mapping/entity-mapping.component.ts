import { 
	Component, 
	OnInit, 
	Input, 
	EventEmitter, 
	Output,
	ViewChild } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MatSidenav, MatDialog } from '@angular/material';

@Component({
	selector: 'app-entity-mapping',
	templateUrl: './entity-mapping.component.html',
	styleUrls: ['./entity-mapping.component.css']
})
export class EntityMappingComponent implements OnInit {

	@Input()
	arrayElements: any[];

	tasks: any;
	isValid = true;
	selectToggleFlag = false;
	selectedTotal: number;

	tempIntparam = 0;
	tempSeacrVal = [];

	mapEntityArray: any[];

	isMobile;
	screenSizeWatcher: Subscription;
	isSidenavOpen: Boolean = true;
	@ViewChild(MatSidenav) private sideNave: MatSidenav;

	activeChatUser = {
		name: 'Gevorg Spartak',
		photo: 'assets/images/face-2.jpg',
		isOnline: true,
		lastMsg: 'Hello!'
	  };
	
	  connectedUsers = [{
		name: 'Gevorg Spartak',
		photo: 'assets/images/face-2.jpg',
		isOnline: true,
		lastMsg: 'What\'s going!'
	  }, {
		name: 'Petros Toros',
		photo: 'assets/images/face-4.jpg',
		isOnline: true,
		lastMsg: 'Send me the stories.'
	  }, {
		name: 'Henrik Gevorg',
		photo: 'assets/images/face-5.jpg',
		isOnline: false,
		lastMsg: 'Great work!!'
	  }, {
		name: 'Gevorg Spartak',
		photo: 'assets/images/face-6.jpg',
		isOnline: false,
		lastMsg: 'Bye'
	  }, {
		name: 'Petros Toros',
		photo: 'assets/images/face-7.jpg',
		isOnline: true,
		lastMsg: 'We\'ll talk later'
	  }]

	constructor(
		private media: ObservableMedia
	) {
		this.mapEntityArray = [];
	}

	ngOnInit() {

		this.arrayElements.forEach((element, index) => {

			this.mapEntityArray.push({
				index: index,
				title: element['title'],
				arrElement: element['value'],
				tempArrElement: element['value'],
				validElements: [],
				isValid: true,
				selectToggleFlag: false,
				selectedTotal: 0
			});
			this.calculateTotalSelected(index);	
			this.calculateAssigned(index);
		});	

		this.chatSideBarInit();
		this.changeActiveUser(this.mapEntityArray[0]);
	}

	toggleAll(index) {
		this.mapEntityArray[index]['arrElement'].forEach(element => element.status = this.mapEntityArray[index].selectToggleFlag);
		this.calculateTotalSelected(index);
	}

	toggleEntity(index) {
		if (this.mapEntityArray[index].selectToggleFlag == true) {
			this.mapEntityArray[index].selectToggleFlag = !this.mapEntityArray[index].selectToggleFlag;
		}
		this.calculateTotalSelected(index);	
		return;
	}

	calculateTotalSelected(index) {
		this.mapEntityArray[index].selectedTotal = 0;
		this.mapEntityArray[index]['tempArrElement'].forEach(element => element.status == true 
			? this.mapEntityArray[index].selectedTotal++ 
				: this.mapEntityArray[index].selectedTotal);
		this.calculateAssigned(index);
	}

	calculateAssigned(index) {
		this.mapEntityArray[index]['validElements'] = this.mapEntityArray[index]['arrElement'].filter(function (element) {
			if (element['status'] == true) {
				return true;
			}
		});
	}

	reloadList(event) {
		console.log(event[1]);
		if (event != undefined) {
			if (event[0] == 'NDF') {
				this.mapEntityArray[event[1]].isValid = false;
			} else {
				this.tempIntparam = event[1];
				this.tempSeacrVal = event;
				// if (this.tempIntparam > 0) {
				// 	this.mapEntityArray[this.tempIntparam].isValid = true;
				// 	this.mapEntityArray[this.tempIntparam]['arrElement'] = event[0];
				// }

				if (event[1] == undefined) { // wrong implementation change it
					if (this.tempIntparam > 0) {
						this.mapEntityArray[this.tempIntparam].isValid = true;
						this.mapEntityArray[this.tempIntparam]['arrElement'] = event;
					}
				} else {
					this.mapEntityArray[this.tempIntparam].isValid = true;
					this.mapEntityArray[this.tempIntparam]['arrElement'] = event[0];
				}
			}
		}
	}

	changeActiveUser(user) {
		this.activeChatUser = user;
	}

	updateSidenav() {
		var self = this;
		setTimeout(() => {
			self.isSidenavOpen = !self.isMobile;
			self.sideNave.mode = self.isMobile ? 'over' : 'side';
		})
	}
	chatSideBarInit() {
		this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
		this.updateSidenav();
		this.screenSizeWatcher = this.media.subscribe((change: MediaChange) => {
			this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
			this.updateSidenav();
		});
	}
}
