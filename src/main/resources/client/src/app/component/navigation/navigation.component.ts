import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {AboutComponent} from "../about/about.component";
import {AuthService} from "../../service/auth.service";
import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @Input() visible: boolean = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  username: string;
  constructor(private breakpointObserver: BreakpointObserver,
              public dialog:MatDialog,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.username = this.authService.currentUserValue.email;
  }

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
    if (currentUser){
      return true;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then();
  }

  toggleOverlay(event: any): void {
    this.visible = !this.visible;
    this.toggle.emit(this.visible);
  }

  isAdmin() {
    return this.authService.currentUserValue.role === "ADMIN";
  }
}
