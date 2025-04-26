import React from "react";

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center text-white px-4">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-purple-600">
                        Welcome to BookVerse
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300">
                        Discover, review, and fall in love with your next favorite book.
                    </p>
                </div>
            </div>
        </>
    )
}