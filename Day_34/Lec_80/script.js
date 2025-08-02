class Animal{
    constructor(name){
        this.name = name;
        console.log("Animal Constructor");
    }
    eats(){
        console.log("Animal eats");
    }
    sleeps(){
        console.log("Animal sleeps");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name); // Call the parent class constructor
        console.log("Lion Constructor");
    }
    roars(){
        console.log("Lion roars");
    }
    // Overriding the eats method   
    eats(){
        console.log("Lion Is eats");
    }
}

let a = new Animal("Bunny");
let l = new Lion("Sheraakhan");
console.log(a);