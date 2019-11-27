import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = '/user/delete';

  constructor(private http: HttpClient) {
  }

  delete(users) {
    return this.http.put(this.url, users);
  }
}
