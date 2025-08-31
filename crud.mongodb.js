use("crudDB")
console.log(db);
db.createCollection("students");
db.students.insertOne({name:"Abhishek",age:21,city:"Delhi"})
db.students.insertMany([{name:"Rahul",age:22,city:"Noida"},
    {name:"Rohit",age:23,city:"Gurgaon"},
    {name:"Ankit",age:24,city:"Faridabad"},
    {name:"Sahil",age:25,city:"Ghaziabad"},
    {name:"Aman",age:26,city:"Meerut"}
])   
let a = db.students.find({age:{$gt:22}})
console.log(a);
let b = db.students.find({age:{$lt:22}})
console.log(b.toArray());

db.students.updateOne({name:"Abhishek"},{$set:{age:22}});
db.students.updateMany({age:{$gt:22}},{$set:{city:"Noida"}});
db.students.updateOne({name:"Rohit"},{$inc:{age:2}});
db.students.deleteOne({name:"Aman"});
db.students.deleteMany({age:{$gt:25}});
db.students.drop();


// Indexing
db.students.createIndex({name:1});

// Sorting
db.students.find().sort({age:-1});  // -1 for descending order and 1 for ascending order

// Limit and Skip
db.students.find().skip(2).limit(3);

// Aggregate
db.students.aggregate([
    {$match:{age:{$gt:22}}},
    {$group:{_id:"$city",total:{$sum:1}}}
])

// Drop Database
db.dropDatabase();