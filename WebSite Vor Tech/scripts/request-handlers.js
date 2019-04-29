"use strict";
const mongoCliente = require("mongodb").MongoClient;
const options = require("./options");

// GET

/**
 * User
 * @param {*} req 
 * @param {*} res 
 */
function getUser(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("User").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getUser = getUser;


/**
 * Class
 * @param {*} req 
 * @param {*} res 
 */
function getClass(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("Class").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getClass = getClass;


/**
 * ClassRoom
 * @param {*} req 
 * @param {*} res 
 */
function getClassRoom(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("ClassRoom").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getClassRoom = getClassRoom;


/**
 * Employee
 * @param {*} req 
 * @param {*} res 
 */
function getEmployee(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("Employee").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getEmployee = getEmployee;

/**
 * Event
 * @param {*} req 
 * @param {*} res 
 */
function getEvent(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("Event").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getEvent = getEvent;

/**
 * Incident
 * @param {*} req 
 * @param {*} res 
 */
function getIncident(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("Incident").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getIncident = getIncident;


/**
 * Item Lost
 * @param {*} req 
 * @param {*} res 
 */
function getItemLost(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("ItemLost").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getItemLost = getItemLost;


/**
 * Material
 * @param {*} req 
 * @param {*} res 
 */
function getMaterial(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("Material").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getMaterial = getMaterial;

/**
 * Request
 * @param {*} req 
 * @param {*} res 
 */
function getRequest(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("Request").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getRequest = getRequest;

/**
 * Student
 * @param {*} req 
 * @param {*} res 
 */
function getStudent(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("Student").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getStudent = getStudent;

/**
 * Student Class
 * @param {*} req 
 * @param {*} res 
 */
function getStudentClass(req, res) {
    const db = new mongoCliente.Database(options.databasePath);
    
    dbo.collection("StudentClass").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

}
module.exports.getStudentClass = getStudentClass;

// EDIT

/**
 *  User
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdateUser(req, res) {
    const dbo = new mongoCliente.Database(options.databasePath);
    var userName = req.body.nome;
    var password = req.body.password;
    var numeroIPS = req.body.numeroIPS
    var role = req.body.role;
    var mongo;

    if (req.method === "POST") {
        var mongo = { UserName: userName, Password: password, NumeroIPS: numeroIPS, Role: role };
        dbo.collection("User").insertOne(mongo, function(err, res) {
            if(err) {
                res.status(500);
                res.json({ "Message": "Erro" });
            }
        });
    } else if (req.method === "PUT") {
        var myquery = { NumeroIPS: req.params.NumeroIPS };
        var newvalues = { $set: {UserName: userName, Password: password, Role: role} };
        dbo.collection("User").updateOne(myquery, newvalues, function(err, res) {
            if(err) {
                res.status(500);
                res.json({ "Message": "Erro" });
            } else {
                res.json({ "Message": "ok" });
            }});
    }
}
module.exports.createUpdateUser = createUpdateUser;

function removeUser(req, res) {
    const dbo = new mongoCliente.Database(options.databasePath);
    var myquery = { NumeroIPS: req.params.numeroIPS };
    dbo.collection("User").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
});

  

}
module.exports.removeUser = removeUser;


/**
 *  Class
 * 
 * @param {Object} request pedido do cliente
 * @param {Object} response resposta do servidor
 */
function createUpdateClass(req, res) {
    const dbo = new mongoCliente.Database(options.databasePath);
    var userName = req.body.nome;
    var password = req.body.password;
    var numeroIPS = req.body.numeroIPS
    var role = req.body.role;
    var mongo;

    if (req.method === "POST") {
        var mongo = { UserName: userName, Password: password, NumeroIPS: numeroIPS, Role: role };
        dbo.collection("User").insertOne(mongo, function(err, res) {
            if(err) {
                res.status(500);
                res.json({ "Message": "Erro" });
            }
        });
    } else if (req.method === "PUT") {
        var myquery = { NumeroIPS: req.params.NumeroIPS };
        var newvalues = { $set: {UserName: userName, Password: password, Role: role} };
        dbo.collection("User").updateOne(myquery, newvalues, function(err, res) {
            if(err) {
                res.status(500);
                res.json({ "Message": "Erro" });
            } else {
                res.json({ "Message": "ok" });
            }});
    }
}
module.exports.createUpdateClass = createUpdateClass;

function removeUser(req, res) {
    const dbo = new mongoCliente.Database(options.databasePath);
    var myquery = { NumeroIPS: req.params.numeroIPS };
    dbo.collection("User").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
});

  

}
module.exports.removeUser = removeUser;