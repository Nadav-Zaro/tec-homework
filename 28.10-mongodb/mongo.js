const express = require("express"),
    PORT = 8000
app = express()

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.db("test").collection("post").find({},{ name: 1, _id: 0}).toArray(function (error, res) {
        if (error) throw err;
        console.log(res);
        db.close();
    })
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.db("test").collection("names").find({}).toArray(function(error,res){
        if (error) throw err;
        console.log(res);
        db.close();
    })
});

function showCollection(collection) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.db("test").collection(`${collection}`).find({}).toArray(function (error, res) {
            if (error) throw err;
            console.log(res);
            db.close();
        })
    });
}
// showCollection("post")

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})