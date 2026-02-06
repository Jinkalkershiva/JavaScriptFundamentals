//************************* for of **************************************//

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
// 1
// 2
// 3
// 4
// 5

const greetings ="Hello World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d

//************************ Map **********************************************//
// Map isa an Object that holds Kay -Value pairs and remembers the original insertion order of the keys

const map =new Map() // Create a new Map
map.set(`IN`,`India`)
map.set(`USA`,`United States of America`)
map.set(`FR`,`France`)
map.set(`IN`,`India`) // Duplicate key, will update the value

console.log(map);
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'FR' => 'France'
// }

for(const key of map){
    console.log(key);
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'FR', 'France' ]

for(const [key,value] of map){
    console.log(key,':-',value);
}
// IN :- India
// USA :- United States of America
// FR :- France

//*********** objects *****************************/
const myObj ={
    js: `javascript`,
    cpp:`c++`,
    java:`java`,
    rb:`ruby`
}

// for(const [key,value] of myObj){
//     console.log(key,':-',value);
// } // myObj is not iterable

for(const key of Object.keys(myObj)){
    console.log(key,':-',myObj[key]);
}
// js :- javascript
// cpp :- c++
// java :- java
// rb :- ruby

for(const key in myObj){
    console.log(key,`:-`,myObj[key]);
}
// js :- javascript
// cpp :- c++
// java :- java
// rb :- ruby

//********************* for in loop : ***********************//

//in arr using key 
const programming =["js","rb", "py","java","cpp"]
for(const key in programming){
    console.log(programming[key]);
}
// js
// rb
// py
// java
// cpp

const mp =new Map() // Create a new Map
mp.set(`IN`,`India`)
mp.set(`USA`,`United States of America`)
mp.set(`FR`,`France`)
mp.set(`IN`,`India`)

// for(const key in mp){
//     console.log(key);
// }   
//mp is not iterable using for in loop note: nothing is printed

// ********************* for each loop : ***********************//
console.log(" ");

const movies =["bahubali","kgf", "kantara","pushpa","dangal"]

movies.forEach(function(val){
    console.log(val);
})
// bahubali
// kgf
// kantara
// pushpa
// dangal
console.log(" ");

function printMovie(movie){
    console.log(movie);
}
movies.forEach(printMovie);
// bahubali
// kgf
// kantara
// pushpa
// dangal

//by arrow function
// movies.forEach((item)=> {
//     console.log(item);
// })
 
console.log(" ");
movies.forEach((item, index,arr)=> {
    console.log(item,index,arr);
})
// bahubali 0 [ 'bahubali', 'kgf', 'kantara', 'pushpa', 'dangal' ]
// kgf 1 [ 'bahubali', 'kgf', 'kantara', 'pushpa', 'dangal' ]
// kantara 2 [ 'bahubali', 'kgf', 'kantara', 'pushpa', 'dangal' ]
// pushpa 3 [ 'bahubali', 'kgf', 'kantara', 'pushpa', 'dangal' ]
// dangal 4 [ 'bahubali', 'kgf', 'kantara', 'pushpa', 'dangal' ]

console.log(" ");
const myCoding=[
    {
        langName:"JavaScript",
        fileExtension:".js",
    },
    {
        langName:"Java",
        fileExtension:".java",
    },
    {
        langName:"c++",
        fileExtension:".cpp",
    }
]
myCoding.forEach((item)=>{
    console.log(item.langName);
})
// JavaScript
// Java
// c++