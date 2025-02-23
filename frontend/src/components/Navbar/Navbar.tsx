import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiBell, FiShoppingCart } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
import menuImage1 from "../../assets/images/menu/menu1.jpg"; // Example images
import menuImage2 from "../../assets/images/menu/menu2.jpg";
import "../../i18n";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-1">
        <span>{String(t("callUs"))}</span>
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">{String(t("languageSwitch"))}</span>
          <span className="bg-red-600 text-xs px-2 py-1 rounded">
            {String(t("debug"))}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-blue-600 p-3 flex items-center justify-between">
        {/* Left: Logo & Menu Icon (Always Visible) */}
        <div className="flex items-center space-x-4">
          <button className="text-white text-2xl" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </button>
          <img src={logo} alt="logo" className="h-8 rounded-lg" />
        </div>

        {/* Center: Search Bar */}
        <div className="flex items-center bg-white px-3 py-2 rounded-lg w-full max-w-md">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder={String(t("searchPlaceholder"))}
            className="bg-transparent ml-2 outline-none w-full"
          />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <FiBell className="text-white text-2xl cursor-pointer" />
          <FiShoppingCart className="text-white text-2xl cursor-pointer" />
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">
            {String(t("login"))}
          </button>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`fixed left-0 top-0 w-72 h-full bg-white shadow-lg transform transition-transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">{String(t("menu"))}</h2>
            <button onClick={() => setMenuOpen(false)} className="text-gray-700 text-2xl">
              <FiX />
            </button>
          </div>

          {/* Sidebar Content */}
          <ul className="p-4 space-y-4">
            <li className="flex items-center space-x-3">
              <img src={menuImage1} alt="Menu Item 1" className="w-12 h-12 rounded-md" />
              <a href="#" className="block text-gray-800">
                {String(t("menuItem1"))}
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <img src={menuImage2} alt="Menu Item 2" className="w-12 h-12 rounded-md" />
              <a href="#" className="block text-gray-800">
                {String(t("menuItem2"))}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
