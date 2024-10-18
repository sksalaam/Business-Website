"use client"; 
import { useState, useEffect } from 'react';
import Link from 'next/link';


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  return (
    <nav
      className={` fixed w-full z-50 transition-all duration-1000 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      
      } ${scrolled ? 'top-0 py-3' : 'top-14 '}`}
    >
      <div className={` mx-[176px] flex justify-between items-center  p-1
        ${scrolled ? 'border-none': ' border-b'}
        `}>
        <div className="flex items-center">
          <img
            src="https://www.americanholdingintl.com/logo.jpeg"
            alt="Logo"
            className={` mr-2
              ${scrolled ? 'h-[70px]':'h-[90px]'}
              ${scrolled ? 'w-[89px]':'w-[115px]'}              
              `}
              />
          <Link href="/" className={`${scrolled ? 'text-blue-900' : 'text-white'}`}>
            American Holding International
          </Link>
        </div>

        <div className="flex items-center">
          {['/', '/about', '/services', '/contact'].map((link) => (
            <Link
              key={link}
              href={link}
              className={`mr-6 text-lg font-bold hover:border-b-2 ${
                scrolled ? 'text-blue-900' : 'text-white opacity-70'
              }`}
            >
              {link === '/' ? 'Home' : link.charAt(1).toUpperCase() + link.slice(2)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
