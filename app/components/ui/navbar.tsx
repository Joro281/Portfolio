"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/home", label: "cd ./home" },
    { href: "/about", label: "cd ./about" },
    { href: "/projects", label: "cd ./projects" },
    { href: "/contact", label: "cd ./contact" },
  ];

  return (
    <nav className="bg-neutral-900 flex items-center justify-between py-4 px-4 sm:px-8 font-mono text-sm relative">
      <Link href="/home" className="text-green-400 font-bold text-xl sm:text-2xl lg:text-3xl flex items-center hover:scale-105 transition-transform duration-200">
        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent animate-pulse">
          J
        </span>
        <img 
          src="/spider.ico" 
          alt="Spider" 
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 inline-block mx-1 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
        />
        <span className="bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent animate-pulse">
          RO
        </span>
      </Link>

      <button
        onClick={toggleMenu}
        className="md:hidden text-green-400 hover:text-green-300 transition-colors duration-200"
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
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
      </button>

      <div className="hidden md:flex space-x-4 lg:space-x-6">
        {navLinks.map((link) => {

          const isCaseStudyPage = pathname.includes('/case-studies/');
          const isActive = pathname === link.href || (isCaseStudyPage && link.href === '/projects');
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-200 hover:scale-110 inline-block focus:outline-none ${
                isActive
                  ? "text-green-400 font-bold"
                  : "text-gray-300 hover:text-green-300"
              }`}
            >
              <span>
                {link.label}
                {isActive && (
                  <span className="text-green-400">&gt;</span>
                )}
              </span>
            </Link>
          );
        })}
      </div>


      <div className={`
        md:hidden absolute top-full left-0 w-full 
        bg-black/90 border-t border-green-400/30 shadow-lg
        transform transition-all duration-300 ease-in-out origin-top
        ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
        z-50
      `}>
        <div className="border-b border-green-400/20 mb-2"></div>
        <div className="flex flex-col py-4 px-4 space-y-3">
          {navLinks.map((link) => {

            const isCaseStudyPage = pathname.includes('/case-studies/');
            const isActive = pathname === link.href || (isCaseStudyPage && link.href === '/projects');
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 hover:scale-105 transform inline-block py-2 focus:outline-none ${
                  isActive
                    ? "text-green-400 font-bold"
                    : "text-gray-300 hover:text-green-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>
                  {link.label}
                  {isActive && (
                    <span className="text-green-400">&gt;</span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 