import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled || mobileMenuOpen ? "scrolled" : "not-scrolled"}`}>
      <div className="inner relative">
        <a href="#hero" className="logo flex items-center gap-2">
          <span className="font-bold text-white tracking-wide">Lakshya</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono">
            AI &amp; Dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side contact & mobile toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="contact-btn group hidden sm:flex">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-white-50 hover:text-white bg-black-50 border border-black-50/80 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-5 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map(({ link, name }) => (
              <a
                key={name}
                href={link}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-lg text-white-50 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-lg bg-white text-black font-semibold hover:bg-white-50 transition-colors"
            >
              Contact me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
