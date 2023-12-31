import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {

  constructor ( private _authService: AuthService, private router: Router ) { }

  ngOnInit (): void {
  }

  logout (): void {
    this._authService.logout();
  }

}
