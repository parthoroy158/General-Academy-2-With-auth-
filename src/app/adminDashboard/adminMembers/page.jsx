// app/admin/page.tsx (or wherever this route is)
// app/adminDashboard/page.tsx
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import React from 'react';

export const revalidate = 0;

const Page = async () => {
    const db = await dbConnect(collectionNameObj.userCollections);
    const allAdmin = await db.find({ role: 'admin' }).toArray();

    return (
        <div className="pt-0 p-6 dark:text-black">
            <h1 className="text-xl font-semibold text-center text-white bg-blue-600 py-3 px-6 rounded-lg shadow mb-6">
                Total Admins: {allAdmin.length}
            </h1>
            <ul className="space-y-2">
                {allAdmin.map((admin) => (
                    <li key={admin._id} className="bg-gray-100 p-3 rounded shadow">
                        <strong>Name:</strong> {admin.name || 'N/A'}<br />
                        <strong>Email:</strong> {admin.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
