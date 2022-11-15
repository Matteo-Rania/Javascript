function repeatHello(callback){
setInterval(callback, 1000)
}
const saluta = (() => console.log("hello"));

repeatHello(saluta);