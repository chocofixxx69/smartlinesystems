import React from 'react';
import Link from 'next/link';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-logo" style={{ marginBottom: '1rem' }}>
              <div className="brand-icon-box">
                <Code2 size={20} strokeWidth={2.2} />
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
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/interns" className="footer-link">Interns</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Direct Inquiries</h4>
            <div className="footer-links">
              <a href="mailto:info@smartlinesystems.org" className="footer-link">
                <Mail size={16} stroke="var(--brand-orange)" strokeWidth={2} />
                info@smartlinesystems.org
              </a>
              <a href="tel:+919828477222" className="footer-link">
                <Phone size={16} stroke="var(--brand-orange)" strokeWidth={2} />
                +91 98284 77222
              </a>
              <div className="footer-link" style={{ color: 'var(--text-muted)' }}>
                <MapPin size={16} stroke="var(--brand-orange)" strokeWidth={2} />
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
