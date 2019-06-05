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

// Consultar Aulas
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  router.get("/getAulas", (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("Class");
      collection.find({}).toArray((err, result) => {
        if (err) {
          console.log(err);
          res.send(500);
          client.close();
        } else {
          res.send(result);
          client.close();
        }
  
      })
    });
  });
  module.exports = router;

  // Consultar Eventos
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  router.get("/getEventos", (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("Event");
      collection.find({}).toArray((err, result) => {
        if (err) {
          console.log(err);
          res.send(500);
          client.close();
        } else {
          res.send(result);
          client.close();
        }
  
      })
    });
  });
  module.exports = router;

    // Consultar Salas
    router.get('/', function (req, res, next) {
      res.render('index', { title: 'Express' });
    });
    router.get("/getSalas", (req, res, next) => {
      const client = new MongoClient(uri, { useNewUrlParser: true });
      client.connect(err => {
        const collection = client.db("VorTech").collection("ClassRoom");
        collection.find({}).toArray((err, result) => {
          if (err) {
            console.log(err);
            res.send(500);
            client.close();
          } else {
            res.send(result);
            client.close();
          }
    
        })
      });
    });
    module.exports = router;

        // Consultar Materiais
        router.get('/', function (req, res, next) {
          res.render('index', { title: 'Express' });
        });
        router.get("/getMateriais", (req, res, next) => {
          const client = new MongoClient(uri, { useNewUrlParser: true });
          client.connect(err => {
            const collection = client.db("VorTech").collection("Material");
            collection.find({}).toArray((err, result) => {
              if (err) {
                console.log(err);
                res.send(500);
                client.close();
              } else {
                res.send(result);
                client.close();
              }
            })
          });
        });
        module.exports = router;
  
  // Consultar Users
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  router.get("/getUsers", (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("User");
      collection.find({}).toArray((err, result) => {
        if (err) {
          console.log(err);
          res.send(500);
          client.close();
        } else {
          res.send(result);
          client.close();
        }
      })
    });
  });
  module.exports = router;