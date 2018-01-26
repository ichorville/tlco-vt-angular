import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	@ViewChild(MatProgressBar) progressBar: MatProgressBar;
	@ViewChild(MatButton) submitButton: MatButton;

	signinForm: FormGroup;

	constructor(
		private _as: AuthService,
		private router: Router
	) { }

	ngOnInit() {
		this.signinForm = new FormGroup({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
			rememberMe: new FormControl(false)
		});
	}

	signin() {
		const signinData = this.signinForm.value;

		this.submitButton.disabled = true;
		this.progressBar.mode = 'indeterminate';

		this._as.validateUser(signinData).then((result) => {
			if (result == true) {
				this.router.navigateByUrl(`/dashboard`);
			} else {
				window.location.reload();
			}
		});
	}
}
