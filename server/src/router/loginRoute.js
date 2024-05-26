import express from "express";
import { loginContoller } from "../controller/loginController.js";

const router = express.Router();

router.route("/login").post(loginContoller);

export default router;
