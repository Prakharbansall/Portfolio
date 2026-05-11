import React, { useState, useEffect } from "react";

// SVG icon for the hamburger menu
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// SVG icon for the close button
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(docHeight > 0 ? scrolled : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-[rgba(0, 0, 0, 0.65)] backdrop-blur-md z-[3000] px-2 sm:px-6 py-2 sm:py-4">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto w-full px-2 sm:px-6">
          {/* Logo */}
          <h1 className="text-white font-bold text-2xl tracking-wide">
            <a
              href="https://portfolio-xi-gules-z35l4vhvla.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors cursor-pointer"
              aria-label="Open external portfolio"
            >
              PRAKHAR BANSAL
            </a>
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 lg:gap-9 ml-auto">
            {[
              { label: "About", href: "#about-me" },
              { label: "Projects", href: "#projects" },
              { label: "Certificates", href: "#certificates" },
              { label: "Get in touch", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative text-gray-300 font-medium text-lg pb-2 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] scale-x-0 bg-blue-400 transition-transform duration-300 origin-bottom-right hover:scale-x-100 hover:origin-bottom-left"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden ml-auto text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Progress Bar (aligned with navbar bottom) */}
      <div className="fixed left-0 right-0 mx-auto h-[1px] bg-white/20 z-[3001] max-w-[1800px] w-[98%] sm:w-[92%] md:w-[90%]" style={{ top: '4rem' }}>
        <div
          className="h-full bg-white transition-all duration-100 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 flex justify-center items-center bg-[rgba(18,18,18,0.85)] backdrop-blur-md z-[2000] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Close Button (redundant with navbar button); keep for accessibility on smaller screens */}
        <button
          className="absolute top-4 right-4 sm:top-6 sm:right-[5vw] text-white md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={toggleMenu}
          aria-label="Close menu"
          aria-expanded={isOpen}
        >
          <CloseIcon />
        </button>

        {/* Mobile Links */}
        <ul className="text-center space-y-6 sm:space-y-9 px-4">
          {[
            { label: "About", href: "#about-me" },
            { label: "Projects", href: "#projects" },
            { label: "Certificates", href: "#certificates" },
            { label: "Get in touch", href: "#contact" },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={toggleMenu}
                className="text-white text-2xl sm:text-3xl font-semibold hover:text-blue-400 transition-colors block py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
