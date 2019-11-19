import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginRoutingModule} from "./component/login/login-routing.module";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false}),
    LoginRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
