console.log("Lec_65");
//Factorial using For Loop
let num =6;
let fact=1;
for(let i =num ; i>1 ; i--){
    fact=fact*i;
}
console.log("The Factorial is "+fact);

// Using reduce method
let fact1=[1,2,3,4,5,6,7,8,9];

const red=(a,b)=>{

    return a*b

}

console.log(fact1.reduce(red))