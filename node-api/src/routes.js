 const express = require('express');
 const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);

//Exporting the route to be visible to the server.
module.exports = routes;