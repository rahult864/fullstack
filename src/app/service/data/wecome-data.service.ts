import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:String){}
}
@Injectable({
  providedIn: 'root'
})
export class WecomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8989/helloWorldBean');
   // console.log('executeHelloWorldBeanService')
  }


  executeBeanServiceWithPathVariable(name){
  //   let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader()

  // let headers=new HttpHeaders({
  // Authorization :basicAuthHeaderString
  //   })
    console.log("Payload = " + this.http.get<HelloWorldBean>(`http://localhost:8989/helloWorldBean/${name}`,
   // {headers}
    ).subscribe(
      response=>console.log(response)
    ));
    return this.http.get<HelloWorldBean>(`http://localhost:8989/helloWorldBean/${name}`,
    //{headers}
    );
   // console.log('executeHelloWorldBeanService')http://localhost:8989/helloWorldBean/samikr
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username='user'
  //   let password='password'
  //   let basicAuthHeaderString='Basic '+window.btoa(username+':'+password)  ;
  //   return basicAuthHeaderString;
  // }
}
