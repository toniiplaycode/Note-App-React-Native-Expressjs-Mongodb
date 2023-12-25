import express from "express";
import dotenv from "dotenv";
import connectDB from "./server/config/db.js";
import initUserRoutes from "./server/routes/apiUser.js";
import initNoteRoutes from "./server/routes/apiNote.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

connectDB();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

initUserRoutes(app);
initNoteRoutes(app);

app.listen(PORT, () => {
    console.log("server is running port 8085");
});

