import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  shouldRun: boolean = false;
  toggleMenu()
  {
    this.shouldRun = !this.shouldRun;
  }
}
