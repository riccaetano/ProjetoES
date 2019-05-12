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
    var query= {numIps: req.body.numeroIPS, password: req.body.psw};
    collection.find(query).toArray((err,result)=>{
      console.log(res);
      console.log(result);
      console.log(err);
      res.send(result)
      
    })
    // perform actions on the collection object
    client.close();
  });
});

module.exports = router;
