import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../api.service';
import {HttpResponse,HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:String;
  password:String;
  firstname:String;
  secondname:String;
   params:any={
    userername :String,
    password:String,
    firstname:String,
    secondname:String
  }

  constructor(public postservice:PostsService ,private router : Router) { }

  ngOnInit() {
  }

  myFunction()
  {
    this.params.username=this.username;
     this.params.password=this.password;
     this.params.firstname=this.firstname;
      this.params.secondname=this.secondname;

      this.postservice.signup(JSON.stringify(this.params)).subscribe((response:HttpResponse<any>) => {
        if(response.status==200)
        {
           this.router.navigate(['/signin']);


        }

        else {

     alert("invalid");

   }

 })
  }

}
