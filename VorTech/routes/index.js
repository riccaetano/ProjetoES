var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";

// Login
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login", (req, res, next) => {
  console.log(req.body)
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    var query= {numIps: parseInt(req.body.numeroIPS)};
    // perform actions on the collection object
    collection.findOne(query, function(err,result){
      if(err || !result) {
        res.redirect("loginERROR.html");
      } else {
        res.redirect("index.html");
        client.close();
      }
      
    })
  });
});



module.exports = router;

// Registar User
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/registar", (req, res, next) => {
  console.log(req.body);
  var num = parseInt(req.body.numeroIPS);
  var pass =  req.body.psw;
  var username = req.body.username;
  var role = 3;  
  var palette =  "default";

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    const collection1 = client.db("VorTech").collection("Person");
    var query= {numIps: num};
    collection1.findOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        collection.insertOne({numIps: num, username: username, password: pass, role: role, palette: palette})
        res.redirect("index.html");
        client.close();
      }
      
    })
  });
});

module.exports = router;

// Esquecer Password
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/recuperarPass", (req, res, next) => {
  console.log(req.body);
  var numero = parseInt(req.body.numeroIPS);
  var password =  req.body.psw;
  var repPassword =  req.body.repPsw
  var user = req.body.username;
  
  if(password != repPassword){
    res.redirect("recuperarPassERROR.html")
    alert("Passwords não correspondem");
  } else {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    var query= {numIps: numero, username: user};
    var values = {$set: {password: password}};
    collection.updateOne(query, values, function(err,result){
      if(err || !result) {
        res.redirect("recuperarPassERROR.html");
        console.log(result)
        console.log(err);
      } else {
        res.redirect("index.html");
        console.log(result);
        client.close();
      }
    })
    // client.close();
  });
}
});

module.exports = router;

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
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "T" + today.getHours() + ":" + today.getMinutes();
  console.log(date);
  console.log(dataFim);

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("ClassRoom");
    const collection1 = client.db("VorTech").collection("Request");
    var query= {name: numeroSala};
    var values = {$set: {status: 2}};
    collection.findOne(query, function(err,result){
      if(err || !result) {
        res.redirect("requisitar.html");
        console.log(result)
      } else {
        collection1.insertOne({user: numeroIPS, classRoom: numeroSala, material: material, startDate: dataInicio, endDate: dataFim})
        if(date = dataInicio){
          collection.updateOne(query, values, function(err,result){
            if(err || !result) {
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
    var query= {numIps: num};
    collection.findOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        collection1.insertOne({name: nome, local:local, startDate: dataInicio, endDate: dataFim,  employee: num})
        res.redirect("./index.html");
        client.close();
      }
      
    })
  });
});

module.exports = router;

// Registar Materiais
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
    var query= {materialId: numeroMaterial};
    var values = {$set: {status: 2}};
    collection.findOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        collection1.insertOne({user: numeroIPS, classRoom: "" , material: numeroMaterial, startDate: dataInicio, endDate: dataFim})
        if(date = dataInicio){
          collection.updateOne(query, values, function(err,result){
            if(err || !result) {
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

// Adicionar Salas
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/addSala", (req, res, next) => {
  console.log(req.body);
  var numeroSala = req.body.numeroSala;
  var bloco = req.body.bloco;
  var estado = 1;
  var andar = parseInt(req.body.andar);
  var material = [];

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("ClassRoom");
    var query= {name: numeroSala, section: bloco, floor: andar, status: estado, material: material};
    collection.insertOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        res.redirect("definições.html");
        console.log(result)
        client.close();
      }}) 
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
    var query= { $set: {section: bloco, floor: andar, status: estado, material: material}};
    var queryFilter= {name: numeroSala};
    collection.findOne(queryFilter, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        collection.updateOne(queryFilter, query, function(err,result){
          if(err || !result) {
            res.redirect("registoERROR.html");
            console.log(result)
            console.log(err);
          } else {
            res.redirect("requisitar.html");
            console.log(result)
            client.close();
          }
        })
      }}) 
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
  // var material = re.body.material;
  var material = [];
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("ClassRoom");
    var query= { $set: {material: material}};
    var queryFilter= {name: numeroSala};
    collection.findOne(queryFilter, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        collection.updateOne(queryFilter, query, function(err,result){
          if(err || !result) {
            res.redirect("registoERROR.html");
            console.log(result)
            console.log(err);
          } else {
            res.redirect("definições.html");
            console.log(result)
            client.close();
          }
        })
      }}) 
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
    var query= {name: numeroSala};
    collection.deleteOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        res.redirect("definições.html");
        console.log(result)
        client.close();
      }}) 
  });

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
  var estado = req.body.estado;
  var descricao = req.body.descricao;
 

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("Material");
    var query= {materialId: numeroMaterial, name: nome, status: estado, description: descricao};
    collection.insertOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        res.redirect("definições.html");
        console.log(result)
        client.close();
      }}) 
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
    var query= { $set: { name: nome, status: estado, description: descricao}};
    var queryFilter= {materialId: numeroMaterial};
    collection.findOne(queryFilter, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        collection.updateOne(queryFilter, query, function(err,result){
          if(err || !result) {
            res.redirect("registoERROR.html");
            console.log(result)
            console.log(err);
          } else {
            res.redirect("requisitar.html");
            console.log(result)
            client.close();
          }
        })
      }}) 
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
    var query= {materialId: material};
    collection.deleteOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        res.redirect("definições.html");
        console.log(result)
        client.close();
      }}) 
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
  var palette= "default";
  var estado = "false";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    var query= {numIps: numeroIPS, username: username, password: password, role: role, palette: palette, status: estado};
    collection.insertOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        res.redirect("definições.html");
        console.log(result)
        client.close();
      }}) 
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
    var query= { $set: { role: role}};
    var queryFilter= {numIps: numeroIPS, username: username};
    collection.findOne(queryFilter, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        collection.updateOne(queryFilter, query, function(err,result){
          if(err || !result) {
            res.redirect("registoERROR.html");
            console.log(result)
            console.log(err);
          } else {
            res.redirect("definições.html");
            console.log(result)
            client.close();
          }
        })
      }}) 
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
    var query= {numIps: numeroIPS};
    collection.deleteOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        res.redirect("definições.html");
        console.log(result)
        client.close();
      }}) 
  });

});
module.exports = router;

// Alterar Password
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/alterarPassword", (req, res, next) => {
  console.log(req.body);
  var numeroIPS = parseInt(req.body.numeroIPS);
  var username = req.body.username;
  var passwordAntiga = req.body.passAntiga;
  var passwordNova = req.body.passNova;
  var passwordNovaRep = req.body.passNovaRepetir;

  if(passwordNova != passwordNovaRep){
    alert("Passwords não correspondem");
  }else{

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    var query= { $set: { password: passwordNova}};
    var queryFilter= {numIps: numeroIPS, username: username, password:passwordAntiga};
    var queryFilter1= {numIps: numeroIPS, username: username};
    collection.findOne(queryFilter, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        collection.updateOne(queryFilter1, query, function(err,result){
          if(err || !result) {
            res.redirect("registoERROR.html");
            console.log(result)
            console.log(err);
          } else {
            res.redirect("definições.html");
            console.log(result)
            client.close();
          }
        })
      }}) 
  });
}
});
module.exports = router;