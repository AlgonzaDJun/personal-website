import React from "react";
import "../css/navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar-custom w-100 text-white">
      <div className="d-md-flex align-items-center">Logo ku</div>
      <div className="d-none d-md-flex align-items-center mx-4">
        <div className="hidden md:flex items-center mx-2">
          <Link
            href="/"
            className="navbar-link text-white text-decoration-none"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="navbar-link text-white text-decoration-none"
          >
            About
          </Link>
          <Link
            href="/project"
            className="navbar-link text-white text-decoration-none"
          >
            My Project
          </Link>
          <Link
            href="/contact"
            className="navbar-link text-white text-decoration-none"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
