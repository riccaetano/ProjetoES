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
        res.send("loginERROR.html");
      } else {
        res.send("index.html");
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
        res.send("registoERROR.html");
        console.log(result)
      } else {
        collection.insertOne({numIps: num, username: username, password: pass, role: role, palette: palette})
        res.send("index.html");
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
    res.send("recuperarPassERROR.html")
    alert("Passwords não correspondem");
  } else {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    var query= {numIps: numero, username: user};
    var values = {$set: {password: password}};
    collection.updateOne(query, values, function(err,result){
      if(err || !result) {
        res.send("recuperarPassERROR.html");
        console.log(result)
        console.log(err);
      } else {
        res.send("index.html");
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
        res.send("requisitar.html");
        console.log(result)
      } else {
        collection1.insertOne({user: numeroIPS, classRoom: numeroSala, material: material, startDate: dataInicio, endDate: dataFim})
        if(date = dataInicio){
          collection.updateOne(query, values, function(err,result){
            if(err || !result) {
              res.send("registoERROR.html");
              console.log(result)
              console.log(err);
            } else {
              res.send("requisitar.html");
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
        res.send("registoERROR.html");
        console.log(result)
      } else {
        collection1.insertOne({name: nome, local:local, startDate: dataInicio, endDate: dataFim,  employee: num})
        res.send("./index.html");
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
        res.send("registoERROR.html");
        console.log(result)
      } else {
        collection1.insertOne({user: numeroIPS, classRoom: "" , material: numeroMaterial, startDate: dataInicio, endDate: dataFim})
        if(date = dataInicio){
          collection.updateOne(query, values, function(err,result){
            if(err || !result) {
              res.send("registoERROR.html");
              console.log(result)
              console.log(err);
            } else {
              res.send("requisitar.html");
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

//Registar Hora

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/registarEntradaSaida", (req, res, next) => {
  console.log(req.body);
  var numeroIPS = req.body.material;
  var today = new Date;
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "T" + today.getHours() + ":" + today.getMinutes();
 

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    const collection1 = client.db("VorTech").collection("Hours");
    var query= {numIps: numeroIPS};

    collection.findOne(query, function(err,result){
      if(err || !result) {
        res.send("registoERROR.html");
        console.log(result)
      } else {
        //isso assume o status como uma variavel que tu criaste e não que vem das base de dados, alem disso, n tem como ir buscar esses valores a collection User
        if(status= true) { //n existe o status no user, collection = coleção User, collection1 = coleção Hours
          var values = {$set: {status: false}};
        } else {
          var values = {$set: {status: true, overtimeOut: date}};
        }
        if(overtimeIn = null) //n existe o overTimeIn no user, collection = coleção User, collection1 = coleção Hours
        collection1.insertOne({idUser: numeroIPS,status: status, overtimeIn: date, overtimeOut: null})
        else{
          //collection.updateOne(query, overtimeOut= date, function(err,result)
          collection1.updateOne(query, values, function(err,result){
            if(err || !result) {
              res.send("registoERROR.html");
              console.log(result)
              console.log(err);
            } else {
              res.send("registarEntradaSaida.html");
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