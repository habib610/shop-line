import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import user from './data/user.js'
import User from './models/userModels.js'
import products from './data/products.js'
import Product from './models/productModels.js';
import Order from './models/orderModels.js';
import connectionDB from './config/db.js'

dotenv.config()

connectionDB()

const importData = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(user)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product =>{
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)
        console.log(`Data Imported!`.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error.message}`.red.underline)
        process.exit(1)
    }
}



const destroyData = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

       
        console.log(`Data Destroyed!`.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error.message}`.red.underline)
        process.exit(1)
    }
}

if (process.argv[2]==='-d'){
    destroyData()
}
else{
    importData()
}