const mongoose = require('mongoose');

//Specifying wich properties will be recorded in the DB
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    url:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

//Registering the model.
mongoose.model('Product', ProductSchema);