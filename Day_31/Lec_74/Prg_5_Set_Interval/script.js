function getRandomColor(){
    let var1 = Math.ceil(0+Math.random()*255);
    let var2 = Math.ceil(0+Math.random()*255);
    let var3 = Math.ceil(0+Math.random()*255);
    return `rgb(${var1},${var2},${var3})`
}
setInterval(()=>{
    document.querySelector(".child").style.background=getRandomColor();
},1000);
