import express from 'express'
import Product from '../models/productModels.js'
import asyncHandler from 'express-async-handler'
const productRouter = express.Router()

productRouter.get('/', asyncHandler(async(req, res)=> {
    const product =  await Product.find({})
    res.json(product)
}))

productRouter.get('/:id', asyncHandler(async(req, res)=> {
    const product = await Product.findById(req.params.id)
    if(product) {
        res.json(product)
        
    } else {{
        res.status(404)
        throw new Error('Product not found')
    }}
}))

export default productRouter;