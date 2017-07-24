var express = require("express");
var mongoose = require("mongoose");
var app = express();

//DB setting
mongoose.connect(process.env.MONGO_DB, { useMongoClient: true });
var db = mongoose.connection;

db.once("open", function(){
  console.log("DB connected");
});

db.on("error", function(err){
  console.log("DB ERROR : ", err);
});

//Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

//Prot setting
app.listen(3000, function(){
  console.log("server on!");
});
