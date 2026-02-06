
//false values:
// false, 0, -0, BigInt 0n, "", null, NaN, undefined


//truthy values 
// except the above falsy values all are truthy values
// "0", 'false', " ", [], {}, function(){}


//examples:
const userEmail =`jinkalker@gmail.com`
if(userEmail){
    console.log(`Got user email`);// Got user email
}
else{
    console.log(`Dont't have user email`);
}
//+++++++++++++++++++++++++++++++++++++++++++++++
const user1 =""
if(user1){
    console.log(`Got user email`);
}
else{
    console.log(`Dont't have user email`);// Dont't have user email
}

//++++++++++++++++++++++++++++++++++++++++++++++++
const user2 =[]
if(user2){
    console.log(`Got user email`);//Got user email
}
else{
    console.log(`Dont't have user email`);
}

//++++++++++++++++++++++++++++++++++++++++++++++++
const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log(`Object is Empty`); //Object is Empty
}

//++++++++++++++++++++++++++++++++++++++++++++++++
const Arr=[]
if(Arr.length===0){
    console.log(`Array is Empty`); // Array is Empty
}