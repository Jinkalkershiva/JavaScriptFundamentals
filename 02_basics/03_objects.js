// singleton object 

//object literals use curly braces {}

const JsUser ={
    name: "Shiva",
    "full name": "Shiva jinkalker",
    age: 24,
    location: "Vadodara",
    email:"jinkalkers@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
console.log(JsUser.email);          //jinkalkersAgmail.com
console.log(JsUser["email"]);       //jinkalkersAgmail.com
console.log(JsUser["full name"]);    //Shiva jinkalker (Note: for keys with spaces use bracket notation not dot notation)

JsUser.email= "shiva@Google.com";   //updating value
//Object.freeze(JsUser);              //freezing object to avoid further changes
//JsUser.email = "shiva@ChatGpt.com"; //will not update as object is freezed
console.log(JsUser);   
// {
//   name: 'Shiva',
//   'full name': 'Shiva jinkalker',
//   age: 24,
//   location: 'Vadodara',
//   email: 'shiva@Google.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Friday' ]
// }

JsUser.greeting =function(){
    console.log("Hello JsUser");
}
console.log(JsUser.greeting);   //[Function (anonymous)]  Note: function is not called here
console.log(JsUser.greeting()); // Hello JsUser           Note: function is called here

JsUser.greetingTwo =function(){
    console.log("Hello Js User, ${this.name} ");
}
console.log(JsUser.greetingTwo()); //Hello Js User, Shiva 
console.log(JsUser);
// {
//   name: 'Shiva',
//   'full name': 'Shiva jinkalker',
//   age: 24,
//   location: 'Vadodara',
//   email: 'shiva@Google.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Friday' ],
//   greeting: [Function (anonymous)],
//   greetingTwo: [Function (anonymous)]
// }


//*********************** (Symbols in Object)  *****************************************//

const mySym = Symbol("key1");
const JsUser2 ={
    name:     "Shiva",
    age:        20,
    mySym :   "mykey1",         //normal key
    [mySym] : "mykey1"          //symbol key
}
console.log(JsUser2.mySym);        //mykey1-->Note : this is normal key
console.log(typeof JsUser2.mySym); //string--->Note : this is not symbol key

console.log(JsUser2[mySym]);        //mykey1 but it is symbol key
//-->Note : to access symbol key use bracket notation with variable name


//**************************************************************************************//