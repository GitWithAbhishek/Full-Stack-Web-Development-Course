let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let button4 = document.getElementById("btn4")
let button5 = document.getElementById("btn5")
let button6 = document.getElementById("btn6")
let button7 = document.getElementById("btn7")
let button8 = document.getElementById("btn8")
let button9 = document.getElementById("btn9")
let button10 = document.getElementById("btn10")

button1.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="Clicked"
})
button2.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="Double Clicked"
})
button3.addEventListener("mousedown",()=>{
    document.querySelector(".box").innerHTML="Mouse Down"
})
button4.addEventListener("mouseup",()=>{
    document.querySelector(".box").innerHTML="Mouse Up"
})
button5.addEventListener("mousemove",()=>{
    document.querySelector(".box").innerHTML="Mouse Move"
})
button6.addEventListener("mouseenter",()=>{
    document.querySelector(".box").innerHTML="Mouse Enter"
})
button7.addEventListener("mouseleave",()=>{
    document.querySelector(".box").innerHTML="Mouse Leave"
})
button8.addEventListener("mouseover",()=>{
    document.querySelector(".box").innerHTML="Mouse Over"
})
button9.addEventListener("mouseout",()=>{
    document.querySelector(".box").innerHTML="Mouse Out"
})
button10.addEventListener("contextmenu",()=>{
    document.querySelector(".box").innerHTML="Context Menu"
})