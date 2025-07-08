'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import toast from 'react-hot-toast';


const TotalUserClient = ({ users, totalUsers, totalPages, currentPage, skip }) => {
    const router = useRouter();
    const [loadingId, setLoadingId] = useState(null);

    const handleAdmin = async (id) => {
        console.log("THIS IS THE HANDLE ADMIN ID:", id)

        const res = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ role: "admin" })
        })

        const data = await res.json()
        console.log(data)
        if(data.acknowledged){
            toast.success("Admin Successfully Done")
            router.refresh()
        }


    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                All Registered Users: "{totalUsers}"
            </h1>

            {users.length === 0 ? (
                <p className="text-gray-500">No users found.</p>
            ) : (
                <>
                    <div className="overflow-x-auto rounded shadow-md mb-6">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-blue-100 text-blue-800">
                                <tr>
                                    <th className="text-left py-3 px-4 border-b">#</th>
                                    <th className="text-left py-3 px-4 border-b">Name</th>
                                    <th className="text-left py-3 px-4 border-b">Email</th>
                                    <th className="text-left py-3 px-4 border-b">Role</th>
                                    <th className="text-left py-3 px-4 border-b">Actions</th>
                                    <th className="text-left py-3 px-4 border-b">Delete</th>
                                    <th className="text-left py-3 px-4 border-b">Registered At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id} className="hover:bg-gray-100 transition-colors">
                                        <td className="py-2 px-4 border-b">{skip + index + 1}</td>
                                        <td className="py-2 px-4 border-b">{user.name || 'N/A'}</td>
                                        <td className="py-2 px-4 border-b">{user.email || 'N/A'}</td>
                                        <td className="py-2 px-4 border-b capitalize">{user.role || 'user'}</td>
                                        <td className="py-2 px-4 border-b">
                                            {user.role !== 'admin' ? (
                                                <button
                                                    className="btn btn-sm bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700 transition duration-200"
                                                    onClick={() => handleAdmin(user._id)}
                                                    disabled={loadingId === user._id}
                                                >
                                                    {loadingId === user._id ? 'Updating...' : 'Make Admin'}
                                                </button>
                                            ) : (
                                                <span className="text-green-600 font-semibold">Admin</span>
                                            )}
                                        </td>

                                        <td className="py-2 px-4 border-b">
                                            <button className="btn btn-sm bg-red-500 text-white text-xl">
                                                <MdDelete />
                                            </button>
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '—'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Link
                                key={i}
                                href={`?page=${i + 1}`}
                                className={`px-3 py-1 rounded border ${i + 1 === currentPage
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 hover:bg-blue-100'
                                    }`}
                            >
                                {i + 1}
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default TotalUserClient;
