function doubleElements(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==arr[i+1]){
            continue;
        }
        else{
            arr[i] = arr[i] * 2;
        }

}
}
let arr=[1,2,2,3,4,4,5];
doubleElements(arr);
console.log(arr);
