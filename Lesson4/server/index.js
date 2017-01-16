var express = require("express"),
    bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient,
    url = "mongodb://localhost/sandbox";
var database;
mongoClient.connect(url, function(err, db){
    database = db;
    app.listen(591);
});