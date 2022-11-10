class Person {
  
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Person.fromObject();
  }
  static fromObject(object){
    return object
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);