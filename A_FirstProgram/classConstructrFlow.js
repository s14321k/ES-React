class Human
{
    constructor()
    {
        this.type = 'human';
        this.gender = 'trans';
    }

    printGender()
    {
        console.log(this.gender);
    }
}

class Person extends Human
{
    constructor()
    {
        super();
        this.name = 'sarath'
        this.gender = 'male';
    }

    printName()
    {
        console.log(this.name);
    }
}

const person = new Person();
person.printName(); //prints sarath
person.printGender();   //prints male