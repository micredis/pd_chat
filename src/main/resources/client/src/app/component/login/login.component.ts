import {User} from "../../model/user.model";
import {FormControl, Validators} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {first, map} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl();
  error = '';
  private returnUrl: "";

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.pipe(map(params => params['returnUrl'] || '/'))
    .subscribe(
      url => this.returnUrl = url
    );
  }

  onSubmit() {
    this.authService.login(this.email.value, this.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
      });
  }
}
