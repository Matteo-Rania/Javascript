function printname(){
    let helloname = "Hello John";
    function inner(){
        setTimeout(()=>{
            console.log(helloname);
        },1000)}
        return inner;
        
       
}
printname()();
