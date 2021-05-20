import Router from "express";
import { AuthController } from "../controller/authcontroller";

const router = Router();

router.post("/auth/signup",AuthController.signup);

export { router };