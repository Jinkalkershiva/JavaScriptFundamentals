//*********************** (Arrays)  ***************************************************************************************************************//

const marvel_heros= ["thor","Ironman","spiderman","hulk"];
const dc_heros= ["batman","superman","flash","aquaman"];

// marvel_heros.push("dc_heros");
// console.log(marvel_heros);        //[ 'thor','Ironman','spiderman','hulk',['batman','superman','flash','aquaman']]
// console.log(marvel_heros[4][1]);  //superman

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);          //[ 'thor','Ironman','spiderman','hulk','batman','superman','flash','aquaman']    

const all_new_heros=[...marvel_heros, ...dc_heros];
console.log(all_new_heros);        //[ 'thor','Ironman','spiderman','hulk','batman','superman','flash','aquaman']

const another_Arr= [1,2,3,[4,5,6],7,8];

const real_another_Arr= another_Arr.flat();
console.log(real_another_Arr);       //[1,2,3,4,5,6,7,8]

console.log(Array.isArray("Shiva")); //false
console.log(Array.from("shiva"));    //['s','h','i','v','a']
console.log(Array.from([1,2,3], x => x * 2)); //[2,4,6]

console.log(Array.from({name: "shiva"})); //[]  Note: we must define to which key or value to convert otherwise it returns empty array

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); //[100,200,300] Note: creates array from the given values

//**************************************************************************************************************************************//