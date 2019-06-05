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
    var descricao = req.body.descricao;
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
          collection1.insertOne({ name: nome, local: local, description: descricao, startDate: dataInicio, endDate: dataFim, employee: num })
          res.redirect("./requisitar.html");
          client.close();
        }
  
      })
    });
  });
  
  module.exports = router;

  // Alterar Eventos
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/alterarEvento", (req, res, next) => {
    console.log(req.body);
    var evento = req.body.evento;
    var dataInicio = req.body.dataInicio;
    var dataFim = req.body.dataFim;
    var local = req.body.local;
    var responsavel = req.body.responsavel;

    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("Event");
      var query = { $set: { local: local ,startDate: dataInicio, endDate: dataFim, employee: responsavel} };
      var queryFilter = { name: evento };
      collection.findOne(queryFilter, function (err, result) {
        if (err || !result) {
          res.redirect("registoERROR.html");
          console.log(result)
        } else {
          collection.updateOne(queryFilter, query, function (err, result) {
            if (err || !result) {
              res.redirect("registoERROR.html");
              console.log(result)
              console.log(err);
            } else {
              res.redirect("requisitar.html");
              console.log(result)
              client.close();
            }
          })
        }
      })
    });
  });
  module.exports = router;

// Eliminar Evento

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/eliminarEvento", (req, res, next) => {
  console.log(req.body);
  var evento = req.body.evento;
  var responsavel = req.body.responsavel;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("Event");
    var query = { name: evento, employee: responsavel};
    collection.deleteOne(query, function (err, result) {
      if (err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        res.redirect("consultas.html");
        console.log(result)
        client.close();
      }
    })
  });

});
module.exports = router;