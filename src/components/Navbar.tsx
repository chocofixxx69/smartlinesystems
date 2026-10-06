'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, ArrowRight, Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => document.body.classList.remove('nav-open');
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Interns', href: '/interns' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="brand-logo" id="navLogo">
          <div className="brand-icon-box" aria-hidden="true">
            <Code2 size={20} strokeWidth={2.2} />
          </div>
          <div className="brand-text">
            <span className="title">SmartLine<span>Systems</span></span>
            <span className="tagline">Technology &amp; Business Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <Button href="/contact" variant="primary" size="sm" className="btn-pill" id="navCtaBtn">
            Get Started
            <ArrowRight className="arrow-right" size={15} strokeWidth={2.2} aria-hidden="true" />
          </Button>

          <button
            className="mobile-nav-toggle"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobileNavDrawer"
            type="button"
          >
            {isOpen ? (
              <X size={24} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={24} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <nav
        id="mobileNavDrawer"
        className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!isOpen}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
        <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <Button href="/contact" variant="primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsOpen(false)}>
            Get Started
            <ArrowRight className="arrow-right" size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
