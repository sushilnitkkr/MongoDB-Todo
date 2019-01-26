const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
//   db.collection('Users').insertOne({
//     name: 'Andrew', 
//     age: 25,
//     location: 'Philadelphia'
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert user', err);
//     }

//     console.log(result);
//   });
var dbo = db.db("TodoApp");
// dbo.createCollection("todos",(err,res)=>{
//     if(err) throw err;
//     console.log("Collection is created");
dbo.collection("todos").insertOne(
    {
      
        name:"Sushil",
age:24,
Location:"India"
}, (err,res)=>{
    if(err) throw err;

console.log(res.ops[0]._id.getTimestamp());

    db.close();   
});

});
