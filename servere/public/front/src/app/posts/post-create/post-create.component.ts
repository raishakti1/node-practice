import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:['./post-create.component.css']
})

export class PostCreateComponent {


myFunction(){

alert((<HTMLInputElement>document.getElementById("login")).value);
alert((<HTMLInputElement>document.getElementById("pass")).value);

}
}
