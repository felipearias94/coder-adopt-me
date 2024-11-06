import express from "express";
import cookieParser from "cookie-parser";

import router from "./routes/index.js";

import swaggerUiExpress from "swagger-ui-express";
import { specs } from "./utils/config/swagger.config.js";
import { errorHandle } from "./errors/errorHandler.js";
import { connectDB } from "./utils/config/dbconnection.js";

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use("/api", router);

// Middleware de manejo de errores
app.use(errorHandle);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
