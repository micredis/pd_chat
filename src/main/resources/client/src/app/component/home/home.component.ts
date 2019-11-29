import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {Message} from "../../model/message.model";
import {map} from "rxjs/operators";
import {AuthService} from "../../service/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {NewMessageDialogComponent} from "../new-message-dialog/new-message-dialog.component";
import {MessageEditDialogComponent} from "../message-edit-dialog/message-edit-dialog.component";
import {MessageService} from "../../service/message.service";

export interface PeriodicElement {
  position: number;
  id: number;
  author: string;
  recipient: string;
  date: string;
  title: string;
  message: string;
  deleted: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = this.isAdmin() ? ['position', 'author', 'recipient', 'date', 'title'] : ['position', 'author', 'date', 'title'];
  private data: PeriodicElement[];
  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  private pageSize: number = 10;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private dialog: MatDialog,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.getMessages().pipe(map((res: Message[]) => {
      const periodicElements: PeriodicElement[] = [];
      res.forEach((value, index) => {
        periodicElements.push({
          position: index,
          id: value.id,
          author: value.from,
          recipient: this.isAdmin() ? value.to : null,
          date: value.createDate,
          title: value.title,
          message: value.message,
          deleted: value.deleted
        });
      });
      return periodicElements;
    })).subscribe(value => {
      this.paginator._changePageSize(this.pageSize);
      this.dataSource = new MatTableDataSource<PeriodicElement>(value);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAdmin() {
    return this.authService.currentUserValue.role === "ADMIN";
  }

  createMessage() {
    this.dialog.open(NewMessageDialogComponent, {disableClose: false});
  }

  selected(row?: PeriodicElement) {
    const message: Message = {
      id: row.id,
      from: row.author,
      to: row.recipient,
      createDate: row.date,
      title: row.title,
      message: row.message,
      deleted: row.deleted
    };

    this.dialog.open(MessageEditDialogComponent, {disableClose: false, data: {pageValue: message}});
  }
}
