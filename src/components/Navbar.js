// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // The className is now dynamic based on the isScrolled state
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="nav-logo">
          <Image src="/Circle.png" alt="Kaivalya Parihar Logo" width={50} height={50} />
        </Link>
        <div className="nav-links">
          {/* Note: In Next.js with App Router, smooth scrolling needs setup.
              For now, these links will jump to sections. */}
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#initiatives">Initiatives</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;