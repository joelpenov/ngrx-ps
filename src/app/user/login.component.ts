import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from './auth.service';
import { State } from './state/user-state.model';
import { UserActions } from './state/user.actions';
import { maskUsernameSelector } from './state/user.reducer';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';

  maskUserName: boolean;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private store:Store<State>) { }

  ngOnInit(): void {
    this.store.select(maskUsernameSelector).subscribe(maskUsername =>{
      this.maskUserName = maskUsername;
    })
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(): void {
    this.store.dispatch(UserActions.MaskUsername())
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);
      this.store.dispatch(UserActions.Login({username: userName}));

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    }
  }
}

