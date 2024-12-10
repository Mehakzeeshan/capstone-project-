"use client";

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuIcon = () => {
    setMenuOpen(!menuOpen);
  };

  const pathname = usePathname();

  return (
    <section className="header flex justify-between bg-[#021425] px-20 py-10 items-center shadow-lg h-[100px] z-[999] sticky top-0 left-0">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={170} height={180} />
      </Link>

      <div>
        <button
          className="md:hidden text-white focus:outline-none z-20"
          onClick={handleMenuIcon}
        >
          {menuOpen ? (
            <FaXmark className="w-10 h-10" />
          ) : (
            <GiHamburgerMenu className="w-10 h-10" />
          )}
        </button>
        <ul className="navbar hidden md:flex md:justify-center md:items-center md:space-x-3">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: <FaShoppingCart />, path: "/cart" },
          ].map(({ name, path }, index) => (
            <li key={index} className="px-4 py-5 relative list-none">
              <Link
                href={path}
                className={`text-[17px] font-bold relative transition duration-150 ease-linear group ${
                  pathname === path
                    ? "text-[#088178]"
                    : "text-white hover:text-[#088178] active:text-[#088178]"
                }`}
              >
                {name}
                <span
                  className={`absolute right-[20px] bottom-[-4px] h-[2px] bg-[#088178] transition-all duration-150 ease-linear ${
                    pathname === path
                      ? "w-[60%]"
                      : "w-0 group-hover:w-[60%] group-active:w-[60%]"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}

        {menuOpen && (
          <ul className="absolute top-16 right-0 flex flex-col bg-[#021425] h-[250px] w-[250px] space-y-4 p-4 z-10 shadow-md text-center">
          <li>
            <Link
              href="/"
              className="text-white hover:text-[#088178]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-white hover:text-[#088178]"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-white hover:text-[#088178]"
              onClick={() => setMenuOpen(false)}
            >
              
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:text-[#088178]"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="text-white hover:text-[#088178] flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <FaShoppingCart className="mx-[100px]" />
            </Link>
          </li>
        </ul>
        )}
      </div>
    </section>
  );
};

export default Navbar;
