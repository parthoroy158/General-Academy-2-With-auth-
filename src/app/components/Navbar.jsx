"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { signOut } from "next-auth/react"
import { IoNotificationsOutline } from "react-icons/io5";



const Navbar = () => {
    const pathname = usePathname()
    const { data: session, status } = useSession();
    console.log("This is the user:", session, status)




    const navItems = [
        { href: '/', label: 'হোম' },
        { href: '/allCourses', label: 'সকল কোর্স' },
        { href: '/aboutUs', label: 'আমাদের সম্পর্কে' },
        { href: '/demoClass', label: 'ডেমো ক্লাস' },
        { href: '/contactUs', label: 'যোগাযোগ', isButton: true },



    ]

    if (!session) {
        navItems.push(

            { href: '/logIn', label: 'Log In' },
            { href: '/signUp', label: 'Sign Up' },

        )
    }




    const navOptions = (
        <nav className="w-full">
            <ul className="flex flex-col md:flex-row md:gap-2 font-medium text-black dark:text-black">
                {navItems.map(({ href, label, isButton }) => {
                    const isActive = pathname === href

                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`block px-4 py-2 rounded-md transition ${isActive
                                    ? 'bg-blue-400 text-white font-semibold'
                                    : 'hover:bg-blue-200'
                                    }`}
                            >
                                {isButton ? <button>{label}</button> : label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );


    return (
        <div className="w-full fixed top-0 z-20 bg-gradient-to-r from-[#e6f0fb] to-[#f5f5ff] dark:bg-blue-100 dark:to-gray-200 shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4 py-2 text-black dark:text-white flex items-center justify-between">

                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* Mobile Menu Button */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 dark:text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>

                        {/* Mobile Dropdown Menu */}
                        <div
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[99] p-3 bg-white dark:bg-blue-100 dark:to-gray-200  text-black dark:text-white shadow-lg rounded-xl w-64 max-h-80 overflow-y-auto space-y-1"
                        >
                            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

                            {/* Navigation Items */}
                            <ul className="space-y-2">{navOptions}</ul>

                            {/* Divider */}
                            {session && <hr className="my-3 border-gray-300 dark:border-gray-600" />}

                            {/* User Info + Logout */}
                            {session && (
                                <div className="flex flex-col gap-3">
                                    <div className='flex dark:text-black items-center gap-5 text-black'>
                                        <Link href='/notifications'>

                                            <div className='flex'>
                                                <IoNotificationsOutline className='text-xl' /><div className="badge badge-sm text-red-600 " > <sup class="text-xs align-super"></sup>+0</div>
                                            </div>

                                        </Link>
                                        <p className="text-sm font-semibold truncate">{session.user.name} hi</p>
                                    </div>
                                    <button
                                        className="btn btn-sm btn-ghost bg-red-400 hover:bg-red-200 text-black border-b-2 border-b-black transition duration-200 shadow-2xl rounded"
                                        onClick={() => signOut()}
                                    >
                                        Log out
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Logo & Brand */}
                    <Link href="/" className="flex items-center gap-3 ml-2">
                        <img
                            src="/logo.png"
                            width={40}
                            height={40}
                            alt="Logo"
                            className="rounded shadow-md"
                        />
                        <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 drop-shadow">
                            জেনারেল একাডেমি
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex items-center gap-6">
                    {/* Desktop Nav Menu */}
                    <ul className="menu menu-horizontal px-1 font-medium">{navOptions}</ul>

                    {/* Session Section */}
                    {session ? (
                        <div className="flex items-center gap-4">

                            <div className='flex dark:text-black items-center gap-5 text-black'>
                                <Link href='/notifications'>

                                    <div className='flex items-center'>
                                        <IoNotificationsOutline className='text-xl' />
                                    </div>

                                </Link>
                                <Link
                                    href="/UserProfile"
                                    className="truncate max-w-[150px] px-2 py-1 rounded-md transition-all duration-200 hover:bg-slate-100 hover:text-black hover:shadow-sm"
                                >
                                    <p className="text-sm font-semibold truncate">{session.user.name}</p>
                                </Link>

                            </div>

                            <button
                                className="btn btn-sm btn-ghost bg-red-400 hover:bg-red-200 text-black border-b-2 border-b-black transition duration-200 shadow-2xl rounded"
                                onClick={() => signOut()}
                            >
                                Log out
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>

            </div>
        </div>




    );
};

export default Navbar;