import bcrypt from "bcryptjs"

import User from "./models/User.js"
import connectToDatabase from "./db/db.js"

const userRegister = async () => {
    await connectToDatabase()
    try {
        const hashPassword = await bcrypt.hash("admin", 10);

        const user = {
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin",
        }

        const adminExist = await User.findOne({ email: user.email, role: "admin" });

        if (adminExist) {
            console.log("This admin already exist!!! Good bye.");
            process.exit(0);
        }

        const newUser = new User(user);
        await newUser.save();

        
        console.log("Admin user has been added successfully !");
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Program is exiting !");
        process.exit(1);
    }
}

userRegister();