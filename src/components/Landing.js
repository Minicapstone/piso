import React, { useState } from "react";

function Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">LOGO</h1>

                    {/* Hamburger Menu Button (Visible on smaller screens) */}
                    <button
                        className="block lg:hidden text-gray focus:outline-none hover:bg-darkblue hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex space-x-6">
                        <a href="#" className="text-gray-800 font-medium hover:text-blue hover:underline">
                            Home
                        </a>
                        <a href="#" className="text-gray-800 font-medium hover:text-blue hover:underline">
                            About us
                        </a>
                        <a href="#" className="text-gray-800 font-medium hover:text-blue hover:underline">
                            Job Listing
                        </a>
                        <a href="#" className="text-gray-800 font-medium hover:text-blue hover:underline">
                            Contact us
                        </a>
                    </nav>

                    {/* Login Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-gray-800 font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5.121 17.804A3 3 0 016 17h12a3 3 0 013 3v1H3v-1a3 3 0 012.121-2.196zM12 12a4 4 0 100-8 4 4 0 000 8z"
                                />
                            </svg>
                            <span>Login</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white shadow-md">
                        <nav className="px-6 py-4 space-y-2 text-center">
                            <a
                                href="#"
                                className="block text-gray-800 font-medium hover:bg-darkblue hover:text-white"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="block text-gray-800 font-medium hover:text-blue-600 hover:bg-darkblue hover:text-white"
                            >
                                About us
                            </a>
                            <a
                                href="#"
                                className="block text-gray-800 font-medium hover:text-blue-600 hover:bg-darkblue hover:text-white"
                            >
                                Job Listing
                            </a>
                            <a
                                href="#"
                                className="block text-gray-800 font-medium hover:text-blue-600 hover:bg-darkblue hover:text-white"
                            >
                                Contact us
                            </a>
                            <button className=" item-center w-full  text-gray-800 font-medium flex justify-center space-x-2 hover:bg-darkblue hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5.121 17.804A3 3 0 016 17h12a3 3 0 013 3v1H3v-1a3 3 0 012.121-2.196zM12 12a4 4 0 100-8 4 4 0 000 8z"
                                    />
                                </svg>
                                <span>Login</span>
                            </button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <main className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-6xl font-bold text-orange mb-4 pt-16">
                    Ready to Take the Next Step?
                </h1>
                <p className="text-xl text-darkblue mb-6">
                    Your dream job is waiting for you - let’s make it happen!
                </p>
                <button className="bg-blue text-white text-xl px-6 py-2 rounded-md shadow hover:bg-darkblue">
                    Log in →
                </button>

                {/* Images Section */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-36">
                    <div>
                        <img
                            src="../assets/login-main.jpg"
                            alt="Mega Job Fair 1"
                            className="rounded-lg shadow-md image-container"
                        />
                    </div>
                    <div>
                        <img
                            src="../assets/login-main.jpg"
                            alt="Mega Job Fair 2"
                            className="rounded-lg shadow-md image-container"
                        />
                    </div>
                    <div>
                        <img
                            src="../assets/login-main.jpg"
                            alt="Mega Job Fair 3"
                            className="rounded-lg shadow-md image-container"
                        />
                    </div>
                    <div>
                        <img
                            src="../assets/login-main.jpg"
                            alt="Mega Job Fair 4"
                            className="rounded-lg shadow-md image-container"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Landing;
