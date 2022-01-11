import { Person } from './person.js';

export class Teacher extends Person
{
  constructor(name, degree)
  {
    super(name);
    this.degree = degree;
  }
  teach()
  {
    console.log("Teacher Teach");
    const classPerson = new Person('sarathkumar');  //declaring constroctor

    classPerson.walk(); //this will show the  output walk
    classPerson.talk();
    let classPer = classPerson.walk; //shows the whole walk function
    console.log(classPer);
  }
}