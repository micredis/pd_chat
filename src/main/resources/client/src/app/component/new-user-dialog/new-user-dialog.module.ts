import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewUserDialogComponent} from "./new-user-dialog.component";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [NewUserDialogComponent],
  imports: [
    CommonModule,
    FlexModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  entryComponents: []
})
export class NewUserDialogModule { }
