
import Link from 'next/link';
import React from 'react';

import Registration from './components/Registration';

const page = () => {
    return (
        <div className="w-full">
            <div className="hero bg-gray-100 min-h-screen dark:from-blue-100 dark:to-gray-900 dark:text-white">
                <div className="hero-content flex-col lg:flex-row-reverse w-full px-6 lg:px-20">
                    <div className="card bg-blue-100  dark:bg-blue-200 dark:text-black w-full lg:w-7xl  xl:w-7xl shadow-2xl rounded-3xl">
                        <div className="card-body px-8 py-10">
                            <p className="text-center dark:text-black text-3xl font-extrabold mb-2 ">
                                জেনারেল একাডেমি
                            </p>
                            <p className="text-center text-lg dark:text-black text-gray-600  mb-6">
                                Welcome back! Please Register to continue.
                            </p>

                            {/* Login Form */}
                            <Registration></Registration>

                            <p className="mt-6 text-center dark:text-black">
                                Already Have an Account?{" "}
                                <Link href="/logIn" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    Click here to Log in
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