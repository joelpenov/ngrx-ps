import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../user/auth.service';
import { State } from '../user/state/user-state.model';
import { usernameSelector } from '../user/state/user.reducer';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Acme Product Management';
  userName:string;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  constructor(private router: Router, private authService: AuthService, private store:Store<State>) { }

  ngOnInit() {
    this.store.select(usernameSelector).subscribe(username =>{
      this.userName = username;
    })
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}
