import mongoose from "mongoose";

export let isDBConnected = false;

const connectDB = async () =>{
    try {
        mongoose.set('bufferCommands', false);
        mongoose.connection.on('connected', () => {
            console.log("✅ Database Connected");
            isDBConnected = true;
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 10000
        });
        isDBConnected = true;
    } catch (error) {
        console.warn("⚠️ Database Connection Error:", error.message);
        console.log("📌 Using mock data for development...");
    }
}

export default connectDB;