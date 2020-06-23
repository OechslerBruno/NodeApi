const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Stating the app
const app = express();
app.use(express.json()); //To allow sending data in json format.

//Starting the DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
//require('./src/models/Product'); //Import the Product model
requireDir('./src/models'); //Import all models at once.


/* ROUTES */
//.use is a white card; it will accept every method (get, post, put, delete).
//app.use('[prefix]', [routes' directory]);
app.use('/api', require('./src/routes'));

app.listen(3001); //Tell the app to listen the port 3001