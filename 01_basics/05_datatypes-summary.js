//*******************************  Primitive DataTypes  *******************************
//7 types: String, Number, Boolean, null, undefined, Symbol,BigInt

const score =100          //Number DataType
const scoreString ="100"  //String  
const scoreValue = 100.3  //Number 
const isLoggedIn=false    //Boolean
const ousideTemp = null   //null
let userEmail;            //undefined

const id= Symbol('123')         //Symbol --> Symbol creates a unique value.
const anotherId =Symbol('123')  //Symbol --> Even if the description is the same, symbols are never equal.

console.log(typeof id)           //Symbol
console.log(id===anotherId);     //false

const bigNumber = 1234567890123456789012345678901234567890n  //BigInt
console.log(typeof bigNumber);   //BigInt


//***************** Reference DataTypes (Non-Primitive)  ******************************
//Array, Object, Functions

const Avengers =["Thor", "IronMan", "Hulk", "Captain America"]  //Array

let muObj ={
    name: "Shiva",
    age: 22,  
}  //Object

const myFunction = function(){
    console,log("hellow World ");
}

console.log(typeof muFunction);  //function


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive) 

let myName= "Jinkalker Shiva"  //Stored in Stack
let anotherName = myName       //anotherName gets a copy of myName
anotherName = "Shiva Nandh"     //Modifying anotherName does not affect myName

console.log(myName);        //Jinkalker Shiva
console.log(anotherName);   //Shiva Nandh

let userOne ={
    email: "jinkalkers@Gmail.com",
    upi: "user@ybl"
}

userTwo =userOne        //userTwo gets the reference of userOne (both point to the same object in Heap)
userTwo.email= "shiva@google.com"

console.log(userOne.email);
console.log(userTwo.email);