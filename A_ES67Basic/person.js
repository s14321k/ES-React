export class Person
{
  constructor(pname)
  {
    this.pname = pname;
  }

  walk()
  {
    console.log("Person Walk");
  }

  talk = () => 
  {
    console.log("Lambda arrow function");
  }
}