import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          aria-label="Home"
        >
          <img
            src="/logo.svg"
            alt="Bintibora Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="font-montserrat text-[15px] font-medium text-gray-900 transition-colors hover:text-gray-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-montserrat text-[15px] font-medium text-gray-900 transition-colors hover:text-gray-600"
          >
            About
          </Link>
         
          <Link
            to="/programs"
            className="font-montserrat text-[15px] font-medium text-gray-900 transition-colors hover:text-gray-600"
          >
            Programs
          </Link>
          <Link
            to="/contact  "
            className="font-montserrat text-[15px] font-medium text-gray-900 transition-colors hover:text-gray-600"
          >
            Contact
          </Link>
        
          
        </div>

        {/* CTA */}
        <Link
          to="/join"
          className="hidden rounded-full bg-black px-6 py-3 font-montserrat text-[15px] font-medium text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-md md:inline-flex"
        >
          Join / Partner
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-900 hover:bg-gray-100 md:hidden"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;