
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WecomeDataService, HelloWorldBean } from '../service/data/wecome-data.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name=''
welcomeMessageFromService:String
  constructor(
    private rout:ActivatedRoute,
   private WecomeDataService:WecomeDataService
    ) { }

  ngOnInit(): void {
    //console.log(this.rout.snapshot.params['name'])
   this.name= this.rout.snapshot.params['name']
  }
  getWecomeMessage(){
    //console.log( this.WecomeDataService.executeHelloWorldBeanService())
    this.WecomeDataService.executeHelloWorldBeanService().subscribe(
      response=> this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
      
    );
    console.log('oberservableeeeeeeeeeee')
  }

  getWecomeMessagewithPathvariable(){

    console.log('Rahullllllllllllllllllllll')
    this.WecomeDataService.executeBeanServiceWithPathVariable(this.name).subscribe(
      response=> this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
      
    );
   // console.log('oberservableeeeeeeeeeee')
  }

  
  handleSuccessfulResponse(response: HelloWorldBean){
    this.welcomeMessageFromService=response.message
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService=error.error.message
  }
}
