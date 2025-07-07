"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { signOut } from "next-auth/react"

const Navbar = () => {
    const pathname = usePathname()
    const { data: session, status } = useSession();
    console.log("This is the user:", session)

    const navItems = [
        { href: '/', label: 'হোম' },
        { href: '/allCourses', label: 'সকল কোর্স' },
        { href: '/aboutUs', label: 'আমাদের সম্পর্কে' },
        { href: '/demoClass', label: 'ডেমো ক্লাস' },
        { href: '/contactUs', label: 'যোগাযোগ', isButton: true },

    ]

    if (!session) {
        navItems.push({ href: '/logIn', label: 'Log In' },
            { href: '/signUp', label: 'Sign Up' },)
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
        <div className="w-full fixed top-0 z-20 bg-gradient-to-r from-[#e6f0fb] to-[#f5f5ff] dark:from-gray-900 dark:to-gray-800 shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4 py-2 text-black dark:text-white flex items-center justify-between">

                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* Mobile Menu Button */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 dark:text-white"
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
                            className="menu menu-sm dropdown-content mt-3 z-[99] p-3 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-xl w-64 max-h-80 overflow-y-auto space-y-1"
                        >
                            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

                            {/* Navigation Items */}
                            <ul className="space-y-2">{navOptions}</ul>

                            {/* Divider */}
                            {session && <hr className="my-3 border-gray-300 dark:border-gray-600" />}

                            {/* User Info + Logout */}
                            {session && (
                                <div className="flex flex-col gap-3">
                                    <p className="text-sm font-semibold truncate">{session.user.name}</p>
                                    <button
                                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white shadow-2xl transition rounded-md"
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
                            <Link href="/" className="truncate max-w-[150px]">
                                <p className="text-sm font-semibold text-gray-800 dark:text-white hover:underline">
                                    {session.user.name}
                                </p>
                            </Link>
                            <button
                                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white transition duration-200 shadow-md rounded-md"
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