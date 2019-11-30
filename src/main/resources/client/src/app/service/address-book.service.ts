import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddressBookModel} from "../model/address-book.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<AddressBookModel[]> {
    return this.http.get<AddressBookModel[]>("/api/address-book/list");
  }

  create(addressBook: AddressBookModel): Observable<AddressBookModel> {
    return this.http.put<AddressBookModel>("/api/address-book", addressBook);
  }

  delete(id: number){
    return this.http.delete("/api/address-book/" + id);
  }
}
