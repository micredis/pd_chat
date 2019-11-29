import {Injectable} from '@angular/core';
import {Message} from "../model/message.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  getMessages() {
    let url: string = "/api/message/list";
    if (this.isAdmin()) {
      url = "/api/message/all";
    }
    return this.http.get<Message[]>(url);
  }

  create(message: Message): Observable<Message> {
    return this.http.put<Message>("/api/message/create", message);
  }

  delete(id: number) {
    return this.http.delete("/api/message/" + id);
  }

  isAdmin() {
    return this.authService.currentUserValue.role === "ADMIN";
  }
}
