//Dates

let myDate=new Date() //Current date and time
console.log(myDate);                    //2025-12-28T07:38:11.021Z
console.log(myDate.toString());         //Sun Dec 28 2025 13:08:11 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());     //Sun Dec 28 2025
console.log(myDate.toLocaleString());   //28/12/2025, 1:08:11 pm
console.log(typeof myDate);             //object

console.log(myDate.toUTCString());          //Sun, 28 Dec 2025 07:38:11 GMT
console.log(myDate.toTimeString());         //13:08:11 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleTimeString());   //1:08:11 pm

let myCreatedDate1 =new Date(2025,11,28)
console.log(myCreatedDate1.toDateString());  //Sun Dec 28 2025


let myCreatedDate2 =new Date("2025-12-28")
console.log(myCreatedDate2.toLocaleString()); //28/12/2025, 5:30:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);                   //1767173891021  (milliseconds since Jan 1, 1970)
console.log(myCreatedDate1.getTime());      //1767173400000 (milliseconds since Jan 1, 1970)
console.log(Math.floor(Date.now()/1000));   //1767173891 (seconds since Jan 1, 1970   )

let newDate =new Date()
console.log(newDate);                  //2025-12-28T07:38:11.021Z
console.log(newDate.getFullYear());    //2025
console.log(newDate.getMonth());       //11  (0-11) 0-Jan, 1-Feb,....11-Dec
console.log(newDate.getDate());        //28  (1-31)
console.log(newDate.getDay());         //0  (0-6) 0-Sun, 1-Mon,...6-Sat
console.log(newDate.getHours());       //13 (0-23)
console.log(newDate.getMinutes());     //8  (0-59)

//`${newDate.getDay()} and the Time is ${newDate.getHours()}:${newDate.getMinutes()}`

let delux= newDate.toLocaleString(`default`,{
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
       
})

console.log(delux); //Sunday, 28 December 2025