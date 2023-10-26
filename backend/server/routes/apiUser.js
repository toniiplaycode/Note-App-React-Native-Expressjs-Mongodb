import express from "express";
import { signinUser, signupUser } from "../controllers/userController.js";

const router = express.Router();

const initUserRoutes = (app) => {
    router.post("/signup", signupUser);
    router.post("/signin", signinUser);

    return app.use('/', router)
}

export default initUserRoutes;