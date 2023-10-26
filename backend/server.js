import express from "express";
import dotenv from "dotenv";
import connectDB from "./server/config/db.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

connectDB();

app.listen(PORT, () => {
    console.log("server is running port 8081");
});

