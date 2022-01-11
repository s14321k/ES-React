//Type 1
//To start the server, right click on index.html and select start live server.

//Type 2
//cd ./projectname/
//npm start

//Classes --> person.js and teacher.js
//import {Teacher} from './teacher.js';


// Topics covered
// 1-Object
// 2-Dot notation
// 3-Bracket notation
// 4-without binding
// 5-with binding
// 6-Predicate function
// 7-Arrow
// 8-Array.map & Template Literals
// 9-Object Destructing and nested Object Destructing
// 10-Spread Operator (...three dots) to add old array in new array.
// 11-Rest Operator (...three dots) add three dots befor function arguments. so that multiple arguments can be passed.
// 12-Array destructuring []
// 13-Object destructuring {}

import {Teacher} from './teacher.js';
const teacher1 = new Teacher("sarath", "BCA");
teacher1.teach();


console.log(document);
document.getElementById('divId').innerHTML="Writen in js";

//object
let person = {
                  name : 'sarath',
                  walk : function()
                          {
                            console.log(this); //this
                          },
                  talk() {console.log("talk");},
                  balk : () => {console.log("balk");}
               };

//Dot Notation
person.name='sarath kumar';

//Bracket Notation
person['name']='sarathkumar';

person.walk(); //here the out put will be the person object.
person.talk(); //here the out put will be "talk"
person.balk(); //here the out put will be "balk"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//Without binding
const walk1 = person.walk;  //functions are object in JS
walk1();  //global method without instance of object.
console.log(walk1);
document.getElementById('person1').innerHTML = "Person without binding " + walk1;

//binding
const walk2 = person.walk.bind(person);
walk2();
console.log(walk2);
document.getElementById('person2').innerHTML = "Person with binding " + walk2;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


//Predicate function
const square1 = function(number)
                {
                  return number * number;
                };
document.getElementById('squr1').innerHTML = "Square Gettin through predicate functions " + square1(2);

//using arrow
const square2 = number => number * number;
console.log("square2:::" + square2(2));
const square3 = number => { var addNum = number * number; addNum = number + addNum; return addNum; }
console.log("square3:::" + square3(3));
document.getElementById('squr2').innerHTML = "Square Gettin through Arrow functions " + square2(3);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const jobs = [
                { id : 1, isActive : true },
                { id : 2, isActive : true },
                { id : 3, isActive : false}
             ];

//using Predicate function 
const activeJobs1 = jobs.filter(function(job) { return job.isActive; });
                                                                                  //JSON.stringify makes the object to print in out put
document.getElementById('actJobs1').innerHTML = "Active job, predicate function " + JSON.stringify(activeJobs1);

//using Arrow function
const activeJobs2 = jobs.filter(job => job.isActive);
document.getElementById('actJobs2').innerHTML = "Active job, arrow function " + JSON.stringify(activeJobs2);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//Array.map
const colors = ['red', 'blue', 'white'];
const funcItems = colors.map(function(color)
                          {
                            return '<li>' + color + '</li>';
                          });

const ArowItems = colors.map(color => `<li>${color}</li>`);  //Template Literals(back slash which is at 1 in keyboard)
console.log(ArowItems+'/n'+funcItems);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//Object Destructing and nested Object Destructing
const address = {
                  street : 'Dabai',
                  city  : 'Dubai',
                  country : 'Kabai'
                };

//Object destructuring {}
let {street, city, country} = address;
console.log(street);
console.log(city);
console.log(country);

//assigning variables
let {street:st , city:ct, country:cn, place:pc='Tvk'} = address;  //here the place is assigned byu own. If place is available, then it gets replaced
console.log(st);
console.log(ct);
console.log(cn);

function objDesCall({street, city})
{
  console.log(`The name is ${street} and the city is ${city}`);
}

objDesCall(address)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//Array destructuring []

const arrNumbs = [1,2,3];
[num1, , num3] = arrNumbs;
console.log(num1, num3);  //prints 1 and 3
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//Spread Operator can be used in both array and object

const firstArr = [1,2,3];  console.log("Typeof "+typeof(firstArr));
const secndArr =  [4,5,6];

const arrConcatOP = (arry1, arry2) => 
                                    {
                                        const combined1 = arry1.concat(arry2); //Using concadination
                                        const combined2 = [...arry1, 'a' , ...arry2]; //Using spread operator
                                    };
arrConcatOP(firstArr,secndArr);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//Rest Operator can be used in both array and object

const filter = (...args) =>
                          {
                              return args.filter(elemnt => element === 1)
                          }
console.log(filter(1,2,3,4));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//