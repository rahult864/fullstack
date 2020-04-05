import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isuserloggedIn=false;
  constructor(public hardcodedauthenticationService:HardcodedauthenticationService) { }

  ngOnInit(): void {
  // this.isuserloggedIn= this.hardcodedauthenticationService.isUserLoggedIn();
  }

}
