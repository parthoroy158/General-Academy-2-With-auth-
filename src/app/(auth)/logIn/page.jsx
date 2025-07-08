

import Link from 'next/link';

import React from 'react';
import LogInUser from './components/LogInuser';



const page = () => {


    return (
        <div className="w-full">
            <div className="hero bg-gray-100 min-h-screen dark:from-blue-100 dark:to-gray-900 dark:text-white">
                <div className="hero-content flex-col lg:flex-row-reverse w-full px-6 lg:px-20">
                    <div className="card bg-blue-100  dark:bg-blue-200 dark:text-black w-full lg:w-7xl  xl:w-7xl shadow-2xl rounded-3xl">
                        <div className="card-body px-8 py-16">
                            
                            <p className="text-center text-lg dark:text-black text-gray-600  mb-6">
                                Welcome back! Please log in to continue.
                            </p>

                            {/* Login Form */}
                            <LogInUser />

                            <p className="mt-6 text-center dark:text-white">
                                New here?{" "}
                                <Link href="/signUp" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    Click here to register
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default page;