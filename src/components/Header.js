// src/components/Header.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  // Effect to handle scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user has scrolled more than 50px, otherwise false
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once

  const closeMenu = () => setIsMenuOpen(false);

  // Conditionally apply the 'scrolled' class
  const headerClassName = isScrolled ? 'site-header scrolled' : 'site-header';

  return (
    <header className={headerClassName}>
      <div className="navbar-container">
        {/* The Logo */}
        <Link href="/" className="nav-logo" onClick={closeMenu}>
          <Image src="/Circle.png" alt="Kaivalya Parihar Logo" width={50} height={50} />
        </Link>

        {/* The Navigation Links */}
        <div className={isMenuOpen ? 'nav-links mobile-active' : 'nav-links'}>
          <Link href="#about" onClick={closeMenu}>About</Link>
          <Link href="#skills" onClick={closeMenu}>Skills</Link>
          <Link href="#projects" onClick={closeMenu}>Projects</Link>
          <Link href="#initiatives" onClick={closeMenu}>Initiatives</Link>
          <Link href="#contact" onClick={closeMenu}>Contact</Link>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;