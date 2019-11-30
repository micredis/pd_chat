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
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BasicAuthInterceptor} from "./helper/basic-auth-interceptor";
import {ErrorInterceptor} from "./helper/error-interceptor";
import {HomeComponent} from './component/home/home.component';
import {MatTableModule} from "@angular/material/table";
import {FlexModule} from "@angular/flex-layout";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {UsersComponent} from './component/users/users.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NewUserDialogComponent} from './component/new-user-dialog/new-user-dialog.component';
import {NewUserDialogModule} from "./component/new-user-dialog/new-user-dialog.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {UserEditDialogComponent} from './component/user-edit-dialog/user-edit-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {MessageEditDialogComponent} from './component/message-edit-dialog/message-edit-dialog.component';
import {NewMessageDialogComponent} from './component/new-message-dialog/new-message-dialog.component';
import {MatListModule} from "@angular/material/list";
import {AddressBookComponent} from "./component/address-book/address-book.component";
import {NewAddressBookComponent} from './component/new-address-book/new-address-book.component';
import {AddressBookEditDialogComponent} from './component/address-book-edit-dialog/address-book-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    RegistrationComponent,
    UserEditDialogComponent,
    MessageEditDialogComponent,
    NewMessageDialogComponent,
    AddressBookComponent,
    NewAddressBookComponent,
    AddressBookEditDialogComponent
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
    MatTableModule,
    FlexModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NewUserDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
  ],
  providers: [MatSnackBar,
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewUserDialogComponent,
    UserEditDialogComponent,
    NewMessageDialogComponent,
    MessageEditDialogComponent,
    NewAddressBookComponent,
    AddressBookEditDialogComponent],
})
export class AppModule {
}
