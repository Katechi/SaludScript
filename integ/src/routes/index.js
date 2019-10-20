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

router.get("/new_entry", (req, res) =>{
    res.render("new_entry");
})

router.post("/new_entry", (req, res) => {
    const {title, author, image, description} = req.body;
    if(!title || !author || !image || !description) {
        res.status(400).send("empty shit");
        return;
    }

    let newFicha = {
        id: uuid(),
        title,
        author,
        image,
        description
    };

    fichas.push(newFicha);

    const json_fichas = JSON.stringify(fichas)
    fs.writeFileSync("src/ficha.json", json_fichas, "utf-8");

    res.redirect("/");
})

router.get("/delete/:id", (req, res) => {
    fichas = fichas.filter(ficha => ficha.id != req.params.id);
    const json_fichas = JSON.stringify(fichas)
    fs.writeFileSync("src/ficha.json", json_fichas, "utf-8");
    res.redirect("/");
});

module.exports = router;