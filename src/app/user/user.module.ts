import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { FeatureTypes } from '../state/state-features-types';

import { LoginComponent } from './login.component';
import { usersReducer } from './state/user.reducer';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature(FeatureTypes.Users, usersReducer)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
