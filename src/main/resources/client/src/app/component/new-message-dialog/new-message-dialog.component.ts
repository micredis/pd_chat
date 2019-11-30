import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {MessageService} from "../../service/message.service";
import {Message} from "../../model/message.model";
import {AuthService} from "../../service/auth.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-new-message-dialog',
  templateUrl: './new-message-dialog.component.html',
  styleUrls: ['./new-message-dialog.component.css']
})
export class NewMessageDialogComponent {
  private emailTo = new FormControl();
  private title = new FormControl();
  private messageBody = new FormControl();

  constructor(private dialogRef: MatDialogRef<NewMessageDialogComponent>,
              private messageService: MessageService,
              private authService: AuthService,
              private router: Router,
              private location: Location) {
  }

  onSubmit() {
    if (!this.emailTo.value) {
      return;
    }

    if (!this.title.value) {
      return;
    }

    if (!this.messageBody.value) {
      return;
    }

    const message: Message = {
      from: this.authService.currentUserValue.email,
      to: this.emailTo.value,
      title: this.title.value,
      message: this.messageBody.value,
    };

    this.messageService.create(message).pipe(first()).subscribe(value => {
      this.dialogRef.close();
      this.refresh();
    });
  }

  getEmailToErrorMessage() {
    return this.emailTo.hasError('required') ? 'You must enter a value' :
      this.emailTo.hasError('emailTo') ? 'Not a valid email' :
        '';
  }

  getTitleErrorMessage() {
    return this.emailTo.hasError('required') ? 'You must enter a value' :
      this.title.hasError('title') ? 'Not a valid title' :
        '';
  }

  getMessageErrorMessage() {
    return this.messageBody.hasError('required') ? 'You must enter a value' :
      this.messageBody.hasError('message') ? 'Not a valid message' :
        '';
  }

  onCancel() {
    this.dialogRef.close();
  }

  refresh() {
    this.router.navigateByUrl('/HomeComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]).then();
    });
  }
}
