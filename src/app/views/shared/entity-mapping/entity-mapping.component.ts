import { 
	Component, 
	OnInit, 
	Input, 
	EventEmitter, 
	Output,
	ViewChild } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MatSidenav, MatDialog, MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-entity-mapping',
	templateUrl: './entity-mapping.component.html',
	styleUrls: ['./entity-mapping.component.css']
})
export class EntityMappingComponent implements OnInit {

	@Input()
	stepOrder: number;

	@Input()
	arrayElements: any[];

	@Output()
	onMappingCompletion: EventEmitter<any>;

	tempIntparam = 0;
	tempSeacrVal = [];

	mapEntityArray: any[];

	isMobile;
	screenSizeWatcher: Subscription;
	isSidenavOpen: Boolean = true;
	@ViewChild(MatSidenav) private sideNave: MatSidenav;

	currentMapping = {};
	mapEntity = {};

	constructor(
		private snackBar: MatSnackBar,
		private media: ObservableMedia
	) {
		this.mapEntityArray = [];
		this.onMappingCompletion = new EventEmitter<any>();
	}

	ngOnInit() {

		this.arrayElements.forEach((element, index) => {
			this.mapEntityArray.push({
				index: index,
				key: element['key'],
				title: element['title'],
				arrElement: element['value'],
				tempArrElement: element['value'],
				validElements: [],
				isValid: true,
				selectToggleFlag: false,
				selectedTotal: 0,
				doneSelected: false
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
		this.mapEntityArray[index]['doneSelected'] = false;
	}

	calculateAssigned(index) {
		this.mapEntityArray[index]['validElements'] = this.mapEntityArray[index]['arrElement'].filter(function (element) {
			if (element['status'] == true) {
				return true;
			}
		});
	}

	currentMappingCompleted(mappingControl) {
		if (mappingControl['validElements'].length > 0) {
			mappingControl['doneSelected'] = true;
		} else {
			return this.openSnackBar('Current Mapping Entity Empty');
		}
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
		this.currentMapping = user;
	}

	onMapCompletion() {
		let arr = [];
		this.mapEntityArray.forEach(element => {
			if (element['doneSelected'] == true) {
				arr.push('Item Completed');
			} 
		});

		if (arr.length != this.mapEntityArray.length) {
			return this.openSnackBar('Entity Mapping Process Incomplete');
		} else {	
			this.mapEntityArray.forEach(element => {
				this.mapEntity[element['key']] = element['validElements']
			});

			this.onMappingCompletion.emit({
				key: this.stepOrder,
				value: this.mapEntity
			});
		}
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

	openSnackBar(message) {
		this.snackBar.open(`${ message }`, 'close', { duration: 2000 });
	}
}
