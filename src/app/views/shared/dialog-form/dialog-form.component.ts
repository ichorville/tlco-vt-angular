import { Component, OnInit, Inject, Input } from '@angular/core';
import { 
	MatDialogRef, 
	MatDialog, 
	MatDialogConfig, 
	MAT_DIALOG_DATA, 
	MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-dialog-form',
	templateUrl: './dialog-form.component.html',
	styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

	@Input()
	title: string;

	@Input()
	message: string;

	form: FormGroup;

	constructor (
		private snackBar: MatSnackBar,
		public dialogRef: MatDialogRef<DialogFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data:any
	) { }

	ngOnInit() {

	}

	unlockForm(event) {
		this.form = event;
	}

	save() {
		try {
			if (this.form.status == "VALID") {
				// pass valid form into Datatable component
				this.dialogRef.close(this.form);
			} else {
				this.openSnackBar(`Form Incomplete!`);
			}
		} catch (e) {}	
	}

	closeDialog() {
		this.dialogRef.close(false)
	}

	openSnackBar(message) {
		this.snackBar.open(`${ message }`, 'close', { duration: 2000 });
	}
}
