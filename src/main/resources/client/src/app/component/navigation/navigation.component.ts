import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {AboutComponent} from "../about/about.component";
import {AuthService} from "../../service/auth.service";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

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
  @Input() visible: boolean = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private breakpointObserver: BreakpointObserver,
              public dialog:MatDialog,
              private authService: AuthService) {}

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

  isAuthenticated() {
    const currentUser = this.authService.currentUserValue;
    return !!(currentUser && currentUser.authData);
  }

  logout() {
    this.authService.logout();
  }

  toggleOverlay(): void {
    this.visible = !this.visible;
    this.toggle.emit(this.visible);
  }

}
