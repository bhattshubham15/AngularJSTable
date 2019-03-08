import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor() {
  }
  tabledata = [
    {id:  '1',  'Fname'  : 'Alen','Lname'   : 'jane',   'email'  : 'abc@123', 'phoneno' : '23454553',   'desig':'gr', 'dob': '12/01/97'},
    {id:  '2',  'Fname'  : 'Mike', 'Lname'  : 'ane',    'email'  : 'def@123', 'phoneno' : '97498348 ',  'desig':'dr','dob': '13/02/96'},
    {id:  '3',  'Fname'  : 'Ruth', 'Lname'  : 'mekats', 'email'  : 'ghi@123', 'phoneno' : '54566734',   'desig':'dr','dob': '02/01/98'},
    {id:  '4',  'Fname'  : 'Kane', 'Lname'  : 'phyl',   'email'  : 'jkl@123', 'phoneno' : ' 926345478', 'desig':'dr','dob': '11/06/99'},
    {id:  '5',  'Fname'  : 'Katty','Lname'  : 'mehufgg','email'  : 'mbo@123', 'phoneno' : '9474646434', 'desig':'dr', 'dob': '12/07/89'},
    {id:  '6',  'Fname'  : 'John', 'Lname'  : 'ninson', 'email'  : 'lki@123', 'phoneno' : '764564234 ', 'desig':'er','dob': '24/12/97'},
    {id:  '7',  'Fname'  : 'Peter','Lname'  : 'yujuki', 'email'  : 'hfg@123', 'phoneno' : '764545637',  'desig':'er', 'dob': '24/12/97'},
    {id:  '8',  'Fname'  : 'Andrew','Lname' : 'podenri', 'email'  : 'ijgf@123', 'phoneno' : '746455',     'desig':'er', 'dob': '24/12/97'},
    {id:  '9',  'Fname'  : 'Methel','Lname' : 'phelon', 'email'  : 'jibcf@123', 'phoneno' : '93736534', 'desig':'er', 'dob': '24/12/97'}

        ];

setData(input) {
input = this.tabledata;
}
getData() {
return this.tabledata;
}
getCol()  {
  return Object.keys(this.tabledata[0]);
}
}
