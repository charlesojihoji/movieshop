import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: '**', component: LoginComponent }
];

@NgModule( {
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( routes )
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
