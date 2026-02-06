const name= "Shiva"
const repoCount = 45

console.log(name +repoCount + " Value")  //Shiva45 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName =new String(`Freefire`)  //String Object

console.log(gameName[0]);            //F
console.log(gameName.__proto__);     //Shows all the methods available for String Object
console.log(gameName.length);        //8  

console.log(gameName.toUpperCase()); //FREEFIRE Note: String methods do not modify the original string, they return a new string.
console.log(gameName);               //Freefire

console.log(gameName.charAt(2));        //e
console.log(gameName.indexOf('f'));     //3  (case sensitive)
console.log(gameName.lastIndexOf('e')); //6

console.log(gameName.includes('fire'));   //true (case sensitive)
console.log(gameName.startsWith('Free')); //true
console.log(gameName.endsWith('ire'));    //true

console.log(gameName.slice(0,4));    //Free  (end index not included)
console.log(gameName.slice(4));      //fire

console.log(gameName.replace('fire', 'Fire')); //FreeFire
console.log(gameName);                         //Freefire
console.log(gameName.split('e'));              //[ 'Fr', '', 'fir', '' ]

const newStringOne = "    shiva    "
console.log(newStringOne.trim());      //"shiva"  (removes spaces from both ends)
console.log(newStringOne.trimStart()); //"shiva    " (removes spaces from the start)
console.log(newStringOne.trimEnd());   //"    shiva" (removes spaces from the end)  

const url = "https://www.github.com/jinkalker%20shiva"
console.log(url.replace('%20', '-')); //https://www.github.com/jinkalker-shiva
console.log(url.includes('%20'));     //true
console.log(decodeURIComponent(url)); //https://www.github.com/jinkalker shiva
