"use client"
import React from 'react';
import { signIn } from "next-auth/react";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';




const LogInUser = () => {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value;
        console.log({ email, password })

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        console.log(result)

        if (result.error) {
            console.error("This is the result Login failed:", result.error);
            toast.error('Log in failed Check Email and Password')
            // alert("Login failed: " + result.error); // or use toast
        } else {
            console.log("This is the result :Login success", result);
            toast.success('successfully log in')
            router.push('/')
            // redirect or show success
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto mt-10 p-10 bg-blue-100 dark:text-black text-white rounded-3xl shadow-2xl"
            >
                <h2 className="text-3xl font-bold text-center mb-8 dark:text-black text-black">Welcome Back 👋</h2>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm dark:text-black text-black font-semibold mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm dark:text-black text-black font-semibold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Enter your password"
                        className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex justify-between items-center mb-6 text-sm">
                    <span className="text-gray-400">Don't have an account?</span>
                    <a href="#" className="text-blue-400 hover:underline">Register</a>
                </div>

                <div className="mb-6 text-right">
                    <a href="#" className="text-sm text-blue-400 hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-200"
                >
                    Log in
                </button>
            </form>


        </div>
    );
};

export default LogInUser;