const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    product_author:{
        type: String,
        required: true
    },
    product_image:{
        type: String,
        required: true
    },
    product_description:{
        type: String,
        required: true
    },
    select_category:{
        type: Number,
        required: true
    },
    select_type:{
        type: Number,
        required: true
    },
    product_price:{
        type: Number,
        required: true
    },
    product_quantity:{
        type: Number,
        required: true
    },
    create_date:{
        type: Date,
        required: true
    }
})

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel