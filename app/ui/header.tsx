'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Connect Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-200"
              >
                About us
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-200 flex items-center">
                  Our Products
                  <svg className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-200"
              >
                FAQs
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-200"
              >
                Blog
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex">
              <Link
                href="/get-started"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105 inline-block"
              >
                Get started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation */}
      <div className={`fixed inset-0 z-50 ${isMenuOpen ? 'visible' : 'invisible'} md:hidden`}>
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-white"
          onClick={closeMenu}
        />

        {/* Full-width mobile menu sliding from right */}
        <div className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between px-4 border-b border-gray-200 bg-white">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Connect Logo"
                  width={32}
                  height={32}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <div className="space-y-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block w-full text-left px-4 py-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium border-b border-gray-100"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block w-full text-left px-4 py-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium border-b border-gray-100"
                >
                  About
                </Link>
                <Link
                  href="/students"
                  onClick={closeMenu}
                  className="block w-full text-left px-4 py-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium border-b border-gray-100"
                >
                  Students
                </Link>
                <Link
                  href="/employer"
                  onClick={closeMenu}
                  className="block w-full text-left px-4 py-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium border-b border-gray-100"
                >
                  Employer
                </Link>
                <Link
                  href="/immigration-lawyer"
                  onClick={closeMenu}
                  className="block w-full text-left px-4 py-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium border-b border-gray-100"
                >
                  Immigration Lawyer
                </Link>
                <Link
                  href="/school-admin"
                  onClick={closeMenu}
                  className="block w-full text-left px-4 py-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium border-b border-gray-100"
                >
                  School Admin
                </Link>
                <Link
                  href="/faqs"
                  onClick={closeMenu}
                  className="block w-full text-left px-4 py-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium border-b border-gray-100"
                >
                  FAQs
                </Link>
                <Link
                  href="/blog"
                  onClick={closeMenu}
                  className="block w-full text-left px-4 py-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium"
                >
                  Blog
                </Link>
              </div>
            </nav>

            {/* CTA Button */}
            
          </div>
        </div>
      </div>
    </>
  );
}