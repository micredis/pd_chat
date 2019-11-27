import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";
import {first, map} from "rxjs/operators";
import {User} from "../../model/user.model";
import {NewUserDialogComponent} from "../new-user-dialog/new-user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SelectionModel} from "@angular/cdk/collections";
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
  displayedColumns: string[] = ['select', 'position', 'fullName', 'email', 'login', 'role', 'isActive'];
  private data: PeriodicElement[];
  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  private pageSize: number = 10;
  private selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private url: string = "/user/list";

  constructor(private http: HttpClient,
              private dialog: MatDialog,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers().pipe(map((res: User[]) => {
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

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createUser() {
    this.dialog.open(NewUserDialogComponent, {disableClose: false});
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  delete() {
    const users: User[] = [];
    this.selection.selected.forEach((value) => {
      users.push({
        id: value.id,
        fullName: value.fullName,
        email: value.email,
        login: value.login,
        role: value.role,
        password: "empty"
      });
    });
    this.userService.delete(users).pipe(first()).subscribe();
  }

}
