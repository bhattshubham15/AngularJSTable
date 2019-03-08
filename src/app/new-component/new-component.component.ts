import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

abc = 'hiiiii';
  constructor() { }

  ngOnInit() {
    this.fun1();
    console.log(this.abc);
  }
  fun1(){
console.log(this.abc);
  }

}
