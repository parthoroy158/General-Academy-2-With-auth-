import React from 'react';

const UserTable = () => {
    
    return (
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
                            <td className="py-2 px-4 border-b">{user._id || 'N/A'}</td>
                            <td className="py-2 px-4 border-b capitalize">{user.role || 'user'}</td>
                            <td className="py-2 px-4 border-b">
                                <button className="btn btn-sm" >Make Admin</button>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button className="btn btn-sm bg-red-500 text-white text-xl">
                                    <MdDelete />
                                </button>
                            </td>
                            <td className="py-2 px-4 border-b">
                                {user.createdAt
                                    ? new Date(user.createdAt).toLocaleDateString()
                                    : '—'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;