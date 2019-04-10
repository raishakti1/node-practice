import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../api.service';
import {HttpResponse,HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-mydetail',
  templateUrl: './mydetail.component.html',
  styleUrls: ['./mydetail.component.css']
})
export class MydetailComponent implements OnInit {


  firstname:String;
  secondname:String;
  address:String;
  mothername:String;
  phonenumber:Number;

  constructor(public postservice:PostsService , private router : Router) { }

  ngOnInit() {

    this.postservice.account().subscribe((response:HttpResponse<any>) => {

      console.log('HTTP response', response);
      console.log('HTTP body', response.body);

      this.firstname=response.body.firstname;
      this.secondname=response.body.secondname;
      this.address=response.body.address;
      this.mothername=response.body.mothername;
      this.phonenumber=response.body.phonenumber;

 });
  }





}
