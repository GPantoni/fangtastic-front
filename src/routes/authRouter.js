import { Router } from "express";
import { signIn } from "../controllers/authController.js";
import { validateSignInSchema } from "../middleware/validateSignInSchema.js";

const authRouter = Router();
authRouter.post("/sign-in", validateSignInSchema, signIn);
export default authRouter;
