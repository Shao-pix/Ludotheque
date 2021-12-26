const express = require('express');
const homeRoutes = require('./Routes/homeRoutes');
const app = express();
const router = express.Router();
const port = 8000;

app.use('/', homeRoutes );

app.listen(port, () =>{
    console.log("Server listen on :" + port);
});