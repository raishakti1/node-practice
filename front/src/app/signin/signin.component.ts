import { Component, OnInit,Input } from '@angular/core';
import { PostsService } from '../api.service';
import { map, catchError, tap } from 'rxjs/operators';
import {HttpResponse,HttpRequest} from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {


  posts:any;
  username:String;
  password:String;
   params:any={
    userername :String,
    passwords:String
  };



  constructor(public postservice:PostsService ,private router : Router) {

   }




  ngOnInit() {
  /* this.postservice.signin().subscribe((response:HttpResponse<any>) => {

     console.log('HTTP response', response);
        console.log('HTTP response : Headers', response.headers);
        console.log('HTTP response : status', response.status);
        console.log('HTTP response : url', response.url);
        console.log('HTTP response : body', response.body);


     this.posts= response.body;
   })*/


  }

  myFunction(){


this.params.username=this.username;
 this.params.password=this.password;

     this.postservice.signin(JSON.stringify(this.params)).subscribe((response:HttpResponse<any>) => {



if(response.status==200)
       {
          this.router.navigate(['/account/homepage']);
          localStorage.setItem('token', response.body.token);
          alert(localStorage.getItem('token'));
       }


},(error)=>{
  alert("wrong info");
});

}

}
