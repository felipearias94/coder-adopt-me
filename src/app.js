import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import router from "./routes/index.js";
import { errorHandle } from "./errors/errorHandler.js";
import { connectDB } from "./utils/config/dbconnection.js";

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

// Middleware de manejo de errores
app.use(errorHandle);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
