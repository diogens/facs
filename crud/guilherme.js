const express = require("express");
const app = express();

app.set("view engine", "ejs");

const ObjectId = require("mongodb").ObjectID;

app.get("/", function (req, res) {
  res.render("home2");
});

app.get("/", (req, res) => {
  var cursor = db.collection("book").find();
});

app.get("/show2", (req, res) => {
  db.collection("book")
    .find()
    .toArray((err, results) => {
      if (err) return console.log(err);
      res.render("show2", { data: results });
    });
});

app.post("/show2", (req, res) => {
  console.log(req.body);
  //criar a coleção “data”, que irá armazenar nossos dados
  db.collection("book").save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log("Salvo no Banco de Dados");
    res.redirect("/gui/show2");
  });
});

app
  .route("/edit2/:id")
  .get((req, res) => {
    var id = req.params.id;

    db.collection("book")
      .find(ObjectId(id))
      .toArray((err, result) => {
        if (err) return res.send(err);
        res.render("edit2", { data: result });
      });
  })
  .post((req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var surname = req.body.surname;

    db.collection("book").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name: name,
          surname: surname,
        },
      },
      (err, result) => {
        if (err) return res.send(err);
        res.redirect("/gui/show2");
        console.log("Atualizado no Banco de Dados");
      }
    );
  });

app.route("/delete/:id").get((req, res) => {
  var id = req.params.id;

  db.collection("book").deleteOne({ _id: ObjectId(id) }, (err, result) => {
    if (err) return res.send(500, err);
    console.log("Deletado do Banco de Dados!");
    res.redirect("/gui/show2");
  });
});

module.exports = app;