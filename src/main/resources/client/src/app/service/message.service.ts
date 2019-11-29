import { Injectable } from '@angular/core';
import {Message} from "../model/message.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  create(message: Message): Observable<Message> {
    return this.http.put<Message>("/message/create", message);
  }

  delete(id: number) {
    return this.http.delete("/message/" + id);
  }
}
