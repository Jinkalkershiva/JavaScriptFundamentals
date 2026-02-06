//for each part:2
const coding =["js","java","c++"];
const values =coding.forEach((item)=>{
    console.log(item);
    return item; //return value in forEach is ignored
})
console.log(values); //undefined Note: forEach does not return anything
// js
// java
// c++
// undefined

//************************ (filter part:) ************************************************//
console.log(" ");

//example 1  
const Nums =[1,2,3,4,5,6,7,8,9,10];

const newNums= Nums.filter((num)=> num>4)
console.log(newNums)
// [ 5, 6, 7, 8, 9, 10 ]

const newNums2= []
Nums.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
})
console.log(newNums2); // [ 5, 6, 7, 8, 9, 10 ]

//example 2
const books =[
    {title:"Book A", author:"Author X", rating:4.2},
    {title:"Book B", author:"Author Y", rating:3.8},
    {title:"Book C", author:"Author Z", rating:4.5},
    {title:"Book D", author:"Author W", rating:2.9},    
]

let userBooks = books.filter((bk)=> bk.rating >= 4)
console.log(userBooks)
// [
//   { title: 'Book A', author: 'Author X', rating: 4.2 },
//   { title: 'Book C', author: 'Author Z', rating: 4.5 }
// ]

userBooks = books.filter((bk)=> {return bk.author === `Author X`})
console.log(userBooks);
// [ { title: 'Book A', author: 'Author X', rating: 4.2 } ]

//************************ (map) ***********************************************//

const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const sqNums = myNumbers.map((num)=> { return num * num})
console.log(sqNums);
// [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//chaining
const newNums3= myNumbers
                .map((num)=> num * 10)//multiply by 10
                .map((num)=> num+1)// 1st chain pass to this and add 1
                .filter((num)=> num>=40)// filter num greater than equal to 40
console.log(newNums3);
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]








