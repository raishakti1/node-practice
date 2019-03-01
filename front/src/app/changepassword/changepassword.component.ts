import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../api.service';
import {HttpResponse,HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  opassword:String;
  npassword:String;

  paramsnew:any=
  {

    password:String
  };

  paramsold:any=
  {

    password:String
  };

  constructor(public postservice:PostsService , private router : Router) {  }

  ngOnInit() {
  }
myFunction()
{
  this.paramsnew.password=this.npassword;
  this.paramsold.password=this.opassword;

  this.postservice.passwordcheck(this.paramsold).subscribe((response:HttpResponse<any>) => {
    if(response.status==200)
    {
      this.postservice.changepassword(this.paramsnew).subscribe((response:HttpResponse<any>) => {
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
