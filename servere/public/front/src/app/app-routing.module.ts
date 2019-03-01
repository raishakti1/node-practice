import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { UseraccountComponent } from './useraccount/useraccount.component';

const routes: Routes = [
  {path:"signin", component: SigninComponent},
  {path:"signup", component: SignupComponent},
  {path:"", component:HomeComponent},
  {path:"account", component:UseraccountComponent}

];
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
