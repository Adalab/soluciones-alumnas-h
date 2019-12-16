'use strict';

class Person {
    constructor(firstName, lastName){
        this.name = firstName;
        this.surname = lastName;
    }

    get fullName(){
        return this.name + ' ' + this.surname;
    }
}

const mariana = new Person('Mariana', 'Lerma');
const lucia = new Person('Lucía', 'Herrador');

console.log (`${mariana.fullName} y ${lucia.fullName} son pareja de pair programming.`)