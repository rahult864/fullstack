import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicauthenticationService } from './basicauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpbasicAuthinterceptorService implements HttpInterceptor{

  constructor(private basicAuthenticationService:BasicauthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    // let username='user'
    // let password='password'
    // let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
    let basicAuthHeaderString=this.basicAuthenticationService.getAuthenticatedToken()
    let username=this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username){
      req= req.clone({
        setHeaders:{
          Authorization:basicAuthHeaderString
        }
      })
    }
  
    return next.handle(req)
  }
}
