let person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
person2.firstName="simon";

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// Così facendo modifica il nome anche all' oggetto person1,
// perchè abbiamo dichiarato che i due oggetti sono uguali.
// Per fare in modo di cambiare solo i valori di person2 dobbiamo assegare a person2
// l'uguaglianza solo del contenuto di person1, come nell'esempio sottostante


// let person2 = Object.assign({},person1)
// person2.firstName = "simon";
// console.log(person2);

