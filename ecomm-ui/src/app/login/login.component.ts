import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

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

  public onSubmit(): void {
    // TODO: Add authentication logic here
    if(this.username == 'admin' && this.password== 'admin'){
       this.isAuthenticated = true;
    }

    if (this.isAuthenticated) {
      this.router.navigate(['/home']);
    }
  }

  handleJWTAuthLogin() {
    this.authenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            // this.router.navigate(['/home', this.username])
            this.router.navigate(['/home'])
            this.invalidLogin = false
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

}
