import { Router } from "express";
import { createReview } from "../controllers/review.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//secured route
router.route("/books/:bookId/reviews").post(verifyJWT, createReview);


export default router;