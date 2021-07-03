import { Router } from "express";
const router = Router();
import { signup, signin } from "../handlers/auth";

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
