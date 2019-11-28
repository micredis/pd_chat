import {Injectable} from "@angular/core";
import {User} from "../model/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService {

  private loginUrl: string = "/login";
  public registrationUrl: string = "/registration";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private updateUserUrl: string = "/user/update";

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders().set('Authorization', `Basic ${window.btoa(email + ':' +
      password)}`);
    return this.http.post<any>(this.loginUrl, null, {headers})
    .pipe(map(user => {
      user.authdata = window.btoa(email + ':' + password);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  registration(user) {
    return this.http.put<User>(this.registrationUrl, user);
  }

  update(user: User) {
    return this.http.put<User>(this.updateUserUrl, user);
  }
}
