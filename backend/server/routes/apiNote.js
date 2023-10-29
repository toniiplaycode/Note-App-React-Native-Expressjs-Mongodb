import express from "express";
import { createNote, deleteNote, editNote } from "../controllers/noteController.js";

const router = express.Router();

const initNoteRoutes = (app) => {
    router.post("/createNote", createNote);
    router.post("/editNote", editNote);
    router.post("/deleteNote", deleteNote);

    return app.use("/", router);
}

export default initNoteRoutes