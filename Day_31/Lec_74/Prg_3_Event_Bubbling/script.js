document.querySelector(".container").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Clicked container")
})
document.querySelector(".childcontainer").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Clicked child container")
})
document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Clicked child")
})