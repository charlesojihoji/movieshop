import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
} )
export class LoginComponent implements OnInit {

  constructor () { }

  username: string = ""
  password: string = ""
  errorMessage: string = ""

  ngOnInit (): void {
  }

  login (): void {

    if ( this.username.trim().length == 0 ) {
      this.errorMessage = "Username is empty";
    }
    else if ( this.password.trim().length == 0 ) {
      this.errorMessage = "Password is empty";
    }
    else {
      this.errorMessage = "Validate";
    }

  }
}
