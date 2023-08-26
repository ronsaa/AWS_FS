import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorAuthService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let token = this.authenticationService.getAuthenticatedToken();
    let username = this.authenticationService.getAuthenticatedUser()

    if(token && username) {
      request = request.clone({
        setHeaders : {
            // Authorization : basicAuthHeaderString
            'x-api-key' : 'LHuVL5gFYKasHJ6YH8SFJ8Ge6uoVKRBIkI375Dwd'
          }
        })
    }
    return next.handle(request);
  }
}
