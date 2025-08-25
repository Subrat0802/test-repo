import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DATABASE_URL as any);

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

export const user = mongoose.model("User", userSchema);
