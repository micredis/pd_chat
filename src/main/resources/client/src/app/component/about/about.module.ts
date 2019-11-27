import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AboutComponent} from "./about.component";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    FlexModule,
    MatCardModule,
  ],
  declarations: [
    AboutComponent
  ],
  entryComponents:[AboutComponent]
})
export class AboutModule {
}
