const number = 15;

let p = new Promise((resolve, reject) => {

    if (number > 10) {
        resolve("success")
    }
    else {
        reject("error")
    }
});
p.then((stampa) => {
    console.log(stampa)
}).catch((stampa) => {
    console.log(stampa)
})
