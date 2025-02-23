import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiBell, FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/images/logo.png"
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-1">
        <span>Llámemos al 93546744</span>
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">En/Es</span>
          <span className="bg-red-600 text-xs px-2 py-1 rounded">DEBUG</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-blue-600 p-3 flex items-center justify-between">
        {/* Left: Logo & Menu Icon (Always Visible) */}
        <div className="flex items-center space-x-4">
          <button className="text-white text-2xl" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </button>
          <img src={logo} alt="logo" className="h-8 rounded-lg  w-full max-w-md"/>
        </div>

        {/* Center: Search Bar */}
        <div className="flex items-center bg-white px-3 py-2 rounded-lg w-full max-w-md">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent ml-2 outline-none w-full"
          />
        </div>

        {/* Right: Icons & Login Button */}
        <div className="flex items-center space-x-4 text-white">
          <FiBell className="text-2xl cursor-pointer" />
          <FiShoppingCart className="text-2xl cursor-pointer" />
          <button className="bg-white text-blue-600 px-3 py-1 rounded-lg">Iniciar Sesión</button>
        </div>
      </nav>

      {/* Sidebar Menu (Always Accessible) */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMenuOpen(false)}>
        <div className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transform transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">Menú</h2>
            <button onClick={() => setMenuOpen(false)} className="text-gray-700 text-2xl">
              <FiX />
            </button>
          </div>
          <ul className="p-4 space-y-4">
            <li><a href="#" className="block text-gray-800">Home</a></li>
            <li><a href="#" className="block text-gray-800">Shop</a></li>
            <li><a href="#" className="block text-gray-800">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
