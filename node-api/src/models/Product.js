const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

ProductSchema.plugin(mongoosePaginate);

//Registering the model.
mongoose.model('Product', ProductSchema);