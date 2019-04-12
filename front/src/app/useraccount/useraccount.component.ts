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

  firstname:String;

  constructor(public postservice:PostsService , private router : Router) { }

  ngOnInit() {
    this.postservice.account().subscribe((response:HttpResponse<any>) => {
this.firstname=response.body.firstname;

});
}

myFunction(){
  localStorage.removeItem('token');
  this.router.navigate(['/signin']);
}
}
