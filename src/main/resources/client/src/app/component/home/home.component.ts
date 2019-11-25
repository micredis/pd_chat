import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";

export interface PeriodicElement {
  position: number;
  author: string;
  date: string;
  title: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, author: 'test@test.com', date: '11/25/2019', title: 'Test message title'},
  {position: 2, author: 'test2@test.com', date: '11/24/2019', title: 'Test message title'},
  {position: 3, author: 'test@test.com', date: '11/25/2019', title: 'Test message title'},
  {position: 4, author: 'test@test.com', date: '11/25/2019', title: 'Test message title'},
  {position: 5, author: 'test@test.com', date: '11/25/2019', title: 'Test message title'},
  {position: 6, author: 'test@test.com', date: '11/25/2019', title: 'Test message title'},
  {position: 7, author: 'test@test.com', date: '11/25/2019', title: 'Test message title'},
  {position: 8, author: 'test@test.com', date: '11/25/2019', title: 'Test message title'},
  {position: 9, author: 'test@test.com', date: '11/25/2019', title: 'Test message title'},
  {position: 10, author: 'test@test.com', date: '11/25/2019', title: 'Test message title'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'author', 'date', 'title'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  private pageSize: number = 10;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private url: string = "/message/list";

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.paginator._changePageSize(this.pageSize);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getMessages();
  }

  getMessages(){
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
