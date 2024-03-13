import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mongodbgraphql")
        console.log(">>> Database connected successfully");
    } catch {
        console.log(">>> Error connecting to database");
    }
}