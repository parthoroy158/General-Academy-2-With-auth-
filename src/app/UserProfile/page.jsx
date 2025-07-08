import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';

const page = async () => {
    const session = await getServerSession(authOptions)
    const singleData = await dbConnect(collectionNameObj.userCollections).findOne({ email: session.user.email })
    console.log("This is the single data:", singleData)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow text-center space-y-2">
                <h1 className="text-xl font-bold">{session.user.name}</h1>
                <p className="text-gray-600">{session.user.email}</p>
            </div>
        </div>
    );
};

export default page;