//for
for(let idx=1;idx<=10;idx++){
    const element=idx;
    console.log(element);
    if(element===5){
        console.log("5 is best number");    
        break;
    }
}
// 1
// 2
// 3
// 4
// 5
// 5 is best number

//nested for
for(let i=2;i<=3;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=0;j<=10;j++){
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        console.log(i + `*` + j + `=` + i*j);
    }
}

// Outer loop value: 2
// 2*0=0
// 2*1=2
// 2*2=4
// 2*3=6
// 2*4=8
// 2*5=10
// 2*6=12
// 2*7=14
// 2*8=16
// 2*9=18
// 2*10=20
// Outer loop value: 3
// 3*0=0
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30


// on Arrays
let myArray=['apple','banana','grapes','mango'];
for(let i=0 ; i<myArray.length; i++){
    const ele =myArray[i];
    console.log(ele);
}
// apple
// banana
// grapes
// mango

//break and continue

for(let i=1;i<=20;i++){
    console.log(`Value of i is: ${i}`);
    if(i==3){
        console.log(`Detected 3`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

// Value of i is: 1
// Value of i is 1
// Value of i is: 2
// Value of i is 2
// Value of i is: 3
// Detected 3

for(let i=1;i<=5;i++){
    console.log(`Value of i is: ${i}`);
    if(i==3){
        console.log(`Detected 3`);
        continue; //skip rest of the code in this iteration
    }
    console.log(`Value of i is ${i}`);
}
// Value of i is: 1
// Value of i is 1
// Value of i is: 2
// Value of i is 2
// Value of i is: 3
// Detected 3
// Value of i is: 4
// Value of i is 4
// Value of i is: 5
// Value of i is 5


