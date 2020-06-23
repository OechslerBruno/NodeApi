const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//req is the resition to the server.
//res is the response for the resition.
module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },

    async show(req, res){
        const produt = await Product.findById(req.params.id);
        return res.json(produt);
    },

    async store(req, res){
        const product = await Product.create(req.body); //req.body gets the requisition data in json format.

        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}); //"{new: true}" returns the object before updated.

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}