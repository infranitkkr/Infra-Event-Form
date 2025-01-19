import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const MONGODBURI = process.env.MONGODBURI

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(MONGODBURI, options)
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log(error);
        
        console.log("MONGO DB connection error in db folder");
        process.exit(1)
    }
}

export default connectDB;