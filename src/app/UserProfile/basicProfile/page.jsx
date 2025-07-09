import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { getServerSession } from 'next-auth';
import React from 'react';

const page = async() => {
    const session = await getServerSession(authOptions)
    const singleData = await dbConnect(collectionNameObj.userCollections).findOne({ email: session.user.email })
    console.log("This is the single data:", singleData)
    return (
        <div>
            <main className="flex-1 p-4 sm:p-6 lg:p-10">
                <div className="bg-white dark:text-black shadow-md rounded-xl p-4 sm:p-6 mb-6">
                    <h1 className="text-xl sm:text-2xl font-semibold mb-1 text-center md:text-left">
                        {session.user.name}
                    </h1>
                    <p className="text-green-600 font-medium text-center md:text-left dark:text-black">✔ Verified</p>
                    <p className="text-sm text-gray-600 text-center md:text-left dark:text-black">Id: {singleData._id}</p>
                </div>

                {/* Info Sections */}
                <section className="bg-white shadow-md rounded-xl p-4 sm:p-6 space-y-6 sm:space-y-8">
                    {/* Basic Info */}
                    <div className='dark:text-black'>
                        <h2 className="text-lg sm:text-xl font-bold mb-3 ">Basic Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div><strong>Name:</strong> {session.user.name}</div>
                            <div><strong>Profession:</strong> {singleData.role ? <p className='text-red-700 flex font-bold'>Admin</p> : "" || "Students"}</div>
                        </div>
                    </div>

                    {/* Educational Info */}
                    <div className='dark:text-black'>
                        <h2 className="text-lg sm:text-xl font-bold mb-3">Educational Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div><strong>Institute:</strong> Dhaka College</div>
                            <div><strong>High School Graduation Year:</strong> 2017–2018</div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className='dark:text-black'>
                        <h2 className="text-lg sm:text-xl font-bold mb-3 ">Contact Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div><strong>Email Address:</strong> {session.user.email}</div>
                            <div><strong>Phone Number:</strong> 01724755219</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default page;