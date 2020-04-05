import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpbasicAuthinterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let username='user'
    let password='password'
    let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
   req= req.clone({
      setHeaders:{
        Authorization:basicAuthHeaderString
      }
    })
    return next.handle(req)
  }
}
