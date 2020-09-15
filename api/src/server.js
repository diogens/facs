const express = require('express')
const path = require("path");
var hbs = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express()

const PORT = 8080


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

app.listen(PORT, () => {
    console.log(`🔥 Start -> http://localhost:${PORT}/`)
})