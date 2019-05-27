var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true";


// Mostrar Artigos
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
    router.get("/showMaterial", (req, res, next) => {

    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("VorTech").collection("ItemLost");
      collection.find({}, function (err, result) {
        if (err || !result) {
          res.redirect("registoERROR.html");
          console.log(result)
        } else {
          var table = document.getElementById("showArtigoPerdido");
          table.appendChild(tableLine(result, true));
          for (var i = 0; i < result.length; i++) {
              table.appendChild(tableLine(result[i], false));
            }
        }
      })
    });
  });
  module.exports = router;

  

