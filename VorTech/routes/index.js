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
  console.log(req.body.nIPS)
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    var num = parseInt(req.body.nIPS);
    var pass =  req.body.password;
    const collection = client.db("VorTech").collection("User");
    // perform actions on the collection object
    collection.findOne({'numIps':num},(err, res2) => {
      if(err){
        res.json({"Message":"SystemError"});
        console.log("1");
      }else{
        const hash = res2.password;
        bcrypt.compare(pass, hash, function(err,result) {
          if(err || !result) {
          res.json({"Message": "WrongCombination"});
            console.log(res2.password + "bcrypt")
          } else {
        console.log("2"); 
        console.log(num);
        console.log(pass);       
        if(res2){
          console.log("okok");
          console.log(res2);
          client.connect(err => {
            const collection = client.db("VorTech").collection("Person");
            // perform actions on the collection object
            collection.findOne({'numIps':num},(err, res3) => {
              if(err){
                res.json({"Message":"SystemError2"});
                console.log("1.1");
              }else{
                       
                if(res3){
                  console.log("2.1"); 
                  console.log(res2);
                  console.log(res3);
                  res.status(200).json({
                    "Message": "Success",
                    "numIps": res2.numIps,
                    "cc": res3.cc,
                    "username": res2.username,
                    "role": res3.role,
                    "password":res2.password
                  });
                }else{
                  console.log("3.1");
                  res.json({"Message": "WrongCombination2"});
                }   
              }
            });
          });
        }else{
          console.log("3");
          res.json({"Message": "WrongCombination"});
        }   
      }
    })
      };
    });
  });
});

module.exports = router;

// function login(req, res){
//   console.log(req.body)
//     var num = parseInt(req.body.numeroIPS);
//     var pass =  req.body.psw;
//     const client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//       const collection = client.db("VorTech").collection("User");
//       var query= {numIps: num};
//       // perform actions on the collection object
//       collection.findOne(query, function(err,results){
//         if(err || !results) {
//           console.log("fase1");
//         } else {
//           console.log("fase2");
//         }
//       });
  
//     });
// }
// module.exports.login = login;

// function login(req,res){
//   const collection = client.db("VorTech").collection("User");
//   collection.find({ 'numIPS': req.body.nIPS, 'password': req.body.password}, (err, res2) => {
//   if (err) {
//   res.json({ "Message": "SystemError" });
//   } else {
//   if (res2.length > 0) {
//   res.json({
//   "Message": "Success",
//   "username": res2[0].username,
//   "password": res2[0].password
//   });
//   } else
//   res.json({ "Message": "WrongCombination" });
//   }
//   });
//   }
//   module.exports.login=login; 
   
  

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
      bcrypt.hash(passwordNova, saltRounds, function(err,hashnova) {
      var query = { $set: { password: hashnova } };
      var queryFilter = { numIps: numeroIPS, username: username};
      var queryFilter1 = { numIps: numeroIPS, username: username};
      collection.findOne(queryFilter, function (err, result) {
        if (err || !result) {
          res.redirect("registoERROR.html");
          console.log(result)
        } else {
          const hash = result.password;
          bcrypt.compare(passwordAntiga, hash, function(err,result) {
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
          });
          })
        }
      });
    });
  });
  }
});

module.exports = router;


//getcookie

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}