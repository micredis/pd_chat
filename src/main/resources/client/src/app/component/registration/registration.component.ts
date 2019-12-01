import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {FormControl, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private submitted: boolean;
  private fullName = new FormControl();
  private email = new FormControl('', [Validators.required, Validators.email]);
  private login = new FormControl();
  private password = new FormControl();
  private loginUrl: string = '/login';

  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

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

    const user: User = {
      fullName: this.fullName.value,
      email: this.email.value,
      login: this.login.value,
      password: this.password.value,
      role: "PARTICIPANT"
    };
    this.authService.registration(user)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.loginUrl]).then();
      }, error => {
        this.snackBar.open('Registration failed by: ', error, {
          duration: 2000,
        });
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
}
