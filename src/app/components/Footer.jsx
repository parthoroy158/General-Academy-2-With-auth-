import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsFacebook } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-gray-50 w-full text-black dark:bg-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="flex items-center justify-between px-4 md:px-10 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold">General Academy</div>
                    <div className="flex gap-4 text-lg">
                        <a href="#" className="hover:text-blue-600 transition text-2xl" aria-label="Facebook" rel="noopener noreferrer">
                            <BsFacebook />
                        </a>
                        <a href="#" className="hover:text-sky-500 transition text-2xl" aria-label="Twitter" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-blue-800 transition text-2xl" aria-label="LinkedIn" rel="noopener noreferrer">
                            <IoLogoLinkedin />
                        </a>
                    </div>
                </header>

                {/* Footer */}
                <footer className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 py-6 border-t border-gray-200 dark:border-gray-700 text-sm">
                    {/* About Section */}
                    <div className="flex flex-col gap-2">
                        <a href="/aboutUs" className="hover:underline">About</a>
                        <a href="https://bjsc.gov.bd/" className="hover:underline">BJSC Link</a>
                        <a href="https://www.barcouncil.gov.bd/" className="hover:underline">Bar-council Link</a>
                        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    </div>

                    {/* Legal Section */}
                    <div className="flex flex-col gap-2">
                        <a href="/terms-conditions" className="hover:underline">Terms & Conditions</a>
                        <a href="/refund-policy" className="hover:underline">Refund Policy</a>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-2">
                        <p>General Academy</p>
                        <p>Address: Dhaka,Bangladesh</p>
                        <p>
                            Email: <a href="mailto:support@p2a.academy" className="text-blue-500 hover:underline">generalacademybd@gmail.com</a>
                        </p>
                        <p>Helpline: +8801325410258 ,+8801533302578</p>
                    </div>
                </footer>
            </div>
        </div>

    );
};

export default Footer;