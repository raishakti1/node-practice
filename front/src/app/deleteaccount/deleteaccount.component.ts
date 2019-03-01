import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../api.service';
import {HttpResponse,HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {

  password:String;

  params:any=
  {
    password:String
  };

  constructor(public postservice:PostsService , private router : Router) { }

  ngOnInit() {


  }

  myFunction()
  {
    this.params.password=this.password;

    this.postservice.passwordcheck(this.params).subscribe((response:HttpResponse<any>) => {
      if(response.status==200)
      {
        this.postservice.deleteaccount().subscribe((response:HttpResponse<any>) => {
          if(response.status==200)
          {
            this.router.navigate(['/signin']);
          }

        });
      }
      else
      {
        alert("your password is wrong");
      }

    });
  }

}
