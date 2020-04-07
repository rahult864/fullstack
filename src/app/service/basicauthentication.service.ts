import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BasicauthenticationService {

  constructor(private http:HttpClient) { }

  // authenticat(username: string, password: string) {
  //   if (username === 'in28minutes' && password === 'dummy') {
  //     sessionStorage.setItem('authenticateUser',username)
  //     return true
  //   } else { return false }
  // }

  getAuthenticatedUser(){
   return  sessionStorage.getItem('authenticateUser')
    }
    getAuthenticatedToken(){
      if(this.getAuthenticatedUser())
      return  sessionStorage.getItem('authenticateUser')
       }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticateUser')
   
      return  !(user===null)
    }

    logOut(){
      sessionStorage.removeItem('authenticateUser')
      sessionStorage.removeItem('token')
    }

    executeAuthenticationService(username: string, password: string){
     
      let basicAuthHeaderString='Basic '+window.btoa(username+':'+password)  ;
     
      let headers=new HttpHeaders({
    Authorization :basicAuthHeaderString
      })
      return this.http.get<AuthenticationBean>(`http://localhost:8989/basicauth`,{headers}).pipe(
        map(
          data=>{
            sessionStorage.setItem('authenticateUser',username)
            sessionStorage.setItem('token',basicAuthHeaderString)
            return data;
          }
        )
      );
    }
  
  }

  export class AuthenticationBean{
    constructor(public message:String){}
  }