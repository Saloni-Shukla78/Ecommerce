import React from 'react';
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-400 to-indigo-400 p-4 shadow-lg text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo with Name */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaStore className="text-yellow-400" /> FakeStore
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
          <Link to="/users" className="hover:text-yellow-300 transition duration-300">Users</Link>
          <Link to="/products" className="hover:text-yellow-300 transition duration-300">Products</Link>
          <Link to="/add-user" className="hover:text-yellow-300 transition duration-300">Add User</Link>
          <Link to="/add-product" className="hover:text-yellow-300 transition duration-300">Add Product</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
