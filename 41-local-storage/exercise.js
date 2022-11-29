const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserData(newUser) {
  localStorage.setItem('user', JSON.stringify(newUser));
}

saveUserData(user);

function getUseraData(){
  let userData = JSON.parse(localStorage.getItem('user'));
  console.log(userData);
}
getUseraData();