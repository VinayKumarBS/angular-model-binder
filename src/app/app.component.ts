import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  localVariable = "The value is being fetched from local variable";
  fontColor = "blue";
  product = {
    name: "Product 1"
  };
}
