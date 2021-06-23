import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  loggedIn: boolean = false;
  loginText: string = 'Login';

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.counter++;
  }

  login() {
    this.loggedIn = !this.loggedIn;
    this.loginText = this.loggedIn ? 'Logout' : 'Login';
  }

  setClasses() {
    return {
      green: this.loggedIn,
      red: !this.loggedIn,
    };
  }
}
