import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
} )
export class LoginComponent implements OnInit {

  constructor ( private _authService: AuthService, private router: Router ) { }

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
      let response = this._authService.login( this.username, this.password );

      if ( response == 404 ) {
        this.errorMessage = "Invalid credentials";
      }

      if ( response = 200 ) {
        this.router.navigate( [ 'home' ] );
      }
    }

  }
}
