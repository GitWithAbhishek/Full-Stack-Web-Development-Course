function greetPeople(name,callback){
    console.log("Hello "+name);
    callback();
}

function sayGoodBye(){
    console.log("GoodBye")
}
greetPeople("Abhishek",sayGoodBye);