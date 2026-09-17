"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// The list of nav links, so we don't repeat ourselves for desktop + mobile.
const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/courses", label: "Courses" },
  { href: "/tasks", label: "Tasks" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  // TODO: Build your Navbar component here
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="container navbar-inner">
        <Link href="/" className="logo-brand">
          <div className="logo-icon">🎓</div>
          <span className="logo-text">Nexa<span className="logo-accent">Learn</span></span>
        </Link>

        {/* TODO: Add navigation links for '/', '/courses', '/tasks', '/resources' and a link button for '/tasks/new' */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile drawer: only rendered when open */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-menu">
          <div className="container mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
