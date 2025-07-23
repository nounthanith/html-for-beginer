import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiInfo, FiPhone } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    // { name: "About", path: "/about", icon: <FiInfo /> },
    // { name: "Contact", path: "/contact", icon: <FiPhone /> },
  ];

  return (
    <nav className="bg-base-100 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg text-primary">🧠 Learn-Html</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 transition-all duration-300">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-base-content hover:text-primary hover:bg-base-200"
                  }`
                }
              >
                {item.icon} {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-base-content p-2 transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md text-base font-medium transition duration-300 ${
                  isActive
                    ? "bg-base-300 text-primary"
                    : "text-base-content hover:bg-base-200 hover:text-primary"
                }`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
