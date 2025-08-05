let str = "Aman";
let newstr = str.split("").reverse().join("");
console.log(newstr); // Output: "namA"

str += newstr; // Just append the reversed string
console.log(str); // Output: "AmannamA"

