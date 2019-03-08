
import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sampleangularproject';
  arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  onedarray = [23, 22, 24, 25, 43, 67, 42];
  // arr2 = [];
  // arr3 = [];
  // arr4 =  [];
  ngOnInit()  {
const len =  this.arr.length;
console.log('Given Array is');
console.log(this.arr);
const maxarray = this.arr.map((element,  index)  =>  {
 return Math.max(...this.arr[index]);
});
console.log('The largest element in array  :');
console.log(Math.max(...maxarray));

const minarray = this.arr.map((element,  index)  =>  {
  return Math.min(...this.arr[index]);
 });
console.log('The smallest element in array  :');
console.log(Math.min(...minarray));

// let s = a.map((element , ind)=>{
//   return Math.max(...a);
// });
// console.log(s);
console.log('Major Diagonal is as follows :');
this.arr.map((element,  index) =>  {
console.log(element[index]);
});
console.log('Minor Diagonal is as follows :');
this.arr.map((element,  index) =>  {
console.log(element[len - 1 - index]);
});
console.log('Upper Triangle');
this.arr.map((element,  index)  =>{
  element.filter((elementof,  indexof)  =>  {
if(indexof  >=  index)  {
  console.log(elementof);
}
  });
});

console.log('max array again');
const newone  = this.arr.map((element1, index1) =>  {
return Math.max(...this.arr[index1]);
});
console.log(...newone);
//console.log(Math.max(...newone));
newone.map((el,  indix)  =>  {
console.log(Math.max(...newone));
});

console.log('Lower Triangle');
this.arr.map((element,  index)  =>  {
  element.filter((elementof,  indexof)  =>  {
if  (indexof  <=  index)  {
  console.log(elementof);
}
  });
});
console.log('middle element');
const vrr = [1, 2, 8, 9, 10, 4, 5];

function middle(i) {
    if (vrr[i] !== undefined) {
       return middle(i + 1);
    } else {
       return vrr[Math.floor(i / 2)];
   }
}
console.log(middle(0));
let mxx = this.onedarray[0];
const on  = this.onedarray.filter((value, count)  =>  {
  if  ( mxx < value )  {
  mxx = value;
  }
  return mxx;
});
console.log(mxx);
let maximumm  = this.arr[0][0];
const maximumele  = this.arr.map((element2, index2) =>  {
element2.filter((element3,  index3) =>  {
if  ( maximumm  < element3) {
  maximumm =  element3;
}
return  maximumm;
});
});
console.log(maximumm);


















}
}


