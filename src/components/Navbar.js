// src/components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="nav-logo">
          <Image src="/Circle.png" alt="Kaivalya Parihar Logo" width={50} height={50} />
        </Link>
        <div className="nav-links">
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