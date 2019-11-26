import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";
import {map} from "rxjs/operators";
import {User} from "../../model/user.model";

export interface PeriodicElement {
  position: number;
  fullName: string;
  email: string;
  login: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'fullName', 'email', 'login', 'role'];
  private data: PeriodicElement[];
  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  private pageSize: number = 10;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private url: string = "/user/list";

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit() {
    this.getUsers().pipe(map((res: User[]) => {
      const periodicElements: PeriodicElement[] = [];
      res.forEach((value, index) => {
        periodicElements.push({
          position: index,
          fullName: value.fullName,
          email: value.email,
          login: value.login,
          role: value.role,
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

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
