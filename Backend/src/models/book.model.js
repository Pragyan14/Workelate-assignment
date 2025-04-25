import { mongoose, Schema } from 'mongoose'

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        averageRating :{
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }

)

export const Book = mongoose.model('Book',bookSchema);