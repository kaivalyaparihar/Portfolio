// src/components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="site-header">
      <div className="navbar-container">
        {/* The Logo */}
        <Link href="/" className="nav-logo">
          <Image src="/Circle.png" alt="Kaivalya Parihar Logo" width={50} height={50} />
        </Link>

        {/* The Navigation Links */}
        <div className="nav-links">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#initiatives">Initiatives</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;