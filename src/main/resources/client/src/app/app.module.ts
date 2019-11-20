import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "./component/login/login.module";
import {AboutModule} from "./component/about/about.module";
import {NavigationModule} from "./component/navigation/navigation.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationModule,
    LoginModule,
    AboutModule,
    MatSidenavModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {
}
