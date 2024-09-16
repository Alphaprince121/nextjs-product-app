"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="md:h-64 bg-gray-800   text-white py-6 ">
            <div className="container  mx-auto px-4">
                <div className="flex flex-wrap justify-between py-16 items-center">
                    {/* Logo and Company Info */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Company Name</h2>
                        <p className="text-gray-400">
                            ©️ {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="w-full  md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Links:-</h3>
                        <ul className="list-nonen flex gap-3">
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">
                                    About
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-gray-400">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <FaFacebookF className="w-6 h-6" />
                            </a>

                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <FaTwitter className="w-6 h-6" />
                            </a>

                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>

                            <a
                                href="https://www.github.com"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
