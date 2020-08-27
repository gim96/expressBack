var express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
//var mongoose = require("mongoose");

// router.get("/insert", function (req, res) {
//   MongoClient.connect(uri, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("testdb");
//     var myobj = { name: "Aruna", age: 20 };
//     dbo.collection("post").insertOne(myobj, function (err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });
// });

router.get("/", function (req, res) {
  // const client = await MongoClient.connect(uri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  MongoClient.connect(uri, function (err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");
    dbo
      .collection("post")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result.name);
        db.close();
      });
  });
  // MongoClient.connect(
  //   "mongodb + srv://admin:WMgim@96@cluster0.z6xtu.mongodb.net/sample_airbnb?retryWrites=true&w=majority;",
  //   function (err, client) {
  //     if (err) throw err;

  //     var db = client.db("mydb");

  //     db.collection("post")
  //       .find()
  //       .toArray(function (err, result) {
  //         if (err) throw err;
  //         res.send(result);
  //         console.log(result);
  //       });
  //   }
  // );
});

module.exports = router;
