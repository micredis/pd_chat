import {Component, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {FormControl, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent {
  private user: User;
  private fullName = new FormControl();
  private email = new FormControl('', [Validators.required, Validators.email]);
  private login = new FormControl();
  private password = new FormControl();
  private role = new FormControl();
  private active = new FormControl();

  constructor(private dialogRef: MatDialogRef<UserEditDialogComponent>,
              private userService: UserService,
              private authService: AuthService,
              private router: Router,
              @Optional() @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.user = data.pageValue;
  }

  onSubmit() {
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

    this.user = {
      fullName: this.fullName.value,
      email: this.email.value,
      login: this.login.value,
      password: this.password.value,
      role: this.role.value,
      active: this.active.value
    };
    this.authService.update(this.user)
    .pipe(first())
    .subscribe(
      data => {
        this.dialogRef.close();
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

  delete() {
    this.userService.delete(this.user.id).subscribe();
    this.dialogRef.close();
  }
}
