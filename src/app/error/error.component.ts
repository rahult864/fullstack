import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage='there is invalid url please contact admin for this issue..'
  constructor() { }

  ngOnInit(): void {
  }

}
