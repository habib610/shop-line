import express from 'express'
import path from 'path'
import cors from 'cors'
import colors from 'colors'
import connectionDB from './config/db.js'
import dotenv from 'dotenv'
import productRouter from './routes/ProductRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import userRouter from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
dotenv.config()



const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/orders', orderRoutes)


connectionDB()


app.get('/', (req, res)=> {
    res.send("server is running")
})

app.use('/api/products', productRouter)
app.use('/api/users', userRouter) 
app.use('/api/upload', uploadRoutes) 

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// custom  middleware for error handling 
app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(5000, ()=> {console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline.bold)})