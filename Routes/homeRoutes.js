const routeur = require('express').Router();

routeur.get('/', function (req, res) {
    res.send({"dd": "ddddd"});
})



module.exports = routeur;