var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";


// Mostrar Artigos
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
    router.get("/getArtigos", (req, res, next) => {

    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("ItemLost");
      collection.find({}).toArray((err, result) => {
        if(err){
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

  

