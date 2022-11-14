const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

let {id,age,...obj} = person;
str = JSON.stringify({id,age});
json = {str,obj};



console.log(json); // Should return: { id: 1, age: 25 }