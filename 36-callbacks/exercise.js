function repeatHello(callback){
    const int = setInterval(callback, 1000)
    setTimeout(() => clearInterval(int),5000)
    }
    const saluta = (() => console.log("hello"));
    
    repeatHello(saluta);
