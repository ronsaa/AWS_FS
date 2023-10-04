import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

   username: string = '';
   password: string = '';
   isAuthenticated: boolean = false;
   errorMessage = 'Invalid Credentials'
    invalidLogin = false

  constructor(private router: Router, private http: HttpClient, private authenticationService: AuthenticationService) {}
  

  async signIn() {
    try {
      const user = await Auth.signIn(this.username, this.password);
      console.log('Sign-in successful', user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }
}






