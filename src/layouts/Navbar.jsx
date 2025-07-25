import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiInfo, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          dropdownButtonRef.current && !dropdownButtonRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add keyboard event listener for escape key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  // Toggle dropdown with keyboard support
  const toggleDropdown = useCallback((isOpen) => {
    setIsDropdownOpen(isOpen);
    if (isOpen && dropdownRef.current) {
      // Focus first item when opening dropdown
      const firstItem = dropdownRef.current.querySelector('a, button');
      if (firstItem) firstItem.focus();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: "Home", path: "/", icon: <FiHome className="text-lg" /> },
    { name: "About", path: "/about", icon: <FiInfo className="text-lg" /> },
  ];

  const stepItems = [
    { name: "មេរៀនទី១ - សេចក្តីផ្តើម", href: "#step1" },
    { name: "មេរៀនទី២ - រចនាសម្ព័ន្ធ HTML", href: "#step2" },
    { name: "មេរៀនទី៣ - Tag HTML ទូទៅ", href: "#step3" },
    { name: "មេរៀនទី៤ - ការអនុវត្តបង្កើត Website ផ្ទាល់ខ្លួន", href: "#step4" },
    { name: "មេរៀនទី៥ - ការបង្កើតតារាង (Table)", href: "#step5" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { 
        staggerChildren: 0.05, 
        when: 'beforeChildren',
        type: 'spring',
        stiffness: 300,
        damping: 30
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { 
        when: 'afterChildren',
        staggerChildren: 0.02,
        staggerDirection: -1,
        duration: 0.15
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring',
        stiffness: 500,
        damping: 30
      } 
    },
    exit: { 
      opacity: 0, 
      y: -5, 
      transition: { 
        duration: 0.1 
      } 
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 5,
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 30
      } 
    },
    exit: { 
      opacity: 0, 
      y: 0,
      transition: { 
        duration: 0.15 
      } 
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/90 backdrop-blur-md shadow-lg"
          : "bg-base-100/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/" className="flex items-center space-x-2 group">
              <span className="text-2xl">💻</span>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Learn HTML
              </span>
            </NavLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {item.name === "Home" && isHomePage ? (
                  <div className="group">
                    <div className="relative">
                      <button
                        ref={dropdownButtonRef}
                        onClick={() => toggleDropdown(!isDropdownOpen)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleDropdown(!isDropdownOpen);
                          } else if (e.key === 'ArrowDown' && isDropdownOpen && dropdownRef.current) {
                            e.preventDefault();
                            const firstItem = dropdownRef.current.querySelector('a, button');
                            if (firstItem) firstItem.focus();
                          }
                        }}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                        aria-controls="steps-menu"
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          isDropdownOpen 
                            ? "text-primary font-semibold" 
                            : "text-base-content/80 hover:text-primary hover:bg-base-200/50"
                        } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-base-200/30`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                        {isDropdownOpen ? (
                          <FiChevronUp className="ml-1 w-4 h-4" />
                        ) : (
                          <FiChevronDown className="ml-1 w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Dropdown steps - only show on homepage */}
                    {isHomePage && (
                      <AnimatePresence>
                        {(isDropdownOpen || isMenuOpen) && (
                          <motion.div
                            ref={dropdownRef}
                            className="absolute left-0 mt-2 z-50 bg-base-100 border border-base-200/70 rounded-xl shadow-lg w-64 overflow-hidden backdrop-blur-sm bg-opacity-95"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="steps-menu"
                          >
                            <div className="py-1">
                              <h3 
                                className="px-4 py-2 text-xs font-semibold text-base-content/70 uppercase tracking-wider border-b border-base-200/50"
                                id="steps-menu"
                              >
                                HTML Tutorial Steps
                              </h3>
                              <ul>
                                {stepItems.map((step, i) => (
                                  <motion.li 
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <a
                                      href={step.href}
                                      className="block px-4 py-3 text-sm text-base-content hover:bg-base-200/50 hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-base-200/30"
                                      role="menuitem"
                                      tabIndex="0"
                                      onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMenuOpen(false);
                                      }}
                                    >
                                      <div className="flex items-center">
                                        <span className="flex items-center justify-center w-5 h-5 mr-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                          {i + 1}
                                        </span>
                                        <span>{step.name}</span>
                                      </div>
                                    </a>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-base-content/80 hover:text-primary hover:bg-base-200/50"
                      } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-base-200/30`
                    }
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-base-200/50 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-base-content" />
              ) : (
                <FiMenu className="w-6 h-6 text-base-content" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-base-100/95 backdrop-blur-lg border-t border-base-200"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive 
                          ? 'text-primary bg-base-200/30' 
                          : 'text-base-content hover:bg-base-200/50'
                      } focus:outline-none focus:ring-2 focus:ring-primary/50`
                    }
                  >
                    <span className={`${item.path === location.pathname ? 'text-primary' : 'text-base-content/70'}`}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </NavLink>
                </motion.div>
              ))}
              
              {/* Steps in mobile menu - only show on homepage */}
              {isHomePage && (
                <motion.div 
                  className="pt-3 border-t border-base-200"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { 
                        staggerChildren: 0.05,
                        delayChildren: 0.2,
                        when: "beforeChildren"
                      } 
                    },
                    exit: { 
                      opacity: 0,
                      transition: { 
                        staggerChildren: 0.02,
                        staggerDirection: -1,
                        when: "afterChildren"
                      } 
                    }
                  }}
                >
                  <motion.h4 
                    className="px-4 py-2 text-xs font-semibold text-base-content/70 uppercase tracking-wider"
                    variants={itemVariants}
                  >
                    HTML Tutorial Steps
                  </motion.h4>
                  {stepItems.map((step, i) => (
                    <motion.div 
                      key={i} 
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a
                        href={step.href}
                        className="flex items-center px-4 py-3 text-sm text-base-content hover:bg-base-200/70 hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-base-200/30"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="flex items-center justify-center w-5 h-5 mr-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {i + 1}
                        </span>
                        {step.name}
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;