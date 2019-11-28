import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  update(user: User) {
    return this.http.put<User>("/user/update", user);
  }

  delete(id) {
    const url: string = "/user/delete/" + id;
    return this.http.delete(url);
  }
}
