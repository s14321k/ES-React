class Human
{
    gender = 'trans';

    printGender = () => console.log(this.gender);
}

class Person extends Human
{
    name = 'sarath';
    gender = 'male';

    printName = () => console.log(this.name);
}

const person = new Person();
person.gender();    //prints male
person.name();  //prints sarath