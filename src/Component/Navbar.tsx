// src/Component/Navbar.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCart } from "../app/context/cartContext"; // Adjust path based on your file structure

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart(); // Use cart context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="flex justify-between text-center text-black py-6 px-8 bg-green-100 drop-shadow-md">
        <a href="/" className="text-2xl font-bold">
          Logo
        </a>
        <ul className="hidden sm:flex justify-between items-center gap-12">
          <Link href="/Home">
            <li className="hover:text-red-500 cursor-pointer text-base font-bold">
              Home
            </li>
          </Link>
          <Link href="/About">
            <li className="hover:text-red-500 cursor-pointer text-base font-bold">
              About
            </li>
          </Link>
          <Link href="/Contact">
            <li className="hover:text-red-500 cursor-pointer text-base font-bold">
              Contact
            </li>
          </Link>
          <Link href="/login">
            <li className="hover:text-red-500 cursor-pointer text-base font-bold">
              Login
            </li>
          </Link>
          <Link
  href="/Cart"
  className="relative flex items-center justify-center text-2xl cursor-pointer hover:text-red-500"
>
  <BsCart4 />
  {cart.length > 0 && (
    <span className="absolute top-0 -right-7 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
      {cart.length}
    </span>
  )}
</Link>

        </ul>
        <div className="sm:hidden text-3xl font-bold cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </div>
      </header>
      {isMenuOpen && (
        <div className="sm:hidden flex justify-end items-center">
          <ul className="py-5 w-full bg-green-100 text-center space-y-7">
            <Link href="/Home">
              <li className="hover:text-red-500 cursor-pointer text-base font-bold">
                Home
              </li>
            </Link>
            <Link href="/About">
              <li className="hover:text-red-500 cursor-pointer text-base font-bold">
                About
              </li>
            </Link>
            <Link href="/Contact">
              <li className="hover:text-red-500 cursor-pointer text-base font-bold">
                Contact
              </li>
            </Link>
            <Link
              href="/Cart"
              className="text-2xl cursor-pointer flex justify-center text-center hover:text-red-500"
            >
              <BsCart4 />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
