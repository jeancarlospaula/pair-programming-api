const express = require('express')
const multer = require('multer')
var cors = require('cors');

const routes = express.Router()
const upload = multer()

const ProductModel = require('../models/product.model');
const res = require('express/lib/response');

routes.use(express.json());
routes.use(cors({
    origin: '*'
}));

routes.get('/',(req,res)=>{
    res.status(200).send('API Pair-Programming Active')
})


routes.post('/products/register/upload/', upload.none(), async (req,res)=>{
    try {
        if(req.query.key !== process.env.PRODUCTS_LIST_RESULT_KEY){
            return res.status(403).send("You haven't permission to access this route")
        }

        const formData = JSON.parse(JSON.stringify(req.body))

        await ProductModel.create({
            product_name: formData.product_name,
            product_author: formData.product_author,
            product_image: formData.product_image,
            product_description: formData.product_description,
            select_category:formData.select_category,
            select_type: formData.select_type,
            product_price: formData.product_price,
            product_quantity: formData.product_quantity,
            product_pages: formData.product_pages,
            create_date: Date.now()
        })

        res.status(201).send('Produto salvo com sucesso.')
    } catch (error) {
        if(error) throw error
        res.status(501).send(console.warn(error.message))
    }
})

routes.get('/products/list/',async (req,res)=>{
    try {
        if(req.query.key !== process.env.PRODUCTS_LIST_RESULT_KEY){
            return res.status(403).send("You haven't permission to access this route")
        }

        let products
        if(req.query.product_id === undefined){
            products = await ProductModel.find({})
            res.status(200).json(products) 
        }else{
            products = await ProductModel.find({"_id": req.query.product_id})
            res.status(200).json(products) 
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = routes