import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../api.service';
import {HttpResponse,HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit {

  username:String;
  firstname:String;
  secondname:String;

  constructor(public postservice:PostsService , private router : Router) { }

  ngOnInit() {

     this.postservice.account().subscribe((response:HttpResponse<any>) => {

       console.log('HTTP response', response);
       console.log('HTTP body', response.body);
       this.username=response.body.username;
       this.firstname=response.body.firstname;
       this.secondname=response.body.secondname;

  });

}

myFunction(){
  localStorage.removeItem('token');
  this.router.navigate(['/signin']);
}
}
