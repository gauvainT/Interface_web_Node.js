// set variable for app
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
// importation des paramètre de connection
var configDB = require('./configDB');
// création  de l'objet connexion
var connection = mysql.createConnection(configDB);


// connexion
connection.connect();
// recupération des éléments de l'url et du body passé en requête
app.use(bodyParser.urlencoded( { extended: true}));
// parse en json pour l'envoyer au fonction back-end
app.use(bodyParser.json());


var apiRouter = require('./routers/api')(express, connection);
app.use('/api', apiRouter);

module.exports = app;

app.listen(3000, () => {
    console.log("Listening at :3000...");
});