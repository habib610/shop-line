import express from 'express'
import Product from '../models/productModels.js'
import asyncHandler from 'express-async-handler'
import { getProducts, getProductsById } from '../controllers/productControllers.js'

const productRouter = express.Router()

productRouter.route('/').get(getProducts)

productRouter.route('/:id').get(getProductsById)

export default productRouter;