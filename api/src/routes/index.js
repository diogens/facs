const express = require("express");
const UsuarioController = require('../app/controllers/Usuarios')

const route = express.Router();

route.get("/list", UsuarioController.index)
route.get("/show", UsuarioController.show)
route.get("/register", UsuarioController.store)
route.post("/register", UsuarioController.storeRegister)
route.get("/edit", UsuarioController.update)
route.get("/delete", UsuarioController.delete)



module.exports = route