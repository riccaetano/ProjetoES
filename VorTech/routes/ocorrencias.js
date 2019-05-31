var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";

// Registar Ocorrências
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/registarOcorrencia", (req, res, next) => {
  console.log(req.body);
  var id = req.body.id;
  var descricao = req.body.descricao;
  var reportadoPor = req.body.reportadoPor
  var dataOcorrido = req.body.dataOcorrido;
  var local = req.body.local;
  var today = new Date;
  var dataRegisto = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes();

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("Incident");
    var query = { incidentId: id }

    collection.findOne(query, function (err, result) {
      if (err || !result) {
        collection.insertOne({ incidentId: id, local: local, incidentDate: dataOcorrido, incidenteCreate: dataRegisto, status: 5, description: descricao, user: reportadoPor })
        res.redirect("ocorrencias.html");
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



// Alterar Ocorrências
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/alterarOcorrencias", (req, res, next) => {
  console.log(req.body);
  var id = req.body.id;
  var descricao = req.body.descricao;
  var reportadoPor = req.body.reportadoPor;
  var local = req.body.local;
  var estado = parseInt(req.body.estadoOcorrencia);
  //   var estadoValor = estado.options[estado.selectedIndex].value;
  console.log(estado);
  var today = new Date;
  var dataRegisto = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes();


  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("Incident");
    var query = { incidentId: id }
    var values = { $set: { local: local, incidenteCreate: dataRegisto, status: estado, description: descricao, user: reportadoPor } }

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
            res.redirect("ocorrencias.html");
            console.log(result)
            client.close();
          }
        })
      }
    })
  })
})
module.exports = router;


// Alterar Estado das Ocorrências
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/alterarEstadoOcorrencias", (req, res, next) => {
  console.log(req.body);
  var id = req.body.id;
  var estado = parseInt(req.body.estadoOcorrencia);

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("Incident");
    var query = { incidentId: id }
    var values = { $set: { status: estado } }

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
            res.redirect("ocorrencias.html");
            console.log(result)
            client.close();
          }
        })
      }
    })
  })
})
module.exports = router;

// Eliminar Ocorrência

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/eliminarOcorrencia", (req, res, next) => {
  console.log(req.body);
  var id = req.body.id;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("Incident");
    var query = { incidentId: id };
    collection.deleteOne(query, function (err, result) {
      if (err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        res.redirect("ocorrencias.html");
        console.log(result)
        client.close();
      }
    })
  });

});
module.exports = router;

// Mostrar Ocorrências
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/getOcorrencias", (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("Incident");
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
