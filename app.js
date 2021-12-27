const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'LudothequeApi';
let db;
const homeRoutes = require('./Routes/homeRoutes');
const app = express();
const router = express.Router();
const port = 8000;

MongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to server");
    db = client.db(dbName);
});

app.use('/', homeRoutes );

app.use(express.json());

app.listen(port, () =>{
    console.log("Server listen on :" + port);
});
