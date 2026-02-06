//++++++++++++++ Number Basics +++++++++++++++++++++++++++++++++//
const score =400
console.log(score); // 400

const balance =new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(3)); // 100.000

const otherNumber =123.8966
console.log(otherNumber.toPrecision(4)); // 123.9
console.log(otherNumber.toPrecision(6)); // 123.897
console.log(otherNumber.toPrecision(2)); // 1.2e+2

const hundreds =1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
console.log(hundreds.toLocaleString('de-DE')); // 1.000.000

//++++++++++++++ Math Object +++++++++++++++++++++++++++++++++++++++//

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-4));

console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4

console.log(Math.min(4,3,6,9)); // 3
console.log(Math.max(4,3,6,9)); // 9

console.log(2**3); // 8
console.log(Math.pow(2,3)); // 8
console.log(Math.sqrt(64)); // 8

console.log(Math.random());                     // 0 to 1    -> 0.3950438939409916
console.log(Math.random()*10);                  // 0 to 10   -> 0.6221371236083151                                  
console.log((Math.random()*10)+1);              // 1 to 11   -> 7.874654321098765

console.log(Math.floor(Math.random()*10));      // 0 to 9    -> 7 (random number)
console.log(Math.floor(Math.random()*10)+1);    // 1 to 10   -> 5 (random number)

// Note : (Math.random()*10)   -> 0 to 10 but we are adding 1 so it becomes 1 to 11
// Note : (Math.random()*10)+1 -> 1 to 11 but we are using floor so it becomes 1 to 10

const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)));         // 0 to 10      Note: (max-min+1) = 11 
console.log(Math.floor(Math.random()*(max-min+1)) + min);   // 10 to 20     Note: We are adding min value at last