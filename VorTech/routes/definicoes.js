var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";


// Adicionar Salas
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/addSala", (req, res, next) => {
    console.log(req.body);
    var numeroSala = req.body.numeroSala;
    var bloco = req.body.bloco;
    var escola = req.body.escola;
    var estado = 1;
    var andar = parseInt(req.body.andar);
    var material = [];
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("ClassRoom");
      var query = { name: numeroSala, section: bloco,school: escola, floor: andar, status: estado, material: material };
      var queryFilter = { name: numeroSala};
      collection.findOne(queryFilter, function (err, result) {
        if (err || !result) {
          collection.insertOne(query, function (err, result) {
            if (err || !result) {
              res.redirect("registoERROR.html");
              console.log(result)
            } else {
              res.redirect("definições.html");
              console.log(result)
              client.close();
            }
          })
        } else {
          res.redirect("registoERROR.html");
          console.log(result)          
        }
      })
    });
  });
  module.exports = router;
  
  // Alterar Salas
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/updateSala", (req, res, next) => {
    console.log(req.body);
    var numeroSala = req.body.numeroSala;
    var bloco = req.body.bloco;
    var andar = req.body.andar;
    var estado = req.body.estado;
    var material = [];
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("ClassRoom");
      var query = { $set: { section: bloco, floor: andar, status: estado, material: material } };
      var queryFilter = { name: numeroSala };
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
              res.redirect("definições.html");
              console.log(result)
              client.close();
            }
          })
        }
      })
    });
  });
  module.exports = router;
  
  // Adicionar Material à Sala
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/addMaterialSala", (req, res, next) => {
    console.log(req.body);
    var numeroSala = req.body.numeroSala;
    var material = req.body.material;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("ClassRoom");
      var queryFilter = { name: numeroSala };
      collection.findOne(queryFilter, function (err, result) {
        if (err || !result) {
          res.redirect("./registoERROR.html");
          console.log(result)
        } else {
           result.material.push(material)
          var query = { $set: { material: result.material } };
          collection.updateOne(queryFilter, query, function (err, result) {
            if (err || !result) {
              res.redirect("./registoERROR.html");
              console.log(result)
              console.log(err);
            } else {
              res.redirect("./definições.html");
              console.log(result)
              client.close();
            }
          })
        }
      })
    });
  });
  module.exports = router;
  
  
  // Eliminar Sala
  
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  router.post("/deleteSala", (req, res, next) => {
    console.log(req.body);
    var numeroSala = req.body.sala;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("ClassRoom");
      var query = { name: numeroSala };
      collection.findOne(query, function (err, result) {
        if (err || !result) {
          res.redirect("./registoERROR.html");
          console.log(result)
        } else {
          collection.deleteOne(query, function (err, result) {
            if (err || !result) {
              res.redirect("registoERROR.html");
              console.log(result)
            } else {
              res.redirect("definições.html");
              console.log(result)
              client.close();
            }
          })
        }
      })
    })
  });
  module.exports = router;
  
  
  
  
  // Adicionar Materiais
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/addMaterial", (req, res, next) => {
    console.log(req.body);
    var numeroMaterial = req.body.numeroMaterial;
    var nome = req.body.nome;
    var descricao = req.body.descricao;
  
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("Material");
      var query = { materialId: numeroMaterial, name: nome, status: 1, description: descricao };
      var queryFilter = { materialId: numeroMaterial};
      collection.findOne(queryFilter, function (err, result) {
        if (err || !result) {
          collection.insertOne(query, function (err, result) {
            if (err || !result) {
              res.redirect("registoERROR.html");
              console.log(result)
            } else {
              res.redirect("definições.html");
              console.log(result)
              client.close();
            }
          })          
        } else {
          res.redirect("registoERROR.html");
          console.log(result)
        }
      })
      
    });
  });
  module.exports = router;
  
  // Alterar Materiais
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/updateMaterial", (req, res, next) => {
    console.log(req.body);
    var numeroMaterial = req.body.numeroMaterial;
    var nome = req.body.nome;
    var estado = req.body.estado;
    var descricao = req.body.descricao;
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("Material");
      var query = { $set: { name: nome, status: estado, description: descricao } };
      var queryFilter = { materialId: numeroMaterial };
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
  
  //Eliminar Material
  
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/deleteMateriais", (req, res, next) => {
    console.log(req.body);
    var material = req.body.material;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("Material");
      var query = { materialId: material };
      collection.deleteOne(query, function (err, result) {
        if (err || !result) {
          res.redirect("registoERROR.html");
          console.log(result)
        } else {
          res.redirect("definições.html");
          console.log(result)
          client.close();
        }
      })
    });
  
  });
  module.exports = router;
  
  // Adicionar Users
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/addUser", (req, res, next) => {
    console.log(req.body);
    var numeroIPS = req.body.numeroIPS;
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;
    var palette = "default";
    var estado = "false";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("User");
      var query = { numIps: numeroIPS, username: username, password: password, role: role, palette: palette, status: estado };
      collection.insertOne(query, function (err, result) {
        if (err || !result) {
          res.redirect("registoERROR.html");
          console.log(result)
        } else {
          res.redirect("definições.html");
          console.log(result)
          client.close();
        }
      })
    });
  });
  module.exports = router;
  
  // Alterar User
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/updateUser", (req, res, next) => {
    console.log(req.body);
    var numeroIPS = req.body.numeroIPS;
    var username = req.body.username;
    var role = req.body.role;
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("User");
      var query = { $set: { role: role } };
      var queryFilter = { numIps: numeroIPS, username: username };
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
              res.redirect("definições.html");
              console.log(result)
              client.close();
            }
          })
        }
      })
    });
  });
  module.exports = router;
  
  // Eliminar User
  
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.post("/deleteUser", (req, res, next) => {
    console.log(req.body);
    var numeroIPS = parseInt(req.body.numeroIPS);
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("User");
      var query = { numIps: numeroIPS };
      collection.deleteOne(query, function (err, result) {
        if (err || !result) {
          res.redirect("registoERROR.html");
          console.log(result)
        } else {
          res.redirect("definições.html");
          console.log(result)
          client.close();
        }
      })
    });
  
  });
  module.exports = router;