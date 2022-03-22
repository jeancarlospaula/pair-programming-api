const express = require('express')
const multer = require('multer')
const uploadImage = require('../services/firebase')
const ProductController = require('../controllers/ProductController')

const routes = express.Router()
const Multer = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})

routes.get('/products/list/', ProductController.getProductList)
routes.post('/products/register/upload/', Multer.single("product_image"), uploadImage, ProductController.insertProduct)

module.exports = routes