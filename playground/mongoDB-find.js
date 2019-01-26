const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

var dbo = db.db("TodoApp");
// dbo.createCollection("todos",(err,res)=>{
//     if(err) throw err;
//     console.log("Collection is created");
//todo:Insert data
/*dbo.collection("todos").insertOne(
    {
      
        name:"Sushil",
age:24,
Location:"India"
}, (err,res)=>{
    if(err) throw err;

console.log(res.ops[0]._id.getTimestamp());
*/
dbo.collection("todos").find({}).toArray((err,res)=>{
if (err)
    throw err;
console.log(res);

    db.close();   
});

});
