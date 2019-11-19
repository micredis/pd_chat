import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  url = '/actuator/info';
  version: string;
  buildDate: string;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AboutComponent>) {
  }

  ngOnInit() {
    this.getInfo().then(response => {
      this.version = response.version;
      this.buildDate = response.buildDate;
    })
  }

  getInfo() {
    return this.http.get(this.url)
    .toPromise()
    .then(response => response.toString())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
