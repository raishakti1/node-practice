import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  myFunction()
  {
    alert("Hey You can contact us on below detail"+"\n"+"Email:srshaktirai@gmail.com"+ "\n" +"Phone number:9582735898");
  }
}
