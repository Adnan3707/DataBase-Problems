const mongoose = require("mongoose");
let url = "mongodb+srv://adnan:adnan@cluster0.3ycaj.mongodb.net/?retryWrites=true&w=majority"
let Chatgpt = require('./model/Schema')
async function connect(){
  await  mongoose.connect(url, {
        useNewUrlParser: true,
      })
      .then((con) => {
        // console.log(con.connections);
        console.log("DB connection successful!");
      });
}
connect()
async function find_queries(){
  //    let q = await Chatgpt.find({},{'favoriteBooks':{$slice:1}}).limit(10)
  // Retrieve the first element from an array field named "results" for each document, regardless of its position in the array
  //  let q = await Chatgpt.find({},{name:1,hobbies:{$slice:[0,1]}}).limit(10)
  //  Retrieve the last three elements from an array field named "steps" and sort them in descending order based on the "createdAt" field.
  let q = await Chatgpt.find({},{name:1,age:1,'hobbies':{$slice:-2}}).sort({'age':1}).limit(10)   
  console.log(q)
}
// find_queries()
async function update(){
//  let q = await Chatgpt.updateOne({'name':'Aracely Rippin'},{$set:{'name':'Adnan Farooq'}})
// You have a collection of user documents, and you want to update the "lastLogin" field for a specific user with the current date and time.
//  let q = await Chatgpt.updateOne({'name':'Adnan Farooq'},{$currentDate:{'age': { $type: "date" }}})
// You have a collection of product documents, and you want to update the "lastModified" field for all products to the current date and time.
// let q = await Chatgpt.updateMany({},{$currentDate:{'LastModified':{$type : 'date'}}})
console.log(Date())
let q = await Chatgpt.find({'LastModified':{$gt : Date()}})

 console.log(q)
}
update()
