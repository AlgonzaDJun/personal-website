 import mongoose from 'mongoose'

 const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

            // wait for upload more than 10s
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        })
        console.log('MongoDB is connected')
    } catch (error) {
        console.log(error)
    }
 }

 export default connectDB;