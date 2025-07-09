"use client"

import registerUser from '@/app/actions/auth/registerUser';
import { signIn } from 'next-auth/react';
import React from 'react';
import toast from 'react-hot-toast';

const Registration = () => {
    const handleSubmit = async (e) => {


        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, name, password)

        const response = await registerUser({ name, email, password });
        console.log("This is the response",response.createdAt)
        
        if (response.success) {
            toast.success('Registration Successfully Done');
            form.reset()
            const loginResult = await signIn("credentials", {
                redirect: true,
                email,
                password,
                callbackUrl: ("/"),
            });


            if (loginResult?.error) {
                setError("Auto login failed");
            }
        } else {
            toast.error(response.message || 'Registration Failed');
        }

        console.log(response);
    }


    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto mt-10 p-10 bg-blue-100 dark:text-black text-white rounded-3xl shadow-2xl"
            >
                <h2 className="text-3xl font-bold dark:text-black text-black text-center mb-8">Welcome Back 👋</h2>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-semibold dark:text-black text-black mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="name"
                        required
                        placeholder="Name"
                        className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-semibold dark:text-black text-black mb-2">
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
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-200"
                >
                    Register
                </button>
            </form>


        </div>
    );
};

export default Registration;