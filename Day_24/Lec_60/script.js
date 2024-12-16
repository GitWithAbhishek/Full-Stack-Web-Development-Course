console.log("This Tutorial is About The String")
let a = "Abhishek";
console.log(a);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[6]);
console.log(a[8]);
console.log(a.length);

let firstname = "Aman";
let lastname = "Pandey";
// Printing In This way Is very Hectic Job
console.log("The First Name is "+firstname+" And The Last Name is "+lastname);

//Solution - We Have Template Literals
console.log(`The First Name is ${firstname} And The Last Name is ${lastname}`);

//String Manipulation Method In JS
let str = "GitWithAbhishek";
let str2 = "Namanlko"
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
// 8 is not included
console.log(str.slice(1,8));
console.log(str.slice(1));
console.log(str.replace("Git","Leet"));
console.log(str.concat(str2));

