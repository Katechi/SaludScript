const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const fs = require("fs");
const uuid = require("uuid/v4");

//se lee el archivo "ficha.json" y lo transforma en una variable para poder modificarlo
const json_fichas = fs.readFileSync("routes/ficha.json", "utf-8");
let fichas = JSON.parse(json_fichas);

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.post("/dashboard", (req, res) => {
  //se crea una nueva ficha con todos los datos ingresados
  const {nombre, doc, numero_doc, sexo, fecha_nac, domicilio, telefono, correo, ocupacion, representante, sistema} = req.body;
  let newFicha = {
      id: uuid(),
      nombre,
      doc,
      numero_doc,
      sexo,
      fecha_nac,
      domicilio,
      telefono,
      correo,
      ocupacion,
      representante,
      sistema
  };
  //se guarda la ficha en en el archivo "ficha.json" en formato JSON
  fichas.push(newFicha);

  const json_fichas = JSON.stringify(fichas) //transformamos los datos en un string
  fs.writeFileSync("routes/ficha.json", json_fichas, "utf-8");//luego se escriben en el archivo JSON

  res.redirect("/");
})

module.exports = router;
