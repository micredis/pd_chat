import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AboutComponent} from "./about.component";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
  ],
  declarations: [
    AboutComponent
  ],
  entryComponents:[AboutComponent]
})
export class AboutModule {
}
