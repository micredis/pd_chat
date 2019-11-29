import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {Message} from "../../model/message.model";
import {MessageService} from "../../service/message.service";
import {FormControl} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-message-edit-dialog',
  templateUrl: './message-edit-dialog.component.html',
  styleUrls: ['./message-edit-dialog.component.css']
})
export class MessageEditDialogComponent {
  private message: Message;
  emailTo = new FormControl();
  title = new FormControl();

  constructor(private dialogRef: MatDialogRef<MessageEditDialogComponent>,
              private messageService: MessageService,
              private router: Router,
              private location: Location,
              @Optional() @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.message = data.pageValue;
  }

  onSubmit() {

  }

  delete() {
    this.messageService.delete(this.message.id).pipe(first()).subscribe(value => {
      this.dialogRef.close();
      this.refreshUsers();
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  refreshUsers() {
    this.router.navigateByUrl('/UsersComponent', {skipLocationChange: true}).then(() => {
      this.router.navigate([decodeURI(this.location.path())]).then();
    });
  }
}
