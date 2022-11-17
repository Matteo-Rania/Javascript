const isLogged = true;

function firstPromise(isLogged) {
    return new Promise((resolve, reject) => {
        let rand = Math.random();
        if (isLogged == true) {
            resolve(rand)
        }
        else {
            reject("errore")
        }
    })
}

function secondPromise(rand) {
    return new Promise((resolve, reject) => {
        if (rand > 0.5) {
            resolve({ "name": "john", "age": 24 })
        }
        else {
            reject("errore")
        }
    })
};
firstPromise(isLogged)
    .then(secondPromise)
    .then((stampa) => console.log(stampa))
    .catch((err) => console.error(err))

