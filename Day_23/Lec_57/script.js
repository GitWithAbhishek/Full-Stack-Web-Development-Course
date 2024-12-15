console.log("I Am A Tutorial on Loop");
let i = 1;
console.log("I Am A While Loop");
while (i < 11) {
    console.log(i);
    i++;
}
console.log("I Am The For loop");
for (let j = 1; j < 11; j++) {
    console.log(j);
}
console.log("I Am The Do While Loop");
i = 1;
do {
    console.log(i);
    i++;
}
while (i < 11);

console.log("I Am The For In Loop");
let obj = { Name: "Abhishek", Role: "Programmer", Company: "GitWithAbhishek" }
for (const key in obj) {
    const element = obj[key]
    console.log(key, "-", element);
}