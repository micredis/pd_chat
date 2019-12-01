import {AuthService} from "../../service/auth.service";
import {first} from "rxjs/operators";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private submitted: boolean;
  private email = new FormControl('', [Validators.required, Validators.email]);
  private password = new FormControl();
  private returnUrl: string;
  private registrationPage: string = '/registration';

  getEmailErrorMessage() {
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
              private location: Location,
              private route: ActivatedRoute) {
    if (this.authService.currentUser) {
      this.router.navigate(['/']).then();
    }
  }

  ngOnInit() {
    this.authService.logout();
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

    this.authService.login(this.email.value, this.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.refreshNavMenu();
        this.router.navigate([this.returnUrl]).then();
      });
  }

  toRegistration() {
    this.router.navigate([this.registrationPage]).then();
  }

  private refreshNavMenu() {
    this.router.navigateByUrl('/NavigationComponent', {skipLocationChange: true}).then(() => {
      this.router.navigate([decodeURI(this.location.path())]).then();
    });
  }
}
