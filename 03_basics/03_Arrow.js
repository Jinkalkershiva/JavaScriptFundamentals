//++++++++++ Arrow Functions +++++++++++++++++++++++//

//this refer to access the variables from current context Note: here curr context is user{...}
const user ={
    username: "shiva",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()  
// shiva, welcome to website
// {
//   username: 'shiva',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
user.username="shirisha"
user.welcomeMessage() //shirisha, welcome to website

console.log(this) // {}  
// Note: node.js has standalon engine and browser has windows engine

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// function chai(){
//     let username =`shiva`
//     console.log(this.username); // this context is usually is used in object not in function
// }
// chai()  //undefined


// const chai = function(){
//     let username =`shiva`
//     console.log(this.username);
// }
// chai() //undefined Note:here also same 


const chai = () =>{
    let username=`shiva`
    console.log(this.username);
}
chai() // undefined Note: here also same

//++++++++++++++++ pure Arrow functions +++++++++++++++++++++++++++++++++++++++++//

//basic strcture : ()=>{}
// const addTwo=(num1,num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,4)) //7


//implecit return 
// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(3,4)) //7


//return objects
const addTwo=(num1,num2)=>({username:`shiva`})

console.log(addTwo(3,4)) //{ username: 'shiva' }
//Note: while return object is the object must be defined in ( )


//in Arrays
const myArray=[2,5,3,7,8]
// myArray.forEach(function () {})
// myArray.forEach(()=>{})

myArray.forEach((value) => {
  console.log(value)
})
// 2
// 5
// 3
// 7
// 8

myArray.forEach((value,index,array)=>{
    array[index]=value*2
})
console.log(myArray) // [ 4, 10, 6, 14, 16 ]

//map() → returns a new array
const res=myArray.map(num=>num*2)
console.log(res) //[ 8, 20, 12, 28, 32 ]

//filter() → returns filtered array
const result=myArray.filter(num => num>5)
console.log(result) // [ 10, 6, 14, 16 ]

