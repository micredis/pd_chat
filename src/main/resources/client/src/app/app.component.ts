import { Component } from '@angular/core';
import {User} from "./model/user.model";
import {Router} from "@angular/router";
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  currentUser: User;

  constructor(private router: Router, private authService: AuthService){
    this.authService.currentUser.subscribe(value => this.currentUser = value);
  }
}
