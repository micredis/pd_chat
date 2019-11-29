import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";
import {User} from "../../model/user.model";
import {first} from "rxjs/operators";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent {
  private fullName = new FormControl();
  private email = new FormControl('', [Validators.required, Validators.email]);
  private login = new FormControl();
  private password = new FormControl();
  private role = new FormControl();
  private url: string = '/user';

  constructor(private dialogRef: MatDialogRef<NewUserDialogComponent>,
              private authService: AuthService,
              private router: Router,
              private location: Location) {
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
        this.refreshUsers();
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

  refreshUsers() {
    this.router.navigateByUrl('/UsersComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]).then();
    });
  }
}
