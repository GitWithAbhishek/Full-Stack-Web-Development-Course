console.log("Lec 71")

//Browser Code
/*
document.querySelector(".box").innerHTML
document.querySelector(".container").innerHTML
document.querySelector(".container").outerHTML
*/

let div = document.createElement("div");
div.innerHTML = "I Am Inserted <b>By Aman</b>"
div.setAttribute("class","created");
document.querySelector(".container").append(div);
let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterbegin","Hello I Am <b> AfterBegin </b>")
cont.insertAdjacentHTML("beforebegin","Hello I Am <b> BeforeBegin </b>")
cont.insertAdjacentHTML("afterend","Hello I Am <b> Afterend </b>")
cont.insertAdjacentHTML("beforeend","Hello I Am <b> Beforeend </b>")
let rem = document.querySelector("#itsme");
rem.remove();