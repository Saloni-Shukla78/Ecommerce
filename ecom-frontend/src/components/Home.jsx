import React from 'react';
import { Link } from 'react-router-dom';
import { FaBoxOpen } from "react-icons/fa"; // Import an icon for a better look

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-indigo-400 text-white">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center transform transition duration-500 hover:scale-105">
        <FaBoxOpen className="text-blue-500 text-6xl mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-gray-800">Welcome to the Dashboard</h2>
        <p className="mt-4 text-gray-600">
          Manage users and products efficiently with ease. Explore our platform and get started now.
        </p>
        <Link to="/products">
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
            View Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
