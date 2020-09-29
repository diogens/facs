const express = require("express");
const app = express();

const diogenes = require("./diogenes");
const guilherme = require("./guilherme");

app.use(diogenes);
app.use(guilherme);
