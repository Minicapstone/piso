import React from "react";

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
                <div className="flex">
                    {/* Left Side: Login Form */}
                    <div className="w-1/2 p-8">
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            SIGN IN | <span className=" text-darkblue">PESO</span>
                        </h2>
                        <form className="space-y-4">
                            <div className="p-2">
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email:
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full p-2 pl-8"
                                    />
                                </div>
                            </div>
                            <div className="p-2">
                                <label htmlFor="password" className="block text-sm font-medium">
                                    Password:
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        required
                                        className="w-full p-2 pl-8"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center p-2 justify-between">
                                <button type="submit"
                                    className="bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-700"
                                >
                                    SIGN IN
                                </button>
                                <a href="#" className="text-sm text-blue hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                        <p className="mt-4 text-center p-8 text-sm">Don’t have an account yet?{" "}
                            <a href="#" className="text-blue hover:underline">
                                Create an account.
                            </a>
                        </p>
                    </div>

                    {/* Right Side: Image and Text */}
                    <div className="w-1/2 bg-white shadow-lg p-1 relative">
                        <img
                            src="../assets/login-main.jpg"
                            alt="Caloocan City Mayor"
                            className="rounded-md"
                        />
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
