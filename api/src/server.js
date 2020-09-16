const express = require('express')
require('dotenv').config()
const path = require("path");
var hbs = require('express-handlebars');
const bodyParser = require('body-parser')

const ObjectId = require('mongodb').ObjectID

const MongoClient = require('mongodb').MongoClient
const uri = `mongodb+srv://${process.env.USER}:${process.env.SENHA}@cluster0.awox0.mongodb.net/${process.env.BANCO}?retryWrites=true&w=majority`;

const app = express()

const PORT = process.env.PORT || 3333

MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
  if (err) return console.log(err)
  db = client.db('CRUD')
  
  app.listen(PORT, () => {
    console.log(`🔥 Start -> http://localhost:${PORT}/`)
  }, )
}, )

app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.set("view engine", "hbs");

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
}))

app.set("views", path.join(__dirname, "views"));

app.use("/api", require("./routes/index"));




