import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {AddressBookService} from "../../service/address-book.service";
import {Router} from "@angular/router";
import {AddressBookModel} from "../../model/address-book.model";
import {first} from "rxjs/operators";
import {Location} from "@angular/common";

@Component({
  selector: 'app-new-address-book',
  templateUrl: './new-address-book.component.html',
  styleUrls: ['./new-address-book.component.css']
})
export class NewAddressBookComponent {
  private fullName = new FormControl();
  private email = new FormControl();

  constructor(private dialogRef: MatDialogRef<NewAddressBookComponent>,
              private addressBookService: AddressBookService,
              private router: Router,
              private location: Location) {
  }

  onSubmit() {
    if (!this.fullName.value) {
      return;
    }

    if (!this.email.value) {
      return;
    }

    const addressBook: AddressBookModel = {
      fullName: this.fullName.value,
      email: this.email.value
    };

    this.addressBookService.create(addressBook).pipe(first()).subscribe(value => {
      this.dialogRef.close();
      this.refresh();
    });
  }

  getFullNameErrorMessage() {
    return this.fullName.hasError('required') ? 'You must enter a value' :
      this.fullName.hasError('fullName') ? 'Not a valid full name' :
        '';
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  onCancel() {
    this.dialogRef.close()
  }

  refresh() {
    this.router.navigateByUrl('/AddressBookComponent', {skipLocationChange: true}).then(() => {
      this.router.navigate([decodeURI(this.location.path())]).then();
    });
  }
}
