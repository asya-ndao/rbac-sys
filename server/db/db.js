import mongoose from "mongoose";



const connectToDatabase = async () => {

    const mongoURI = process.env.MONGODB_URI;
    console.log("Mongo db uri: ", mongoURI);

    try {
        await mongoose.connect(mongoURI);
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;