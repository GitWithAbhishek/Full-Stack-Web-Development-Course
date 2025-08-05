function countVowel(str){
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i])){
            count++;
        }
    }
    return count;
}
let str = "Hello World";
let result = countVowel(str);
console.log(result); // Output: 3