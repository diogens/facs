const express = require("express");
const app = express();

app.set("view engine", "ejs");

const ObjectId = require("mongodb").ObjectID;

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/", (req, res) => {
  var cursor = db.collection("game").find();
});

app.get("/show", (req, res) => {
  db.collection("game")
    .find()
    .toArray((err, results) => {
      if (err) return console.log(err);
      res.render("show", { data: results });
    });
});

app.post("/show", (req, res) => {
  console.log(req.body);
  //criar a coleção “data”, que irá armazenar nossos dados
  db.collection("game").save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log("Salvo no Banco de Dados");
    res.redirect("/show");
  });
});

app
  .route("/edit/:id")
  .get((req, res) => {
    var id = req.params.id;

    db.collection("game")
      .find(ObjectId(id))
      .toArray((err, result) => {
        if (err) return res.send(err);
        res.render("edit", { data: result });
      });
  })
  .post((req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var surname = req.body.surname;

    db.collection("game").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name: name,
          surname: surname,
        },
      },
      (err, result) => {
        if (err) return res.send(err);
        res.redirect("/dio/show");
        console.log("Atualizado no Banco de Dados");
      }
    );
  });

app.route("/delete/:id").get((req, res) => {
  var id = req.params.id;

  db.collection("game").deleteOne({ _id: ObjectId(id) }, (err, result) => {
    if (err) return res.send(500, err);
    console.log("Deletado do Banco de Dados!");
    res.redirect("/dio/show");
  });
});

module.exports = app;
