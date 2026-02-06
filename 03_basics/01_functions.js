// functions


function sayMyName(){
    console.log("shiva Jinkalker")
}
sayMyName() //shiva Jinkalker


function addNumber(num1,num2){
    console.log(num1+num2)
}

addNumber() //NaN
addNumber(3,4) // 7
addNumber(3,"a") // 3a
addNumber(3,"4") //34

const result =addNumber(3,5)
console.log("Result: ",result); 

//**********output **************
// 8
// Result:  undefined

function addTwoNumber(num1,num2){
    console.log("shiva Jinkalker")
    // let result = num1+num2
    // return result
    return num1+num2
}
const res =addTwoNumber(3,5)
console.log("Result: ",res); 
//**********output: **************
// shiva Jinkalker
// Result: 8

function loginUserMessage(username){
    if(username ===undefined){
        console.log(`Please enter a username`)
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(`hitesh`)) //hitesh just logged in
console.log(loginUserMessage()) // Please enter a username Node: username is undefined



//*******************************************************************************************//
//function using rest parameter -> ...num1
function cal(...num1){
    return num1;
}
console.log(cal(100,200,300,400,500)) // [ 100, 200, 300, 400, 500 ]


function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(100,200,300,400,500)) // [ 300, 400, 500 ]



//************************************************************************************************/
// function using objects
const user={
    username:`Shiva Jinkalker`,
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user) //Username is Shiva Jinkalker and price is 199
handleObject({
    username :`shirisha Jinaklker`,
    price: 499
}) //Username is shirisha Jinaklker and price is 499


//*********************** function using objects *********************************************************//
const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([500,600,700])); //600
