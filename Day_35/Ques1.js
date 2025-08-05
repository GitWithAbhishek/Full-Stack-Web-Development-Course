let students = ["Alice", "Bob", "Charlie", "David", "Eve","Naman","Abhishek","Rohan","Sahil","Ankit"];

let house = [];

for(const st of students) {
    if(st.length<4){
        house.push("A");
    }
        else if(st.length<5){
        house.push("B");
    }
        else if(st.length<6){
        house.push("C");
    }
        else if(st.length<7){
        house.push("D");
    }
}
console.log(house);