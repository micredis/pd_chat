import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // url = '/actuator/info';
  url = 'http://www.localhost:8080/actuator/info';
  version: string;
  buildDate: string;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AboutComponent>) {
  }

  /*ngOnInit() {
    this.getInfo().then(response => {
      this.version = response.version;
      this.buildDate = response.buildDate;
    })
  }*/

  ngOnInit(): void {
    this.getInfo();
  }

  /*getInfo() {
    return this.http.get(this.url)
    .toPromise()
    .then(response => response.toString())
    .catch(this.handleError);
  }*/

  getInfo(){
    console.log("start getInfo");
    return this.http.get(this.url).toPromise().then(build => {
      console.log(build.toString());
    });

    return this.http.get(this.url).pipe(map(build => {
      console.log(build);
    }));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
