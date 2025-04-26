import React from "react";
import { Book} from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="bg-[#1e2836] text-white py-6">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <Book className="h-8 w-8 text-purple-600" />
                            <span className="ml-2 text-xl font-bold">BookVerse</span>
                        </div>

                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-purple-600 transition-colors">About</a>
                            <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
                            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-400">
                        © 2025 BookVerse. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}