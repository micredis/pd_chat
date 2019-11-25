import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginRoutingModule} from "./component/login/login-routing.module";
import {LoginComponent} from "./component/login/login.component";
import {AuthGuard} from "./helper/auth-guard.service";
import {HomeComponent} from "./component/home/home.component";


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false}),
    LoginRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
