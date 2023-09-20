import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Welcome to Angular Quest 03.1';
  isAdmin: boolean = false;

  toggle():void {
    this.isAdmin = !this.isAdmin;
  }
}
