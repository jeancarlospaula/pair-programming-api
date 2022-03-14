const express = require('express')
const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

const app = express()
const port = process.env.PORT || 3000

const ProductModel = require('../src/models/product.model')

var uniqueName
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        uniqueName = crypto.randomBytes(16).toString('hex') + path.extname(file.originalname)
        cb(null, uniqueName)
    }
})

const upload = multer({storage})

app.use(express.json())

app.post('/register/upload', upload.single('product_image'), async (req,res)=>{
    try {
        const formData = JSON.parse(JSON.stringify(req.body))

        await ProductModel.create({
            product_name: formData.product_name,
            product_author: formData.product_author,
            product_image: path.join(__dirname, '..', 'uploads', uniqueName),
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

app.get('/products/list/',async (req,res)=>{
    try {
        if(req.query.key !== process.env.PRODUCTS_LIST_RESULT_KEY){
            return res.status(403).send("You haven't permission to access this route")
        }

        const products = await ProductModel.find({})
        res.status(200).json(products) 
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(port, ()=>{console.log('Server Active | Port: '+port)})