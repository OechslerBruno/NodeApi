const express = require('express');
const mongoose = require('mongoose');

//Stating the app
const app = express();

//Starting the DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//Every time when user acces the root route
//req is the resition to the server.
//res is the response for the resition.
app.get('/', (req, res) => {
    res.send('Hello Bruno Oechsler!');
}); 

app.listen(3001); //Tell the app to listen the port 3001