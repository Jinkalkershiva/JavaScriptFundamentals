//************************ ( Reduce ) ***********************************************//
const myNums=[1,2,3]
let intialValue =0

const myTotal = myNums.reduce(function(accumulator, currentValue){
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue;
},intialValue);

// accumulator: 0 and currentValue: 1
// accumulator: 1 and currentValue: 2
// accumulator: 3 and currentValue: 3

console.log(myTotal); // 6

// Example: 2 using Arrow function
const myTotal2= myNums.reduce( (acc,curr)=> acc+curr,0)
console.log(myTotal2); // 6

// Example: 3 without initial value
const myTotal3= myNums.reduce( (acc,curr)=> {
    console.log(`accumulor: ${acc} and currentValue: ${curr}`);
    return acc+curr
    }
)
// accumulor: 1 and currentValue: 2
// accumulor: 3 and currentValue: 3
console.log(myTotal3); // 6

// Example: 4 (Shopping Cart)

const shoppingCart =[
    {productName:"Laptop", price:30000, quantity:1},
    {productName:"Mobile", price:20000, quantity:2},
    {productName:"Tablet", price:15000, quantity:1},
]
    
const priceToPay = shoppingCart.reduce((acc,item)=>(acc+item.price),0);
console.log(priceToPay); // 65000
