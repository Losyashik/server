import { Router } from "express";
import userControler from "../controlers/userControler.js";

const userRouter = Router();

userRouter.get("/", userControler.getAllUsers);

export default userRouter;
