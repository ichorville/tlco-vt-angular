import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';

import { DialogFormComponent } from './dialog-form.component';

@Injectable()
export class DialogFormService {

    constructor (
        private dialog: MatDialog
    ) { }

    public addItem(title: string, formElements: any): Observable<boolean> {
        let dialogRef: MatDialogRef<DialogFormComponent>;
        dialogRef = this.dialog.open(DialogFormComponent, {
            width: '720px',
            disableClose: true,
            data: { title, formElements }
        });
        return dialogRef.afterClosed();
    }

    public editItem(title: string, formElements: any): Observable<boolean> {
        let dialogRef: MatDialogRef<DialogFormComponent>;
        dialogRef = this.dialog.open(DialogFormComponent, {
            width: '720px',
            disableClose: true,
            data: { title, formElements }
        });
        return dialogRef.afterClosed();
    }
}