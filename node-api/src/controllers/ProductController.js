const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//req is the resition to the server.
//res is the response for the resition.
module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    }
}