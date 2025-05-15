import mongoose from "mongoose";

const connectToDatabase = async () => {

    const mongoURI = process.env.MONGODB_UR ?? "mongodb://localhost:27017/rbac-sys";

    console.log("Mongo uri: ", mongoURI);

    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)   
    }
}

export default connectToDatabase;