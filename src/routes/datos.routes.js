import { Router } from "express";

const router = Router();

import { db } from "../controllers/db.controller.js";
router.get('/datos', db);

export default router;