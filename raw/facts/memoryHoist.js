//function statement
function sayHello(){

}

//function statement
let fnVar=function(){
    console.log("I am fn expression")

};

//IIFEE--> Immediately Invoked fn Expression
(function anotherFn(){
    console.log("I will be called immediately after I was created");
})()
//IIFEE
(function anotherFn(){
    console.log("I was called immediately after I was created");
})()

//arrow function
let arrowFn=() =>{
    console.log("I am an arrow");
}

sayHello();
fnVar();
arrowFn();


