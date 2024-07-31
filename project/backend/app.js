import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import { config } from "dotenv";

import ErrorMiddleware from "./middlewares/error.js";

config({ path: "./config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Route Imports
import user from "./routes/userRoutes.js";


app.use("/api/v1", user);



app.get("*", (req, res) => {
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
});

// Middleware for Errors
app.use(ErrorMiddleware);

export default app;
