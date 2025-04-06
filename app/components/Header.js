
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full h-16 bg-cover bg-center text-white shadow-lg z-50">
      <div className="w-full bg-cover bg-center text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Image src="/logo.png" width={150} height={90} alt="logos" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/">
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
            <Link href="/features">
              <span className="hover:underline cursor-pointer">Features</span>
            </Link>
            <Link href="/about">
              <span className="hover:underline cursor-pointer">About Us</span>
            </Link>
            <Link href="/contact">
              <span className="hover:underline cursor-pointer">Contact Us</span>
            </Link>
          </nav>

          {/* Sign In Button */}
          <Link href="/login" className="bg-yellow-600 p-1 px-2 rounded-lg hidden md:inline-block">
            Sign In
          </Link>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-gray-300  text-black bg-opacity-90 text-center px-6 pb-6 space-y-6">
            <Link href="/">
              <span className="block hover:underline cursor-pointer">Home</span>
            </Link>
            <Link href="/features">
              <span className="block hover:underline cursor-pointer">Features</span>
            </Link>
            <Link href="/about">
              <span className="block hover:underline cursor-pointer">About Us</span>
            </Link>
            <Link href="/contact">
              <span className="block hover:underline cursor-pointer">Contact Us</span>
            </Link>
            <Link href="/login" className="inline-block bg-yellow-600 p-2 px-4 rounded-lg mt-3">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;