import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">EduRural</Link>
      </div>

      {/* Links */}
      <ul className="hidden md:flex space-x-6">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/courses" className="hover:text-yellow-400">Courses</Link></li>
        <li><Link to="/games" className="hover:text-yellow-400">Games</Link></li>
        <li><Link to="/faq" className="hover:text-yellow-400">FAQs</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>

      {/* Login / Signup */}
      <div className="space-x-2">
        <Link to="/login" className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-100">
          Login
        </Link>
        <Link to="/signup" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-500">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
