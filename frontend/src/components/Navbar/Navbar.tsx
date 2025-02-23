import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiBell, FiShoppingCart } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import logo from "../../assets/images/logo.png";
import '../../i18n';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-1">
        <span>{String(t('callUs'))}</span>
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">{String(t('languageSwitch'))}</span>
          <span className="bg-red-600 text-xs px-2 py-1 rounded">{String(t('debug'))}</span>
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
            placeholder={String(t('searchPlaceholder'))}
            className="bg-transparent ml-2 outline-none w-full"
          />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <FiBell className="text-gray-700 text-2xl cursor-pointer" />
          <FiShoppingCart className="text-gray-700 text-2xl cursor-pointer" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            {String(t('login'))}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;