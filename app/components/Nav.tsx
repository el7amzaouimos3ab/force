"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "#about" },
    { name: "شركاؤنا", href: "#partners" },
    { name: "خدماتنا", href: "#services" },
    { name: "أعمالنا", href: "#works" },
    { name: " فورس بالأرقام", href: "#numbers" },
  ];

  return (
    <div>
      
      <nav className="fixed top-0 block w-full max-w-screen py-2 mx-auto bg-[#070A0B] bg-opacity-90 shadow lg:px-8 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-white">
          
          <div className="flex items-center gap-x-2">
            <Image 
              src="/logos/logo.webp" // You can also use import to get a local image.
              alt="logoNav"
              width={70} 
              height={70} 
              className="ml-8"
            />
            <div className="hidden lg:block">
              <ul className="flex flex-col text-sm gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 ">
              {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm p-1  text-white hover:text-gray-400"
                  >
                    <Link href={item.href} className="flex items-center">
                      {item.name}
                    </Link>
                  </li>
                ))}
                </ul>
                </div>
              <div/>
          </div>

          <div className="flex items-center justify-center">

          <button className="relative  bg-white px-6 py-2 md:mt-1 text-black hover:bg-gray-400 text-center align-middle " >
            
            <Link href="#contact" className="flex items-center">
              اتصل بنا 
            </Link>
          </button>
          
          <div className="lg:hidden">
          
            <button
              className="relative ml-auto max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center  pb-4">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-white hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4 pt-10">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-1 text-white hover:text-gray-400"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          

              
        </div>
      </nav>
    </div>
  );
}

export default Nav;