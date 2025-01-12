let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(typeof(arr));
/*
arr.push()-Enter The New Element In The Begning
arr.pop()-Remove The End Element
arr.shift()-Remove The First Element And Return It
arr.unshift()-Add Element At The Begning
delete.arr[8]-Delete The Index Value
arr.sort()-Sort The Array
*/

let brr = [11,12,13,14,15]
let crr = [16,17,18,19,20]
crr.concat(arr,brr)
console.log(crr);
