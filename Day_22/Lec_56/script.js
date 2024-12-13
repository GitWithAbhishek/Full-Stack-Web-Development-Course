console.log("Hello I Am Conditional Tutorial");

let age=20;
if(age>18){
    console.log("You Can Drive");
}
else{
    console.log("You Can Not Drive");
}
/* == Double Equal Checks Only For The Value Not The Type */
let a=10;
let b="10";
if(a==b){
    console.log("Yes Both Are Equal");
}
else{
    console.log("The Value Is Not Same");
}
/* === Triple Equal Is Used To Check The Value And Type Also */
let c=10;
let d="10";
if(c===d){
    console.log("Yes Both Are Equal And Of Same Type");
}
else{
    console.log("May The Value Or Type Is Not Same");
}