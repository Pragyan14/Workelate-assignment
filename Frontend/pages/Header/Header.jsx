import React, { useState } from "react";
import { Link,NavLink } from 'react-router-dom';
import { Book, Menu, User, X } from "lucide-react";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-[#1e2836] text-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <Book className="h-8 w-8 text-purple-400" />
                            <span className="ml-2 text-xl font-bold">BookVerse</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <NavLink to="/"
                            // className="hover:text-purple-300 transition-colors"
                            className={({isActive}) => `${isActive ? "text-purple-300" : ""}`}
                        >
                            Home
                        </NavLink>
                        <NavLink to="/books" className={({isActive}) => `${isActive ? "text-purple-300" : ""}`}>
                            Books
                        </NavLink>
                        <NavLink to="/profile" className={({isActive}) => `${isActive ? "text-purple-300" : ""} flex items-center hover:text-purple-300 transition-colors`}>
                            <User className="h-5 w-5 mr-1" />
                            Profile
                        </NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:text-purple-300 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 border-t border-slate-700">
                    <Link to="/" className="block py-2 hover:text-purple-300">Home</Link>
                    <Link to="/browse" className="block py-2 hover:text-purple-300">Browse</Link>
                    <Link to="/profile" className="flex items-center py-2 hover:text-purple-300">
                        <User className="h-5 w-5 mr-1" /> Profile
                    </Link>
                </div>
            )}
        </nav>
    );
}