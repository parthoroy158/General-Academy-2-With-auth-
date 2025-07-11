// app/components/UserProfileNav.tsx

import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const UserProfileNav = async () => {
    // Get the session
    const session = await getServerSession(authOptions);

    // Protect against missing session
    if (!session || !session.user?.email) {
        return (
            <div className="p-8 text-center text-red-500">
                You must be logged in to view this page.
            </div>
        );
    }

    // Fetch user data from database
    const singleData = await dbConnect(collectionNameObj.userCollections).findOne({
        email: session.user.email,
    });

    // Fallback profile image
    const profileImage = singleData?.photoURL || '/profile.jpg';



    return (
        <div className="max-w-100 mx-auto flex flex-col md:flex-row md:min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-full md:w-100 bg-blue-100 text-black rounded p-4 flex flex-col items-center">
                <div className="rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 border-4 border-white mb-4">
                    <Image
                        src={profileImage}
                        alt="Profile"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h2 className="text-base md:text-lg font-bold text-center">
                    {session.user.name || 'User'}
                </h2>
                <p className="text-xs md:text-sm mb-6 text-center">
                    {session.user.email}
                </p>

                <div className='divider'></div>

                {/* Navigation */}
                <nav className="w-full space-y-2 text-xs md:text-sm">
                    {[
                        // Always show basic profile
                        { icon: <CgProfile />, label: 'Profile', href: '/UserProfile/basicProfile' },

                        // Conditionally show admin dashboard
                        ...(singleData?.role === 'admin'
                            ? [{ icon: <RiAdminFill />, label: 'Admin Dashboard', href: '/adminDashboard/TotalUser' }, { icon: <IoMdNotificationsOutline className='text-lg' />, label: 'Post Notifications', href: '/UserProfile/postNotifications' }]
                            : []),
                    ].map(({ label, href, icon }) => (
                        <Link key={label} href={href}>
                            <div className="flex items-center px-3 py-2 rounded cursor-pointer transition-all duration-200 ease-in-out hover:bg-indigo-600 hover:text-white hover:shadow-md hover:scale-[1.02]">
                                <span className="mr-2"> {icon} </span>
                                {label}
                            </div>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content Placeholder */}

        </div>
    );
};

export default UserProfileNav;
