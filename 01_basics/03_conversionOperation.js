let score ="22abc"

console.log(typeof score);//string

let valueInNumber=Number(score)//convert string to number
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN

//"33"=> 33
//"33abc"=>NaN
//true=>1
//false=>0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)//convert number to boolean
console.log(booleanIsLoggedIn);//true

//1=>true
//0=>false
//""=>false
//"shiva"=>true
//null=>false
//undefined=>false
//" "=>true

let someNumber=33
let stringSomeNumber=String(someNumber)//convert number to string
console.log(stringSomeNumber);//"33"
console.log(typeof stringSomeNumber);//string

//**************************** Operations *******************************/

let value=3
let negValue=-value
console.log(negValue);//-3

console.log(3+3);//6
console.log(2-2);//0
console.log(4/2);//2
console.log(2**2);//4
console.log(5*2);//10
console.log(5%2);//1

console.log("5"+1+1);//"511"
console.log(1+1+"5");//"25"
console.log(+"5"+1+1);//7

console.log(5+ "5");//"55" string concatenation
console.log("5" + 5);//"55" string concatenation
console.log("5" - 5);//0
console.log("5" * 5);  //25
console.log("5" / 5);  //1
console.log("5" ** 5); //3125
console.log("5" % 2);  //1

console.log(5 + true);//6
console.log(5 + false);//5
console.log(+true);//1
console.log(+false);//0
console.log(+"");//0
console.log(+"abc");//NaN
console.log(-true);//-1

console.log((3+4)*5%3);//2

let num1,num2,num3
num1=num2=num3=2+2
console.log(num1,num2,num3);//4 4 4 =>don't use this way (tricky to read)

///*******prefix and postfix ********/

let a=100
a++
console.log(a);//101

let b=100
++b
console.log(b);//101

let c=100
c--
console.log(c);//99

let d=100
--d
console.log(d);//99

