var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";

/* GET home page. */
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

/* GET home page. */
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

/* GET home page. */
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