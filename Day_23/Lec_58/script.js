//Grreting function
function greet(name){
    console.log("Hello "+name+" Good Morning");
}
greet("Abhishek");

//Addition Fuction Of Two Number
function add(a,b){
    console.log("The Sum is "+(a+b));
}
add(2,4);

//Return type Function
function multiply(a,b){
    return a*b;
}
res=multiply(5,4);
console.log("The Multiplicative Result is "+res);

//Deafult Parameter (Optional Parameter)
function sub(a,b,c=5){
    console.log("The Sum is "+(a-b-c));
}
sub(20,4);

//Deafult Parameter (Providing The Value Of The Optional Parameter)
function sub(a,b,c=5){
    console.log("The Sum is "+(a-b-c));
}
sub(20,4,1);

//Arraow Function Used To Parse The Value in The Other Function
const fun1=(x)=>{
    console.log("I Am A Arraow Function" ,+x);
}
fun1(7)