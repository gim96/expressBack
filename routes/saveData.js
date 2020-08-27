var express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var uri =
  "mongodb+srv://admin:WMgim@96@cluster0.z6xtu.mongodb.net/testdb?retryWrites=true&w=majority";

/* GET users listing. */
router.get("/", function (req, res, next) {
  var title = req.query.myTitle;
  var body = req.query.myBody;

  MongoClient.connect(uri, function (err, client) {
    if (err) throw err;

    var db = client.db("testdb");

    var myobj = { title: title, body: body };
    db.collection("post").insertOne(myobj, function (err, res) {
      if (err) throw err;

      console.log("1 document inserted");
    });
    res.redirect("http://127.0.0.1:3000/");
  });
});

module.exports = router;
