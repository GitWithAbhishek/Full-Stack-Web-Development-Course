function add(a, b) {
    return a+b;
}

function sub(a, b) {
    return a-b;
}

function mul(a, b) {
    return a*b;    
}

function div(a, b) {
    return a/b;
}

// Generating Random Number For 10% Correct Results
let x = Math.floor((Math.random() * 100) + 1);
let res;
console.log("Welcome To Faulty Calculator :)");
let a = parseFloat(prompt("Enter The First Number: "));
let b = parseFloat(prompt("Enter The Second Number: "));
console.log("1-For Addition   2-For Subtraction   3-For Multiplication   4-For Division");
let c = parseInt(prompt("Enter Your Choice: "));

if (x >= 1 && x <= 10) {
    // Correct operations (10% chance)
    if (c == 1) {
        console.log("The Addition Of The Numbers Is: " + add(a , b));
    } else if (c == 2) {
        console.log("The Subtraction Of The Numbers Is: " + sub(a , b));
    } else if (c == 3) {
        console.log("The Multiplication Of The Numbers Is: " + mul(a , b));
    } else if (c == 4) {
        console.log("The Division Of The Numbers Is: " + div(a , b));
    } else {
        console.log("Invalid Choice!");
    }
} else {
    // Faulty operations (90% chance)
    if (c == 1) {
       res = sub(a, b);
       console.log("The Addition Of Number is "+res);
    } else if (c == 2) {
        res = div(a, b);
        console.log("The Subtraction Of Number is "+res);
    } else if (c == 3) {
        res = add(a, b);
        console.log("The Multiplication Of Number is "+res);
    } else if (c == 4) {
        res = mul(a, b);
        console.log("The Division Of Number is "+res);
    } else {
        console.log("Invalid Choice!");
    }
}
