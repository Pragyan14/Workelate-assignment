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

const getReview = asyncHandler(async(req,res) => {
    const bookId = req.params.bookId;

    if(!bookId){
        throw ApiError(400,'Book id required')
    }

    const review = await Review.find({bookId: bookId})

    if(!review){
        throw ApiError(400,'Error in getting review')
    }

    return res.status(201).json(
        new ApiResponse(200, review, "Reviews are here")
    )
})

export { createReview,getReview };