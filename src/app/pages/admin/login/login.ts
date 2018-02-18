import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.html'
})
export class LoginPage implements OnInit {
  muser : string;
  mpass : string;


  constructor() { }

  ngOnInit() {
  }

  clickLogin(user: string, password: string)
  {
    this.muser = user;
    this.mpass = password;
  }

}