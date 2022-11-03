function printname(){
    let helloname = "Hello John";
    function inner(){
        return helloname
    };
    return inner
}
console.log(printname()())
