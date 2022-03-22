const express = require('express')
const cors = require('cors');
const products = require('./productsRoute')

const routes = express.Router()

routes.use(
    express.json(),
    cors({
        origin: '*'
    }),
    products
)

routes.get('/',(req,res)=>{
    res.status(200).send('API Pair-Programming Active')
})

module.exports = routes