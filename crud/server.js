const express = require("express");
const app = express();
require("dotenv").config();
const bodyparser = require("body-parser");

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.USER}:${process.env.SENHA}@cluster0.awox0.mongodb.net/${process.env.BANCO}?retryWrites=true&w=majority`;

MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err);
  db = client.db("Games"); // coloque o nome do seu DB

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(require("./router"));
