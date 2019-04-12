import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SettingComponent } from './setting/setting.component';
import { ProductComponent } from './product/product.component';
import { MydetailComponent } from './mydetail/mydetail.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:"signin", component: SigninComponent},
  {path:"signup", component: SignupComponent},
  {path:"", component:HomeComponent},
  {path:"account", component:UseraccountComponent ,children: [
     {path: 'setting', component: SettingComponent},{path: 'product', component: ProductComponent}
     ,{path: 'mydetail', component: MydetailComponent},{path:"delete", component:DeleteaccountComponent},
     {path:"changepassword", component:ChangepasswordComponent},{path:"homepage", component:HomepageComponent}
  ]},

  {path:"**", redirectTo: '/', pathMatch: 'full'}



];
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
