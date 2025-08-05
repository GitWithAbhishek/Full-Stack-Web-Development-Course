function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <0){
            break;
        } else {
            sum  =sum + arr[i];
        }
    }
    console.log(sum)
}

let arr = [1, 2, 3, -1, 4, 5];
sum(arr); // Output: 6