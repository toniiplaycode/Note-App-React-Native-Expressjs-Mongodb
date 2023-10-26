import express from "express";
import { createNote } from "../controllers/noteController.js";

const router = express.Router();

const initNoteRoutes = (app) => {
    router.post("/createNote", createNote);

    return app.use("/", router);
}

export default initNoteRoutes