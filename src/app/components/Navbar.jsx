"use client";
import React, { useEffect, useRef, useState } from "react";
import "../css/navbar.css";
import Link from "next/link";
import { GiGamepad, GiHamburgerMenu } from "react-icons/gi";
import "bootstrap";

export default function Navbar() {
  const ref = useRef(null);
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setShowNav(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const [showNav, setShowNav] = useState(false);
  return (
    <div className="navbar-custom w-100 text-white shadow-sm d-block fixed-top">
      <div className="w-100 d-flex align-items-center justify-content-between">
        <div
          className="d-md-flex align-items-center"
          style={{ fontSize: "30px" }}
        >
          <GiGamepad size="40" />
        </div>
        <div className="d-none d-md-flex align-items-center mx-4 h-100">
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
              href="#project"
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
        <div className="d-block d-md-none">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowNav(!showNav)}
          >
            <span>
              <GiHamburgerMenu fontSize={50} ref={ref} />
            </span>
          </button>

          {/*  */}
        </div>
      </div>
      <div className="w-100 d-md-none" ref={ref}>
        <ul
          className={`w-100 p-0 ${
            showNav === true ? " nav-show" : " my-navbar"
          }`}
        >
          <li className="w-100">
            <Link
              href="/"
              className="navbar-link text-white text-decoration-none"
              onClick={() => setShowNav(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              className="navbar-link text-white text-decoration-none"
              onClick={() => setShowNav(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#project"
              className="navbar-link text-white text-decoration-none"
              onClick={() => setShowNav(false)}
            >
              My Project
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="navbar-link text-white text-decoration-none"
              onClick={() => setShowNav(false)}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
