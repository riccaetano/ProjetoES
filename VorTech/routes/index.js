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
  console.log(req.body)
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("VorTech").collection("User");
    const collection1 = client.db("VorTech").collection("Person");
    var query= {numIps: parseInt(req.body.numeroIPS)};
    collection1.findOne(query, function(err,result){
      if(err || !result) {
        res.redirect("registoERROR.html");
        console.log(result)
        console.log(req)
      } else {
        // var role = result[3];
        console.log(result)
        console.log(req)
        role = 3; 
        // console.log(role)
        collection.insertOne({numIps: parseInt(req.body.numeroIps), username: req.body.username, password: req.body.psw, role: role,palette: "default" })
        res.redirect("index.html");
      }
      
    })

    // perform actions on the collection object
    // client.close();
  });
});

module.exports = router;