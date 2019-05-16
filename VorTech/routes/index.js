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
      }
      
    })

    client.close();
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
      }
      
    })
    // client.close();
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
        console.log(result)
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
            }
          })
        }
        }     
      
    })
    //client.close();
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
      }
      
    })
    // client.close();
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
            }
          })
        }
        }     
      
    })
    //client.close();
  });
});
module.exports = router;



//Requisitar Material
// router.get('/', function (req, res, next) {
//   res.render('requisitar', { title: 'Express' });
// });

// router.post("/registarMaterial", (req, res, next) => {
//   console.log(req.body);
//   var numeroMaterial = req.body.material;
//   var numeroIPS = parseInt(req.body.numeroIPS);
//   var dataInicio = req.body.dataInicio;
//   var dataFim = req.body.dataFim;
//   var today = new Date;
//   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "T" + today.getHours() + ":" + today.getMinutes();
//   console.log(date);
//   console.log(dataFim);

//   const client = new MongoClient(uri, { useNewUrlParser: true });
//   client.connect(err => {
//     const collection = client.db("VorTech").collection("Material");
//     const collection1 = client.db("VorTech").collection("Request");
//     var query= {materialId: numeroSala};
//     var values = {$set: {status: 2}};
//     collection.findOne(query, function(err,result){
//       if(err || !result) {
//         res.redirect("requisitar");
//         // requisitarMateriais();
//         console.log(result)
//       } else {
//         collection1.insertOne({user: numeroIPS, classRoom: "", material: numeroMaterial, startDate: dataInicio, endDate: dataFim})
//         if(date = dataInicio){
//           collection.updateOne(query, values, function(err,result){
//             if(err || !result) {
//               res.redirect("requisitar");
//               // requisitarMateriais();
//               console.log(result)
//               console.log(err);
//             } else {
//               res.redirect("requisitar");
//               // requisitarMateriais();
//               console.log(result)
//             }
//           })
//         }
//         }     
      
//     })
//     //client.close();
//   });
// });
// module.exports = router;

// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post("/registarEvento", (req, res, next) => {
//   console.log(req.body);
//   var nome = req.body.nome;
//   var numeroIPS = req.body.numeroIPS;
//   var local = req.body.local;
//   var dataInicio = req.body.dataInicio;
//   var dataFim = req.body.dataFim;

//   const client = new MongoClient(uri, { useNewUrlParser: true });
//   client.connect(err => {
//     const collection = client.db("VorTech").collection("User");
//     const collection1 = client.db("VorTech").collection("Event");
//     var query= {numIps: num};
//     collection.findOne(query, function(err,result){
//       if(err || !result) {
//         res.redirect("registoERROR.html");
//         console.log(result)
//       } else {
//         collection1.insertOne({name: nome,local: local, startDate: dataInicio, endDate: dataFim, employee: numeroIPS})
//         res.redirect("requisitar.html");
//       }
      
//     })
//     // client.close();
//   });
// });
