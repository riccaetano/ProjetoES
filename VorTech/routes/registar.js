var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";

// Registar Eventos
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/registarEvento", (req, res, next) => {
    console.log(req.body);
    var nome = req.body.nome;
    var num = parseInt(req.body.numeroIPS);
    var local = req.body.local;
    var dataInicio = req.body.dataInicio;
    var dataFim = req.body.dataFim;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("User");
      const collection1 = client.db("VorTech").collection("Event");
      var query = { numIps: num };
      collection.findOne(query, function (err, result) {
        if (err || !result) {
          res.redirect("registoERROR.html");
          console.log(result)
        } else {
          collection1.insertOne({ name: nome, local: local, startDate: dataInicio, endDate: dataFim, employee: num })
          res.redirect("./index.html");
          client.close();
        }
  
      })
    });
  });
  
  module.exports = router;

  