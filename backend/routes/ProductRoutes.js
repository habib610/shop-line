import express from 'express'
import { getProducts, getProductsById ,  deleteProduct, createProduct,
    updateProduct,} from '../controllers/productControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const productRouter = express.Router()

productRouter.route('/').get(getProducts).post(protect, admin, createProduct)
productRouter
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default productRouter;