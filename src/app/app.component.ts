import { Component, OnInit } from '@angular/core';
import {  NewserviceService } from './newservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private newservice: NewserviceService){}
  title = 'Dynamic Table In Angular';

  mydata = this.newservice.getData();
  heading = this.newservice.getCol();

  ngOnInit() {
    console.log(this.title);
    console.log(this.heading);
    console.log(this.mydata);

  }
  myFunction() {
    console.log('inside myFunction');
  }
}
