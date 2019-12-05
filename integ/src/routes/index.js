const {Router} = require("express");
const router = Router();
const fs = require("fs");
const uuid = require("uuid/v4");

const json_fichas = fs.readFileSync("src/ficha.json", "utf-8");
let fichas = JSON.parse(json_fichas)

router.get("/", (req, res) =>{
    res.render("index.ejs", {
        fichas
    })
})

router.post("/", (req, res) => {

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

    fichas.push(newFicha);

    const json_fichas = JSON.stringify(fichas)
    fs.writeFileSync("src/ficha.json", json_fichas, "utf-8");

    res.sendStatus(200);
})

router.get("/delete/:id", (req, res) => {
    fichas = fichas.filter(ficha => ficha.id != req.params.id);
    const json_fichas = JSON.stringify(fichas)
    fs.writeFileSync("src/ficha.json", json_fichas, "utf-8");
    res.redirect("/");
});

module.exports = router;