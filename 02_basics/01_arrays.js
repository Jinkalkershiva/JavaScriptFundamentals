//*********************** (Arrays)  *****************************************//

const myArr= [0,1,2,3,4,5];

console.log(myArr[0]); //0
console.log(myArr[3]); //3

console.log(myArr.length); //6
myArr[2]= 42;
console.log(myArr); //[0,1,42,3,4,5]

myArr.push(6);
console.log(myArr); //[0,1,42,3,4,5,6]
myArr.pop();
console.log(myArr); //[0,1,42,3,4,5]

myArr.unshift(-1);
console.log(myArr); //[-1,0,1,42,3,4,5]
myArr.shift();
console.log(myArr); //[0,1,42,3,4,5]

console.log(myArr.includes(42)); //true
console.log(myArr.indexOf(2)); //-1 Note: that 2 was changed to 42
console.log(myArr.indexOf(42)); //2

const newArr= myArr.join();
console.log(myArr);         //[0,1,42,3,4,5]
console.log(typeof myArr);  //object

console.log(newArr);        //"0,1,42,3,4,5"
console.log(typeof newArr); //string

const strArr= newArr.split(",");
console.log(strArr);        //["0","1","42","3","4","5"]
console.log(typeof strArr); //object


/********************* (slice, splice) ***************************************/

console.log("A ",myArr);   // A  [ 0, 1, 42, 3, 4, 5 ]

const myn1= myArr.slice(1,3);

console.log(myn1);         // [1, 42]  Note: Last index is not included
console.log("B ", myArr);  // B  [ 0, 1, 42, 3, 4, 5 ]

const myn2= myArr.splice(1,3);

console.log(myn2);         // [1, 42, 3] Note: Last index is included
console.log("C ",myArr);   // C  [ 0, 4, 5 ] Note: myArr is changed and Part of splice is removed



