import { Router } from "express";
import UsersController from "../controllers/UsersController.js";

const router = Router();

router.post('/auth/signup', UsersController.register);

export default router;