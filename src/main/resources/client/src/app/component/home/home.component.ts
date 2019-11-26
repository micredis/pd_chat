import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {Message} from "../../model/message.model";
import {map} from "rxjs/operators";
import {AuthService} from "../../service/auth.service";

export interface PeriodicElement {
  position: number;
  author: string;
  recipient: string;
  date: string;
  title: string;
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
  private url: string = "/message/list";

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit() {
    this.getMessages().pipe(map((res: Message[]) => {
      const periodicElements: PeriodicElement[] = [];
      res.forEach((value, index) => {
        periodicElements.push({
          position: index,
          author: value.from,
          recipient: this.isAdmin() ? value.to : null,
          date: value.createDate,
          title: value.title
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

  getMessages() {
    if (this.isAdmin()){
      this.url = "/message/all";
    }
    return this.http.get<Message[]>(this.url);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAdmin() {
    return this.authService.currentUserValue.role === "ADMIN";
  }
}
