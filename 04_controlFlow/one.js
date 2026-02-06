//Control flow statements

// <, >, <=, >=, ==, !=, ===, !==

const isUserLoggedIn = true
const temperature =41

if(isUserLoggedIn){
    console.log(`executed`); //executed
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
if(temperature===41){
    console.log(`temperature is less than 50`); //temperature is less than 50
}
else{
    console.log(`temperature is Greater than 50`)
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const score =200
if(score >100){
    let power =`fly`
    console.log(`User power: ${power}`); // User power: fly
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const balance =1000
// if(balance >500) console.log(`test`),console.log(`test2`); // NOT good practice 
// test
// test2


//bascic 
if(balance <500){
    console.log(`less than 500`);
}
else if( balance <750){
    console.log(`less than 750`);
}
else if(balance <900){
    console.log(`less than 900`);
}
else{
    console.log(`less than 1200`); //less than 1200
}


// mid level
const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle =false
const loggedInFromEmail =true

if(userLoggedIn && debitcard && `3`===3){
    console.log(`Allow to buy course`);
}
if(loggedInFromGoogle || loggedInFromEmail ){
    console.log(`User logged in`); // User logged in
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



