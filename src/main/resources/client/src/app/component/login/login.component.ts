import {User} from "../../model/user.model";
import {AuthService} from "../../service/auth.service";
import {first} from "rxjs/operators";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  submitted: boolean;
  user: User;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl();
  error = '';
  returnUrl: string;

  getLoginErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('password') ? 'Not a valid password' :
        '';
  }

  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {
    if (this.authService.currentUser) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home'
  }

  onSubmit() {
    this.submitted = true;

    if (!this.email.value) {
      return;
    }

    if (!this.password.value) {
      return;
    }

    this.loading = true;
    this.authService.login(this.email.value, this.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }
}
