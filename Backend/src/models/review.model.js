import mongoose, { Schema } from "mongoose";

const reviewModel = Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        bookId: {
            type: Schema.Types.ObjectId,
            ref: "Book"
        },
        rating: {
            type: Number,
            default: 0,
        },
        reviewText: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Review = mongoose.model("Review",reviewModel);