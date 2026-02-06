
// write clean code by avoiding type coercion in comparisons
//simple comparisons

console.log(2>1);          // true
console.log(2<1);          // false
console.log(2>=1);         // true
console.log(2<=1);         // false
console.log(2==1);         // false
console.log(2!=1);         // true

//Avoid comparing different types

console.log('2' > 1);      // true, string '2' is converted to number 2
console.log('01' == 1);    // true, string '01' is converted to number 1
console.log(true == 1);    // true, boolean true is converted to number 1
console.log(false == 0);   // true, boolean false is converted to number 0

console.log(null > 0);    // false, null is converted to 0
console.log(null == 0);   // false, null is only equal to undefined
console.log(null >= 0);   // true, null is converted to 0

console.log(undefined > 0);   // false, undefined is converted to NaN
console.log(undefined < 0);   // false, undefined is converted to NaN
console.log(undefined == 0);  // false, undefined is only equal to null

// ===  Strict equality operator

console.log(2 === 2);    // true, type conversion
console.log("2" === 2);   // false, no type conversion
console.log(false === 0);  // false, no type conversion


