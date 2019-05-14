var http = require("http");
var url = require("url");
const express = require("express");
const requestHandlers = require("./scripts/request-handlers.js");
const bodyParser = require("body-parser");
var querystring = require("querystring");
var path = require("path");
var fs = require("fs");
const app = express();
var options = {
"default": {
"folder": "www",
"document": "index.html",
"port": 8089,
"favicon": ""
},
"extensions": {
"txt": "text/plain; charset=utf-8",
"htm": "text/html; charset=utf-8",
"html": "text/html; charset=utf-8",
"js": "application/javascript; charset=utf-8",
"json": "application/json; charset=utf-8",
"css": "text/css; charset=utf-8",
"gif": "image/gif",
"jpg": "image/jpg",
"png": "image/png",
"ico": "image/x-icon"
}
};
function logOnDev(message) {
if (process.env.NODE_ENV === "development") {
console.log(message);
}
}
function router(request) {
var pathname = querystring.unescape(url.parse(request.url).pathname);
switch (pathname) {
case "/": pathname += options.default.document;
break;
case "/favicon.ico": pathname = options.default.favicon;
break;
default:
break;
}
return pathname
? path.join(__dirname, options.default.folder, pathname)
: null;
}
function mimeType(filename) {

    var extension = path.extname(filename);
    if (extension.charAt(0) === ".") {
    extension = extension.substr(1);
    }
    return options.extensions[extension];
    }
    http.createServer(function (request, response) {
    logOnDev("Request for ${request.url} received.");
    var filename = router(request);
    if (filename) {
    fs.readFile(filename, function (err, data) {
    if (err) {
    logOnDev(err);
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.write("HTTP Status: 404 : NOT FOUND");
    } else {
    response.writeHead(200, { "Content-Type": mimeType(filename) });
    response.write(data);
    }
    response.end();
    });
    }
    }).listen(options.default.port);
    logOnDev("Server running at http://localhost:${options.default.port}/");

    
var MongoClient = require('mongodb').MongoClient;
var mongoLink = 'mongodb+srv://user:user@ips-gwakx.gcp.mongodb.net/test?retryWrites=true'

MongoClient.connect(mongoLink, function(err, db) {
  console.log('Connected');
  db.close();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

//roteamneto
app.get("/teste", requestHandlers.getTeste);
app.get("/user", requestHandlers.getUser);
app.get("/class", requestHandlers.getClass);
app.get("/classroom", requestHandlers.getClassRoom);
app.get("/employee", requestHandlers.getEmployee);
app.get("/event", requestHandlers.getEvent);
app.get("/incident", requestHandlers.getIncident);
app.get("/itemlost", requestHandlers.getItemLost);
app.get("/material", requestHandlers.getMaterial);
app.get("/request", requestHandlers.getRequest);
app.get("/student", requestHandlers.getStudent);
app.get("/studentclass", requestHandlers.getStudentClass);

//adicionar
