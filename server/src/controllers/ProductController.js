const ProductModel = require('../models/product.model')

class PessoaController {
    static async insertProduct(req, res){
        try {
            if(req.query.key !== process.env.PRODUCTS_LIST_RESULT_KEY){
                return res.status(403).send("You haven't permission to access this route")
            }
    
            const formData = JSON.parse(JSON.stringify(req.body))
    
            await ProductModel.create({
                product_name: formData.product_name,
                product_author: formData.product_author,
                product_image: req.file.firebaseUrl,
                product_description: formData.product_description,
                select_category:formData.select_category,
                select_type: formData.select_type,
                product_price: formData.product_price,
                product_quantity: formData.product_quantity,
                product_pages: formData.product_pages,
                create_date: Date.now()
            })
    
            res.status(201).send('Product saved successfully.')
        } catch (error) {
            if(error) throw error
            res.status(501).send(console.warn(error.message))
        }
    }

    static async getProductList(req, res){
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
    }
}

module.exports = PessoaController