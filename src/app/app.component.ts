import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export class MayankComponent {
  sayHello() {
    message = message + ' World';
    var message = 'Mayank';
    console.log(message);
  }
}
