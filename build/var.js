"use strict";
const logger = console.log;
class Student {
    static getStudent() {
        console.error(Error);
    }
    static updateAge() {
        console.error(Error);
    }
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getStudent() {
        return `<em>Student name</em>: ${this.firstname}\t${this.lastname}\n<em>Student age</em>: ${this.age}`;
    }
    updateAge() {
        this.age++;
    }
}
let student1 = new Student('John', 'Doe', 21);
student1.updateAge();
const content = document.getElementById('content');
content.innerHTML = student1.getStudent();
