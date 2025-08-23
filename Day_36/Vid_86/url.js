const url = require("url");

const myUrl = new URL("https://example.com/products?id=100&category=books");

console.log(myUrl.hostname);  // example.com
console.log(myUrl.pathname);  // /products
console.log(myUrl.searchParams.get("id")); // 100
