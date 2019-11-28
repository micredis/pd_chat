import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  delete(id) {
    const url: string = "/user/delete/" + id;
    return this.http.delete(url);
  }
}
