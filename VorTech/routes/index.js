var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";

var bcrypt = require('bcrypt');
const saltRounds = 10;

// Login
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login", (req, res, next) => {
  console.log(req.body)
  var num = parseInt(req.body.numeroIPS);
  var pass =  req.body.psw;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    var query= {numIps: num};
    // perform actions on the collection object
    collection.findOne(query, function(err,results){
      if(err || !results) {
        res.redirect("loginError.html");
        console.log(results)
      } else {
            const hash = results.password;
            bcrypt.compare(pass, hash, function(err,result) {
              if(err || !result) {
                res.redirect("loginError.html");
                console.log(results + "bcrypt")
              } else {
                res.redirect("Index.html");
                console.log(results)
              }
            });
            
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
  var pass = req.body.psw;
  var username = req.body.username;
  var role = 3;
  var palette = "default";

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    const collection1 = client.db("VorTech").collection("Person");
    var query = { numIps: num };
    collection1.findOne(query, function (err, result) {
      if (err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
      } else {
        bcrypt.hash(pass, saltRounds, function(err,hash) {
        collection.insertOne({numIps: num, username: username, password: hash, role: role, palette: palette})
        res.redirect("index.html");
      });
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
  var password = req.body.psw;
  var repPassword = req.body.repPsw
  var user = req.body.username;

  if (password != repPassword) {
    res.redirect("recuperarPassERROR.html")
    alert("Passwords não correspondem");
  } else {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("User");
      var query = { numIps: numero, username: user };
      bcrypt.hash(password, saltRounds, function(err,hash) {
      var values = { $set: { password: hash } };
      collection.updateOne(query, values, function (err, result) {
        if (err || !result) {
          res.redirect("recuperarPassERROR.html");
          console.log(result)
          console.log(err);
        } else {
          res.redirect("index.html");
          console.log(result);
          client.close();
        }
      });
      })
      // client.close();
    });
  }
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

  if (passwordNova != passwordNovaRep) {
    alert("Passwords não correspondem");
  } else {

    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("User");
      bcrypt.hash(passwordNova, saltRounds, function(err,hash) {
      var query = { $set: { password: hash } };
      var queryFilter = { numIps: numeroIPS, username: username };
      var queryFilter1 = { numIps: numeroIPS, username: username };
      collection.findOne(queryFilter, function (err, result) {
        if (err || !result) {
          res.redirect("registoERROR.html");
          console.log(result)
        } else {
          collection.updateOne(queryFilter1, query, function (err, result) {
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
  }
});

module.exports = router;
