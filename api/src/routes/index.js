const express = require("express");


const route = express.Router();

route.get("/list", (req, res) => {
  res.send('ok')
});

/* route.get("/list", (req, res) => {
  const content = readFile();
  return res.render("list", {
    layout: "default",
    title: "Lista",
    dados: content,
  });
}); */

module.exports = route