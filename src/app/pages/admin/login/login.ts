import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {
  muser: string;
  mpass: string;


  constructor() { }

  ngOnInit() {
  }

  clickLogin(user: string, password: string) {
    this.muser = user;
    this.mpass = password;
  }
}
