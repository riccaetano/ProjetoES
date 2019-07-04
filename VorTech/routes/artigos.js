var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";

// Registar Artigos
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/registarArtigo", (req, res, next) => {
  console.log(req.body);
  var id = req.body.id;
  var tipo = req.body.artigo;
  var descricao = req.body.descricao;
  var entreguePor = req.body.entreguePor;
  var local = req.body.local;
  var phone = req.body.phone;
  var today = new Date;
  var dataEntrega = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes();

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("ItemLost");
    var query = { idItem: id }

    collection.findOne(query, function (err, result) {
      if (err || !result) {
        collection.insertOne({ idItem: id, type: tipo, person: entreguePor, local: local, dueDate: dataEntrega, deleveryDate: "", phone: phone, owner: "", status: 9, description: descricao })
        res.redirect("./artigosperdidos.html");
        client.close();
      } else {
        res.redirect("registoERROR.html");
        console.log(result)
        client.close();
      }

    })
  });
});

module.exports = router;



// Levantar Artigos
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/levantarArtigo", (req, res, next) => {
  console.log(req.body);
  var id = req.body.id;
  var tipo = req.body.artigo;
  var levantadoPor = req.body.levantadoPor;
  // var phone = req.body.phone;
  var today = new Date;
  var dataLevantamento = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes();
  console.log(dataLevantamento);
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("ItemLost");
    var query = { idItem: id, type: tipo }
    var values = { $set: { deleveryDate: dataLevantamento, owner: levantadoPor, status: 10 } }

    collection.findOne(query, function (err, result) {
      if (err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
        client.close();
      } else {
        collection.updateOne(query, values, function (err, result) {
          if (err || !result) {
            res.redirect("registoERROR.html");
            console.log(result)
            console.log(err);
          } else {
            res.redirect("artigosperdidos.html");
            console.log(result)
            client.close();
          }
        })
      }
    })
  })
})
module.exports = router;

// Eliminar Artigo

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/eliminarArtigo", (req, res, next) => {
  console.log(req.body);
  var artigo = req.body.artigo;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("ItemLost");
    var query = { idItem: artigo };
    collection.findOne(query, function (err, result) {
      if (err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
        client.close();
      } else {
        collection.deleteOne(query, function (err, result) {
          if (err || !result || result == "null") {
            res.redirect("registoERROR.html");
            console.log(result)
          } else {
            res.redirect("artigosperdidos.html");
            console.log(result)
            client.close();
          }
        })
      }
      })
    })
});
module.exports = router;


// Mostrar Artigos
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/getArtigos", (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("ItemLost");
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



