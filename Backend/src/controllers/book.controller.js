import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Book } from "../models/book.model.js"
import mongoose from "mongoose"

const getAllBooks = asyncHandler(async (req, res) => {

    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const books = await Book.find().skip(skip).limit(limit);
        const total = await Book.countDocuments();

        return res.status(200).json(
            new ApiResponse(200, {total, page, limit,totalPages: Math.ceil(total / limit), books}, "")
        )


    } catch (error) {
        throw new ApiError(500, "Something went wrong while getting all books(server error)")
    }
})

const getBookById = asyncHandler(async (req, res) => {
    const bookId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        throw new ApiError(404, "No book found")
    }

    const book = await Book.findById(bookId);

    if (!book) {
        throw new ApiError(404, "No book found")
    }

    return res.status(200).json(
        new ApiResponse(200, book, "Got Book id")
    )
})

const addBook = asyncHandler(async (req, res) => {

    const isUserAdmin = req.user.isAdmin;

    if (!isUserAdmin) {
        throw new ApiError(400, "Only Admin can add book")
    }

    const { title, author, description } = req.body;

    const newBook = await Book.create({
        title: title.toUpperCase(),
        author,
        description
    })


    return res.status(201).json(
        new ApiResponse(200, newBook, "new book added successfully")
    )
})

export { addBook, getAllBooks, getBookById };