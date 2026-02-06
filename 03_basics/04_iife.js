//Immediately Invoked Functions Expressions (IIFE)

//in many times there will be global scope pollution problem to Avoid it we remove global variables or global declaration and use (iife)
// ()()   Note: here first parenthesis () is function declaration and second () for execution

//noraml
function chai(){
    console.log(`DB CONNECTION`);
};
chai(); // DB CONNECTION

//Immediately Invoked
(function chai(){
    console.log(`DB CONNECTION`); // DB CONNECTION
})();

//Arrow (iife)
(()=>{
     console.log(`DB CONNECTION`); // DB CONNECTION
})();

//parameter end and Argument take
((name)=>{
    console.log(`DB IS CONNECTED TO ${name}`); // DB IS CONNECTED TO shiva
})(`shiva`);

