function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455);

        },10000)
    })
}
async function main(){
console.log("Start");
console.log("Fetching Data...");

let data =await getData();

console.log("Data: ", data);

console.log("End");

}

main();