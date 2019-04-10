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
     Name: "Voip",
     Checked: false
    },
    {
      Id: 2,
      Name: "Internet",
      Checked: false
    },
    {
      Id: 3,
      Name: "SAT TV",
      Checked: false
    }
    ,
    {
      Id: 4,
      Name: "Cable",
      Checked: false
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
