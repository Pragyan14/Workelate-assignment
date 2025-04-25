import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Review } from "../models/review.model.js"
import { Book } from "../models/book.model.js"

const createReview = asyncHandler(async (req, res) => {
    const { rating, reviewText } = req.body;

    const bookId = req.params.bookId;
    const userId = req.user._id;

    const book = await Book.findById(bookId);
    if (!book) {
        throw new ApiError(404, "Book not found");
    }

    const review = await Review.create({
        userId,
        bookId,
        rating,
        reviewText
    });

    return res.status(201).json(
        new ApiResponse(200, review, "Review submitted successfully")
    )
})

export { createReview };