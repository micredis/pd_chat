import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from '@angular/common/http';

export interface Info {
  build: {
    name: string;
    version: string;
    time: string;
  }
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  url = '/actuator/info';
  name: string;
  version: string;
  buildDate: string;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AboutComponent>) {
  }

  ngOnInit() {
    this.getInfo().subscribe(res => {
      console.log(res);
      this.name = res.build.name;
      this.version = res.build.version;
      this.buildDate = res.build.time;
    });
  }

  getInfo() {
    return this.http.get<Info>(this.url);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
