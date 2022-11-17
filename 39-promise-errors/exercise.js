
const isLogged = true;

function firstPromise(isLogged) {
    return new Promise((resolve, reject) => {
        let rand = Math.random();
        if (isLogged == true) {
            resolve(rand)
        }
        else {
            reject(new Error("Login required"))
        }
    })
}

function secondPromise(id) {
    return new Promise((resolve, reject) => {
        if (id > 0.5) {
            resolve({ "name": "john", "age": 24 })
        }
        else {
            reject(new Error("Data Required"));
        }
    })
};
firstPromise(isLogged)
    .then(secondPromise)
    .then((stampa) => console.log(stampa))
    .catch((err) => console.error(err))
    .finally(() => console.log("finish"));

