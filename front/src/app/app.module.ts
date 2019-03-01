import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { PostsService } from './api.service';
import { FormsModule } from '@angular/forms';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SettingComponent } from './setting/setting.component';



@NgModule({
  declarations: [
    AppComponent,

    SignupComponent,
    HomeComponent,
    SigninComponent,
    UseraccountComponent,
    DeleteaccountComponent,
    ChangepasswordComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
     HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
