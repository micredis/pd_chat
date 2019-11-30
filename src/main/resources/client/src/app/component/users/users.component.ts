import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../../model/user.model";
import {NewUserDialogComponent} from "../new-user-dialog/new-user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SelectionModel} from "@angular/cdk/collections";
import {UserEditDialogComponent} from "../user-edit-dialog/user-edit-dialog.component";
import {NavigationEnd, Router} from "@angular/router";
import {UserService} from "../../service/user.service";

export interface PeriodicElement {
  position: number;
  id: number;
  fullName: string;
  email: string;
  login: string;
  role: string;
  active: boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'fullName', 'email', 'login', 'role', 'isActive'];
  private data: PeriodicElement[];
  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  private pageSize: number = 10;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private http: HttpClient,
              private dialog: MatDialog,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().pipe(map((res: User[]) => {
      const periodicElements: PeriodicElement[] = [];
      res.forEach((value, index) => {
        periodicElements.push({
          position: index,
          id: value.id,
          fullName: value.fullName,
          email: value.email,
          login: value.login,
          role: value.role,
          active: value.active
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

  createUser() {
    this.dialog.open(NewUserDialogComponent, {disableClose: false});
  }

  selected(row?: PeriodicElement) {
    const user: User = {
      id: row.id,
      fullName: row.fullName,
      email: row.email,
      login: row.login,
      role: row.role,
      active: row.active
    };

    this.dialog.open(UserEditDialogComponent, {disableClose: false, data: {pageValue: user}});
  }
}
