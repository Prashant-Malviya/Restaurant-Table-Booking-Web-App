import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md py-3.5 fixed min-w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">Neina</h1>

        {/* Mobile Hamburger Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu items (desktop) */}
        <ul className="md:flex space-x-6 hidden md:block">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/table-booking"
              className="hover:text-yellow-500 transition duration-300"
            >
              Table Booking
            </Link>
          </li>
          <li>
            <Link
              to="/my-bookings"
              className="hover:text-yellow-500 transition duration-300"
            >
              My Bookings
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-500 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-500 transition duration-300"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu items */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-50 transition-all ease-in-out duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-4xl"
          >
            ×
          </button>
        </div>
        <ul className="space-y-6 text-2xl text-white font-semibold">
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/table-booking"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-500 transition duration-300"
            >
              Table Booking
            </Link>
          </li>
          <li>
            <Link
              to="/my-bookings"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-500 transition duration-300"
            >
              My Bookings
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-500 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-500 transition duration-300"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
