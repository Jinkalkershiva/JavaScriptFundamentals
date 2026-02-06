//** scope of ( let, const, var )*******/

//problem 1: block scope
if(true){
    let a=10
    const b=20
    var c=30   
}
// console.log(a);// ReferenceError: a is not defined
// console.log(b);// ReferenceError: b is not defined
console.log(c); // 30 

//problem 2: global scope
let x=100
let y=200
var z=300

if(true){
    let x=10
    const y=20
    var z=30  
}
console.log(x); //100 
console.log(y); //200
console.log(z); //30 Note: z should be 300 but z = 30, var does't follows global scope

//problem 3: Nested scope

//ex 1
function one(){
    const username ="shiva Jinkalker"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website); //note: website scope is only acesseble in  block of two()
    two() 
}
// one() //ReferenceError: website is not defined
one()   //shiva Jinkalker

//ex 2
if(true){
    const username ="shiva Jinkalker"
    if(username === "shiva Jinkalker"){
        const website =" youtube"
        console.log(username+website); //shiva Jinkalker youtube
    }
    // console.log(website); //scope up to inner if block
}
// console.log(username); 
//ReferenceError: username is not defined Note: 
//Note: scope of username up to outter if block


// ++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++//

//it accesse before declaration and after declaration 
console.log(addone(5)); //6
function addone(num){
    return num+1
}
console.log(addone(5)); //6


//it can only accesse after declaration when fun return and stored in variable 

// console.log(addTwo(5)); 
//ReferenceError: Cannot access 'addTwo' before initialization
const addTwo =function(num){
    return num +2
}
console.log(addTwo(5)); // 7
