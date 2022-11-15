function printAsyncName(callback,str){
    setTimeout(callback,1000)
    
    setTimeout(()=>console.log(str),2000)
    
}

const saluta=(()=>console.log("hello"))


printAsyncName(saluta,"matteo");