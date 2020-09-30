const express = require("express");
const app = express.Router();

app.use("/dio", require("./diogenes"));
app.use("/gui", require("./guilherme"));

module.exports = app;
