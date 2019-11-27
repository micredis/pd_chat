import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";
import {User} from "../../model/user.model";
import {first} from "rxjs/operators";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent implements OnInit {
  private loading: boolean;
  private submitted: boolean;
  private fullName = new FormControl();
  private email = new FormControl('', [Validators.required, Validators.email]);
  private login = new FormControl();
  private password = new FormControl();
  private role = new FormControl();
  private error = '';
  private url: string = '/user';

  constructor(private http: HttpClient,
              private dialogRef: MatDialogRef<NewUserDialogComponent>,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (!this.fullName.value) {
      return;
    }

    if (!this.email.value) {
      return;
    }

    if (!this.login.value) {
      return;
    }

    if (!this.password.value) {
      return;
    }

    this.loading = true;
    let user: User = {
      fullName: this.fullName.value,
      email: this.email.value,
      login: this.login.value,
      password: this.password.value,
      role: this.role.value
    };
    this.authService.registrationUrl = this.url;
    this.authService.registration(user)
    .pipe(first())
    .subscribe(
      data => {
        this.dialogRef.close();
      }, error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  getFullNameErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('full_name') ? 'Not a valid full name' :
        '';
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getLoginErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('login') ? 'Not a valid login' :
        '';
  }

  getPasswordErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('password') ? 'Not a valid password' :
        '';
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}