import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';
import { BasicauthenticationService } from '../service/basicauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username='in28minutes'
password='dummy'
invalidmessage='username or password is wrong'
invalidLogin=false
  constructor(private router:Router,
    private hardcodedauthenticationService:HardcodedauthenticationService,
    private basicauthenticationService:BasicauthenticationService ) { }

  ngOnInit(): void {
  }

  handleLogin(){
 // console.log(this.username)
 if(this.hardcodedauthenticationService.authenticat(this.username,this.password)){
   this.router.navigate(['welcome',this.username])
   this.invalidLogin=false
 }else{
   this.invalidLogin=true
 }
}

handleBasicAuthLogin(){
  // console.log(this.username)
  this.basicauthenticationService.executeAuthenticationService(this.username,this.password).subscribe(
    data=>{
      console.log(data);
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    },
    error=>{
      console.log(error);
      this.invalidLogin=true}
    )
   
 
 }

}
