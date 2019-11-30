import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MessageService} from "../../service/message.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {AddressBookModel} from "../../model/address-book.model";
import {first} from "rxjs/operators";
import {AddressBookService} from "../../service/address-book.service";

@Component({
  selector: 'app-address-book-edit-dialog',
  templateUrl: './address-book-edit-dialog.component.html',
  styleUrls: ['./address-book-edit-dialog.component.css']
})
export class AddressBookEditDialogComponent {
  private fullName: string;
  private email: string;
  private addressBook: AddressBookModel;

  constructor(private dialogRef: MatDialogRef<AddressBookEditDialogComponent>,
              private addressBookService: AddressBookService,
              private router: Router,
              private location: Location,
              @Optional() @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.addressBook = data.pageValue;
    this.fullName = this.addressBook.fullName;
    this.email = this.addressBook.email;
  }

  delete() {
    this.addressBookService.delete(this.addressBook.id).pipe(first()).subscribe(value => {
      this.dialogRef.close();
      this.refresh();
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  refresh() {
    this.router.navigateByUrl('/AddressBookComponent', {skipLocationChange: true}).then(() => {
      this.router.navigate([decodeURI(this.location.path())]).then();
    });
  }
}
