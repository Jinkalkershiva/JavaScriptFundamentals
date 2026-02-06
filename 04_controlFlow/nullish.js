//
let val1;

val1=5 ??10;
console.log(val1);//5

val1=null ??10;
console.log(val1);//10

val1=undefined ??10;
console.log(val1);//10

val1=0 ??10;// Note:0 is not null or undefined
console.log(val1);// 0

val1="" ??"default string";
console.log(val1); //   

val1=false ??true;
console.log(val1);//false 

//val2

let val2;
val2=null ?? undefined ?? "hello" ?? 100;
console.log(val2);// hello  