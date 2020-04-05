import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {

  constructor() { }

  authenticat(username: string, password: string) {
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticateUser',username)
      return true
    } else { return false }
  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticateUser')
   
      return  !(user===null)
    }

    logOut(){
      sessionStorage.removeItem('authenticateUser')
    }
  }
