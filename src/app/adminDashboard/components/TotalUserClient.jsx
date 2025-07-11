'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


const TotalUserClient = ({ users, totalUsers, totalPages, currentPage, skip }) => {

    const router = useRouter();
    const [loadingId, setLoadingId] = useState(null);

    const handleAdmin = async (id) => {
        const selectedUser = users.find(item => item._id === id);

        const userName = selectedUser?.name || 'This user';
        try {
            const result = await Swal.fire({
                title: 'Promote to Admin?',
                text: `${userName} will be granted admin privileges`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#10B981', // Tailwind green-500
                cancelButtonColor: '#EF4444',  // Tailwind red-500
                confirmButtonText: 'Yes, promote!',
            });

            if (!result.isConfirmed) return;


            const res = await fetch(`https://general-accademy-lilac.vercel.app/api/users/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role: 'admin' }),
            });

            if (!res.ok) {
                throw new Error(`Failed to update user. Status: ${res.status}`);
            }

            const data = await res.json();

            if (data?.acknowledged) {
                await Swal.fire({
                    title: 'Success!',
                    text: ` ${users.name} has been promoted to admin`,
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                });

                toast.success('Admin promotion successful');
                router.refresh?.();
            } else {
                throw new Error('Promotion failed. Response was not acknowledged.');
            }
        } catch (error) {
            console.error('Admin update failed:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong while promoting the user.',
                icon: 'error',
            });
            toast.error('Failed to promote user to admin');
        }

    }

    const handleCourses = async (id, courses) => {


        console.log("THis is the courses:", id, courses)
        const selectedUser = users.find(item => item._id === id);

        const userName = selectedUser?.name || 'This user';
        try {
            const result = await Swal.fire({
                title: `Add this ${courses}?`,
                text: `${userName} will be granted admin privileges`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#10B981', // Tailwind green-500
                cancelButtonColor: '#EF4444',  // Tailwind red-500
                confirmButtonText: 'Yes, promote!',
            });

            if (!result.isConfirmed) return;


            const res = await fetch(`https://general-accademy-lilac.vercel.app/api/users/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({courses}),
            });

            if (!res.ok) {
                throw new Error(`Failed to update user. Status: ${res.status}`);
            }

            const data = await res.json();

            if (data?.acknowledged) {
                await Swal.fire({
                    title: 'Success!',
                    text: ` ${courses}Added This course`,
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                });

                toast.success('Admin promotion successful');
                router.refresh?.();
            } else {
                throw new Error('Promotion failed. Response was not acknowledged.');
            }
        } catch (error) {
            console.error('Admin update failed:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong while promoting the user.',
                icon: 'error',
            });
            toast.error('Failed to promote user to admin');
        }


    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800 dark:text-black">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-lg shadow mb-8">
                All Registered Users ({totalUsers})
            </h1>

            {users.length === 0 ? (
                <p className="text-center text-lg text-gray-500">No users found.</p>
            ) : (
                <>
                    <div className="overflow-x-auto rounded-lg shadow mb-6">
                        <table className="min-w-full bg-white border border-gray-200 text-sm">
                            <thead className="bg-blue-100 text-blue-800 uppercase text-xs font-semibold">
                                <tr>
                                    <th className="py-3 px-4 text-left">#</th>
                                    <th className="py-3 px-4 text-left">Name</th>
                                    <th className="py-3 px-4 text-left">Email</th>
                                    <th className="py-3 px-4 text-left">Courses</th>
                                    <th className="py-3 px-4 text-left">Role</th>
                                    <th className="py-3 px-4 text-left">Actions</th>
                                    <th className="py-3 px-4 text-left">Delete</th>
                                    <th className="py-3 px-4 text-left">Registered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id} className="hover:bg-gray-50 transition">
                                        <td className="py-3 px-4">{skip + index + 1}</td>
                                        <td className="py-3 px-4">{user.name || 'N/A'}</td>
                                        <td className="py-3 px-4">{user.email || 'N/A'}</td>
                                        <td className="py-3 px-4">
                                            <form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handleCourses(user._id, e.target.courses.value);
                                                }}
                                                className="flex space-x-2 items-center"
                                            >
                                                <select
                                                    name="courses"
                                                    defaultValue=""
                                                    className="select select-sm select-primary w-40"
                                                >
                                                    <option value="" disabled>Pick a course</option>
                                                    <option value="bjs19-full">bjs19-full</option>
                                                    <option value="vscode-fork">VS Code Fork</option>
                                                    <option value="another-vscode-fork">Another VS Code Fork</option>
                                                </select>
                                                <button type="submit" className="btn btn-sm btn-primary">Add</button>
                                            </form>
                                        </td>

                                        <td className="py-3 px-4">
                                            <span
                                                className={`inline-block px-2 py-1 rounded text-xs font-medium capitalize ${user.role === 'admin'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                    }`}
                                            >
                                                {user.role || 'user'}
                                            </span>
                                        </td>

                                        <td className="py-3 px-4">
                                            {user.role !== 'admin' ? (
                                                <button
                                                    className={`btn btn-sm text-white ${loadingId === user._id
                                                        ? 'bg-gray-400 cursor-not-allowed'
                                                        : 'bg-blue-600 hover:bg-blue-700'
                                                        }`}
                                                    onClick={() => handleAdmin(user._id)}
                                                    disabled={loadingId === user._id}
                                                >
                                                    {loadingId === user._id ? 'Updating...' : 'Make Admin'}
                                                </button>
                                            ) : (
                                                <span className="inline-block bg-green-500 text-white px-3 py-1 rounded text-xs font-semibold">
                                                    Admin
                                                </span>
                                            )}
                                        </td>

                                        <td className="py-3 px-4">
                                            <button
                                                className="text-red-600 hover:text-red-800"
                                                onClick={() => handleDelete(user._id)}
                                                title="Delete user"
                                            >
                                                <MdDelete size={20} />
                                            </button>
                                        </td>

                                        <td className="py-3 px-4 text-gray-500">
                                            {user.createdAt ? (
                                                new Date(user.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })
                                            ) : (
                                                <span className="italic text-gray-400">N/A</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Link
                                key={i}
                                href={`?page=${i + 1}`}
                                className={`px-3 py-1 rounded text-sm font-medium border ${i + 1 === currentPage
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-700 hover:bg-blue-100'
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
