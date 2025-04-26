import React, { useState } from "react";
import BookCard from "../../components/BookCard";
import axios from 'axios'
import { useLoaderData} from 'react-router-dom';

export const booksLoader = async ({ request }) => {

    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 1;
    const limit = url.searchParams.get('limit') || 8;

    return axios
        .get(`http://localhost:3000/api/v1/books?page=${page}&limit=${limit}`)
        .then((res) => {
            console.log(res.data);
            return res.data
        })
        .catch((err) => {
            console.error(err);
            throw err;
        });
}

export default function Books() {
 
    const data = useLoaderData()
    const books = data.data.books;

    return (
        <>
            <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}>
                {books.map((book) => (
                    <BookCard
                        key={book._id}
                        author={book.author}
                        title={book.title}
                        rating={book.averageRating}
                    />
                ))}
            </div>
        </>
    )
}