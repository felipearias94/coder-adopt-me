import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (mongoURI) {
      mongoose.connect(mongoURI);
      console.log("Mongo DB connected");
    } else {
      console.log("Error: MONGO_URI is not defined");
    }
  } catch (error) {
    console.log(error);
  }
};
