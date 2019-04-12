import { Component, OnInit } from '@angular/core';
import { PostsService } from '../api.service';
import { Router } from '@angular/router';
import {HttpResponse,HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

 //products:any[]=[];

 params:any=
  {
     products:[]
  };



 PartyRoles = [
    {
     Id: 1,
     Name: "Mobile",
     Checked: false,
     Price:16000
    },
    {
      Id: 2,
      Name: "Internet",
      Checked: false,
      Price:2000
    },
    {
      Id: 3,
      Name: "TV",
      Checked: false,
      Price:21000
    }
    ,
    {
      Id: 4,
      Name: "Cable",
      Checked: false,
      Price:70
    }
  ]

  constructor(public postservice:PostsService ,private router : Router) { }

  ngOnInit() {
  }

  editPartyRolesSubmit() {
  console.log(this.PartyRoles[0].Checked);
  console.log(this.PartyRoles.length);


var j=0;
var i=0
for (i = 0; i < this.PartyRoles.length; i++) {

  if(this.PartyRoles[i].Checked)
  {
this.params.products[j]= this.PartyRoles[i].Name;
j++;
}
}

this.postservice.productadd(JSON.stringify(this.params)).subscribe((response:HttpResponse<any>) => {
  if(response.status==200)
  {
  //   this.router.navigate(['/account']);
alert("right");
  }

  else{

 alert('wrong information');

}

});
console.log(this.params.products);


}


}
