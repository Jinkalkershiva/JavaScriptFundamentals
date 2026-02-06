//while

let i=0
while(i<=5){
    console.log(`Value of idx is ${i}`);
    i=i+2
}
// Value of idx is 0
// Value of idx is 2
// Value of idx is 4

let myArray =['apple','banana','grapes','mango'];
let arr=0
while(arr <myArray.length){
    console.log(myArray[arr]);
    arr++;
}
// apple
// banana
// grapes
// mango

// do while (Note : first work and then condition check)

let score =1
do{
    console.log(`Score is ${score}`);
    score++;
} while(score <=5);
// Score is 1
// Score is 2
// Score is 3
// Score is 4
// Score is 5

let idx = 6
do{
    console.log(`Score is ${idx}`);
    idx++;
} while(idx <=5);
// Score is 6
