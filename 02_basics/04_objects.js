//const tinderUser = new Object() // this is singleton object
const tinderUser ={}              // object literal syntax or non-singleton object

tinderUser.id ="123abc"
tinderUser.name ="shiva"
tinderUser.isLoggedIn=false

//console.log(tinderUser);  //{ id: '123abc', name: 'shiva', isLoggedIn: false }

//*********************** (Nested Object)  *****************************************//
const regularUser= {
    email:" some@gamil.com",
    fullname:{
        userfullname:{
            firstname:"shiva",
            lastname:"jinkalker"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); //shiva

//*********************** (Object Methods)  *****************************************//
const obj1 ={1:"a" , 2: "b"}
const obj2 ={3:"c" , 4: "d"}

// const obj3={obj1,obj2}                //nested object
// console.log(obj3);                    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 =Object.assign({},obj1,obj2) //merging objects
// console.log(obj3);                      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3= {...obj1,...obj2}          //merging objects using spread operator
//console.log(obj3);                   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//*********************** (Object Keys, Values, Entries)  *****************************************//

const user=[
    {
        id:1,
        email: "shiva@Google.com"
    },
    {
        id:2,
        email: "shiva@ChatGpt.com"
    }   
]

console.log(user[0].email); //shiva@Google.com
console.log(user[0].id);    //1

console.log(user[1].email); //shiva@ChatGpt.com
console.log(user[1].id);    //2

console.log(user[1].hasOwnProperty("email")); //true

//console.log(Object.keys(obj3));    // ['1','2','3','4']
//console.log(Object.values(obj3));  // ['a','b','c','d']
//console.log(Object.entries(obj3)); // [ ['1','a'], ['2','b'], ['3','c'], ['4','d'] ]

//*********************** (Object Destructuring)  *****************************************//

const course ={
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "shiva"
}
console.log(course.coursename);         //js in hindi     (Note: normal way of accessing object properties)

const {courseInstructor}= course        // destructuring  (Note: variable name should be same as key name)
console.log(courseInstructor);          //shiva

const {courseInstructor : instructor}= course // renaming while destructuring
console.log(instructor);                     //shiva


// ***************** react based example ***********************************************************//

//one way to pass props in react component using props object
// const navbar =(props.company) =>{   
//     return props.company + " " + props.position
// }

//second way to pass props in react component using destructuring
const navbar=({company, position}) =>{
    return company + " " + position
}

navbar(company="amazon", position="frontend")
console.log(navbar({company:"amazon", position:"frontend"})); //"amazon frontend"

// ***************** API ***********************************************************//


// JavaScript object

// const user = {
//   name: "shiva",
//   courseName: "Javascript",
//   price: "free"
// }

//json basic introduction (string/data format)

// {
//     "name":"shiva",
//     "courseName": "Javasript",
//     "price": "free"
// }

//JSON Array basic 
[
    {},
    {},
    {}
]