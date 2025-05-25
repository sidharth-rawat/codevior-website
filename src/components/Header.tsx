"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Navigation mapping to handle URL routing correctly
  const navigationMap: Record<string, string> = {
    Home: "/",
    Services: "/service",
    About: "/about",
    Contact: "/contact",
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <header className="fixed w-full h-16 md:h-20 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <nav className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-purple-600">
            Codevior
          </Link>
        </nav>
      </header>
    );
  }

  return (
    <>
      {/* Add CSS custom property for header height */}
      <style jsx global>{`
        :root {
          --header-height: 4rem; /* 64px for mobile */
        }
        @media (min-width: 768px) {
          :root {
            --header-height: 5rem; /* 80px for desktop */
          }
        }
      `}</style>
      
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 w-full h-16 md:h-20 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-white/20"
      >
        <nav className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
              >
                Codevior
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center space-x-6 lg:space-x-8"
            >
              <Link
                href="/"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm lg:text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/service"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm lg:text-base font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm lg:text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm lg:text-base font-medium"
              >
                Contact
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-purple-600 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 text-sm lg:text-base font-medium shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-600 hover:text-purple-600 transition-colors p-2 rounded-lg hover:bg-purple-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-3">
                    {["Home", "Services", "About", "Contact"].map((item) => (
                      <motion.div
                        key={item}
                        variants={menuItemVariants}
                        whileHover={{ x: 10 }}
                      >
                        <Link
                          href={navigationMap[item]}
                          className="text-gray-600 hover:text-purple-600 block py-3 px-2 font-medium transition-colors duration-200 hover:bg-purple-50 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      variants={menuItemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="pt-2"
                    >
                      <Link
                        href="/contact"
                        className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 text-center block font-medium shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}
