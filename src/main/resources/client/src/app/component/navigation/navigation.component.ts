import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {AboutComponent} from "../about/about.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog:MatDialog) {}

  createUser(){
    console.log("create new user");
  }

  getUsers() {
    console.log("users");
  }

  openChat() {
    console.log("chat");
  }

  about() {
    this.dialog.open(AboutComponent, {disableClose:false});
  }
}
