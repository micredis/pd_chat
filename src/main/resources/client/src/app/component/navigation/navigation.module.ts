import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NavigationComponent} from "./navigation.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FlexModule} from "@angular/flex-layout";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FlexModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [
    NavigationComponent
  ],
  declarations: [NavigationComponent]
})
export class NavigationModule {
}
