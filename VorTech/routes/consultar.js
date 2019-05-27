var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";


// Consultar
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
    router.get("/showMaterial", (req, res, next) => {

    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {

    });
  });
  module.exports = router;
