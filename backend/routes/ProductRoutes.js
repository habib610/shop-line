import express from 'express'
import { getProducts, getProductsById ,  deleteProduct, createProduct,
    updateProduct, createProductReview,} from '../controllers/productControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const productRouter = express.Router()

productRouter.route('/').get(getProducts).post(protect, admin, createProduct)
productRouter.route('/:id/reviews').post(protect, createProductReview)
productRouter
  .route('/:id')
  .get(getProductsById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
  
export default productRouter;