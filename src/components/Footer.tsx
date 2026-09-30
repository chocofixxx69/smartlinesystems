import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-logo" style={{ marginBottom: '1rem' }}>
              <div className="brand-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="brand-text">
                <span className="title">SmartLine<span>Systems</span></span>
                <span className="tagline">Technology &amp; Business Solutions</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: '1.6', maxWidth: '340px' }}>
              Smartline Systems Pvt. Ltd. provides cloud-based bookkeeping, workflow automation, and custom technology solutions for growing enterprises.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/packages" className="footer-link">Packages</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/interns" className="footer-link">Interns</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Service Packages</h4>
            <div className="footer-links">
              <Link href="/packages" className="footer-link">Designs (₹5,999)</Link>
              <Link href="/packages" className="footer-link">Web Dev (₹29,999)</Link>
              <Link href="/packages" className="footer-link">E-commerce (₹49,999)</Link>
              <Link href="/packages" className="footer-link">Custom Enterprise (₹99,999)</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Direct Inquiries</h4>
            <div className="footer-links">
              <a href="mailto:info@smartlinesystems.org" className="footer-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@smartlinesystems.org
              </a>
              <a href="tel:+919828477222" className="footer-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 98284 77222
              </a>
              <div className="footer-link" style={{ color: 'var(--text-muted)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-orange)" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Smartline Systems Tech Park
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Smartline Systems Pvt. Ltd. All rights reserved.</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            Technology &amp; Business Solutions
          </div>
        </div>
      </div>
    </footer>
  );
}
