import { Router } from "express";
import { addBook, getAllBooks,getBookById } from "../controllers/book.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//secured route
router.route("/book").post(verifyJWT, addBook);
router.route("/books").get(getAllBooks);
router.route("/books/:id").get(getBookById);


export default router;