 import mongoose from 'mongoose'

 const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_LOCAL)
        console.log('MongoDB is connected')
    } catch (error) {
        console.log(error)
    }
 }

 export default connectDB;