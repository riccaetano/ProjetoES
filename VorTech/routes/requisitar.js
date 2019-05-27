var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";


// Requisitar Sala
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/requisitarSala", (req, res, next) => {
    console.log(req.body);
    var numeroSala = req.body.numeroSala;
    var numeroIPS = parseInt(req.body.numeroIPS);
    var material = "";
    var dataInicio = req.body.dataInicio;
    var dataFim = req.body.dataFim;
    var today = new Date;
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes();
    console.log(date);
    console.log(dataFim);
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("ClassRoom");
      const collection1 = client.db("VorTech").collection("Request");
      var query = { name: numeroSala };
      var values = { $set: { status: 2 } };
      collection.findOne(query, function (err, result) {
        if (err || !result) {
          res.redirect("requisitar.html");
          console.log(result)
        } else {
          collection1.insertOne({ user: numeroIPS, classRoom: numeroSala, material: material, startDate: dataInicio, endDate: dataFim })
          if (date = dataInicio) {
            collection.updateOne(query, values, function (err, result) {
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
        }
  
      })
    });
  });
  module.exports = router;

  // Requisitar Materiais
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/requisitarMaterial", (req, res, next) => {
    console.log(req.body);
    var numeroMaterial = req.body.material;
    var numeroIPS = parseInt(req.body.numeroIPS);
    var dataInicio = req.body.dataInicio;
    var dataFim = req.body.dataFim;
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("Material");
      const collection1 = client.db("VorTech").collection("Request");
      var query = { materialId: numeroMaterial };
      var values = { $set: { status: 2 } };
      collection.findOne(query, function (err, result) {
        if (err || !result) {
          res.redirect("registoERROR.html");
          console.log(result)
        } else {
          collection1.insertOne({ user: numeroIPS, classRoom: "", material: numeroMaterial, startDate: dataInicio, endDate: dataFim })
          if (date = dataInicio) {
            collection.updateOne(query, values, function (err, result) {
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
        }
  
      })
    });
  });
  module.exports = router;