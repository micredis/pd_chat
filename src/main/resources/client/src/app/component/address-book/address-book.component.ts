import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {AddressBookService} from "../../service/address-book.service";
import {map} from "rxjs/operators";
import {AddressBookModel} from "../../model/address-book.model";
import {NewAddressBookComponent} from "../new-address-book/new-address-book.component";
import {AddressBookEditDialogComponent} from "../address-book-edit-dialog/address-book-edit-dialog.component";

export interface PeriodicElement {
  position: number;
  id: number;
  fullName: string;
  email: string;
  deleted: boolean;
}

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
  displayedColumns: string[] = ['position', 'fullName', 'email'];
  private data: PeriodicElement[];
  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  private pageSize: number = 10;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private dialog: MatDialog,
              private addressBookService: AddressBookService) {
  }

  ngOnInit() {
    this.addressBookService.getBooks().pipe(map(res => {
      const periodicElements: PeriodicElement[] = [];
      res.forEach((value, index) => {
        periodicElements.push({
          position: index,
          id: value.id,
          fullName: value.fullName,
          email: value.email,
          deleted: value.deleted
        })
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

  createPerson() {
    this.dialog.open(NewAddressBookComponent, {disableClose: false});
  }

  selected(row?: PeriodicElement) {
    const addressBook: AddressBookModel = {
      id: row.id,
      fullName: row.fullName,
      email: row.email,
    };

    this.dialog.open(AddressBookEditDialogComponent, {
      disableClose: false,
      data: {pageValue: addressBook}
    });
  }
}
