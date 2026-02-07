import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/chai")
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1); // Exit process with failure
    }
}
export default connectDb;