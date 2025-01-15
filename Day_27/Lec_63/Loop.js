let a = [1,93,5,6,88]

/*Classical Loop*/
for (let index =0 ; index < a.length ; index++){
    console.log(a[index]);
}

/* For Each Loop */
a.forEach((value,index,arr)=>{
    /* It Will Print The Value Then Index Then Complete Array */
    console.log(value, index, arr)
})

/* For In Loop It Works With The Object */
let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key ,element)
    }
}

/* For Of Loop Manly Used For Arrays */
for (const val of a) {
    console.log(val)
    
}

/* Map - Creates A New Array By Performing Some Operation On Each Array Element */
const m = [1,2,3,4,5];
let newarr=m.map((value,index,array)=>{
    return value*value;
})
console.log(newarr);

/* Filter - Filters The Array With Values That Passes A Test. Creates A New Array */
const greaterthanseven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(a.filter(greaterthanseven))

/* Reduce - It Is Used To Reduce An Array Into Single Value */
let arr2 = [1,2,3,4,5]
const redu = (a,b)=>{
    return a+b
}
console.log(arr2.reduce(redu))