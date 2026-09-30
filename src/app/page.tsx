import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import PackageCard from '@/components/PackageCard';

export default function HomePage() {
  return (
    <>
      {/* ================================================================
          HERO — Full editorial composition
          ================================================================ */}
      <section className="hero-section">
        {/* Background image: full-bleed right, fades into page */}
        <div className="hero-bg-container" aria-hidden="true">
          <div className="hero-bg-image" style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }} />
        </div>

        <div className="container hero-container">
          {/* LEFT: Editorial text column */}
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot"></span>
              Technology &amp; Business Management
            </div>

            <h1 className="hero-title">
              Innovate<br />
              <span className="highlight-text">Possibilities</span>
            </h1>

            <p className="hero-lead">
              People, Cloud-Based Bookkeeping and Business Management
              Solutions designed for growing enterprises seeking scalable
              digital infrastructure.
            </p>

            <div className="hero-cta-group">
              <Button href="/contact" variant="primary" size="lg" id="heroPrimaryCta">
                Get Started
                <svg className="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </Button>
              <Button href="/services" variant="secondary" size="lg" id="heroSecondaryCta">
                Explore Services
              </Button>
            </div>
          </div>

          {/* RIGHT: Floating status pill, anchored in image zone */}
          <div className="hero-badge-floating" aria-hidden="true">
            <div className="hero-floating-pill">
              <span className="live-pulse"></span>
              <span>Global Cloud &amp; Analytics Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          STATS STRIP — Credential bar: clean, consistent, brand-orange
          ================================================================ */}
      <section className="stats-strip" aria-label="Company highlights">
        <div className="container">
          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="stat-text">
                <div className="stat-value">6<span>+</span></div>
                <div className="stat-label">Years of Innovation</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div className="stat-text">
                <div className="stat-value">50<span>+</span></div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <div className="stat-text">
                <div className="stat-value">24<span>/7</span></div>
                <div className="stat-label">Dedicated Support</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <div className="stat-text">
                <div className="stat-value">100<span>%</span></div>
                <div className="stat-label">Cloud-Native Systems</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          SERVICES — Editorial left-aligned heading + icon cards
          ================================================================ */}
      <section className="section">
        <div className="container">
          {/* Editorial split heading */}
          <div className="services-editorial-header">
            <div className="services-editorial-left">
              <div className="badge">
                <span className="badge-dot"></span>
                Core Solutions
              </div>
              <h2 className="services-editorial-title">
                Our<br /><span style={{ color: 'var(--brand-orange)' }}>Services</span>
              </h2>
            </div>
            <div className="services-editorial-right">
              <p className="services-editorial-desc">
                Empowering businesses through innovative technology, custom engineering,
                and reliable digital systems built for growth and scale.
              </p>
              <Link href="/services" className="services-editorial-link">
                View All Services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* 4-column icon service grid */}
          <div className="services-icon-grid">
            <div className="service-icon-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="service-icon-title">SaaS apps with AI</h3>
              <p className="service-icon-desc">Automate business workflows integrating Advanced AI to predict future endeavors.</p>
              <Link href="/services" className="service-icon-link">Explore →</Link>
            </div>

            <div className="service-icon-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h3 className="service-icon-title">Design &amp; Development</h3>
              <p className="service-icon-desc">Lightweight Web and Mobile Applications engineered for reliability and user adoption.</p>
              <Link href="/services" className="service-icon-link">Explore →</Link>
            </div>

            <div className="service-icon-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <h3 className="service-icon-title">Cloud Bookkeeping</h3>
              <p className="service-icon-desc">Centralized financial data systems that streamline operations, auditing, and corporate accounting.</p>
              <Link href="/services" className="service-icon-link">Explore →</Link>
            </div>

            <div className="service-icon-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h3 className="service-icon-title">Internet of Things</h3>
              <p className="service-icon-desc">Hardware and software integration with IoT telemetry for connected business systems.</p>
              <Link href="/services" className="service-icon-link">Explore →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TECHNOLOGY & CAPABILITIES
          ================================================================ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <div className="badge">
                <span className="badge-dot"></span>
                Digital Transformation
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.15rem' }}>Innovative Technology</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.0625rem', lineHeight: '1.7' }}>
                Smartline Systems combines tech expertise and business intelligence to catalyze change and deliver results. We concentrate on Web Application Development, Mobile Engineering, Design Services, SEO, and Enterprise Resource Planning.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="tag-item">Web Applications</span>
                <span className="tag-item">Mobile Engineering</span>
                <span className="tag-item">Cloud Computing</span>
                <span className="tag-item">Artificial Intelligence</span>
                <span className="tag-item">ERP Software</span>
                <span className="tag-item">SEO</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Technical Expertise Focus</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {[
                  { label: 'Web Development', pct: 95 },
                  { label: 'Cloud Computing', pct: 90 },
                  { label: 'Mobile App Development', pct: 88 },
                  { label: 'Artificial Intelligence', pct: 85 },
                  { label: 'Data Analytics', pct: 82 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.875rem', fontWeight: 600 }}>
                      <span>{label}</span>
                      <span style={{ color: 'var(--brand-orange)' }}>{pct}%</span>
                    </div>
                    <div style={{ height: 6, background: 'var(--border-light)', borderRadius: 3, overflow: 'hidden' }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${label} proficiency`}>
                      <div style={{ width: `${pct}%`, height: '100%', background: 'var(--brand-orange)' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          ABOUT COMPANY — Left-aligned editorial split
          ================================================================ */}
      <section className="section">
        <div className="container">
          <div className="about-editorial-grid">
            <div className="about-editorial-left">
              <div className="badge">
                <span className="badge-dot"></span>
                About SmartLine Systems
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                At the Forefront of<br />
                <span style={{ color: 'var(--brand-orange)' }}>Cloud &amp; AI</span>
              </h2>
            </div>
            <div className="about-editorial-right">
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                Smartline Systems Pvt. Ltd. is an innovative tech startup dedicated to delivering cutting-edge Cloud Computing and Artificial Intelligence solutions that empower businesses to achieve unparalleled success in today&apos;s competitive landscape.
              </p>
              <Button href="/about" variant="secondary" size="md">
                Learn More About Us
                <svg className="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PACKAGES PREVIEW
          ================================================================ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <SectionHeading
            badge="Turnkey Pricing"
            title="Service"
            highlight="Packages"
            subtitle="Transparent, fixed one-time project costs tailored for businesses of all stages."
          />

          <div className="grid-4">
            <PackageCard
              name="Designs"
              price="5,999"
              subtitle="Brand Identity Package"
              features={[
                'Professional Logo Design',
                'Complete Brand Identity',
                '3 Marketing Collaterals',
                'UI/UX Concept Mockups',
                'Social Media Graphics Pack',
              ]}
              actionHref="/packages"
            />
            <PackageCard
              name="Web Development"
              price="29,999"
              subtitle="Full Website Solution"
              features={[
                'Fully Responsive Website',
                'Custom Frontend Development',
                'Backend System Integration',
                'Performance Optimization',
                'Advanced SEO Configuration',
              ]}
              actionHref="/packages"
            />
            <PackageCard
              name="E-commerce Solution"
              price="49,999"
              subtitle="Online Storefront"
              features={[
                'Complete Online Store Setup',
                'Multiple Payment Gateways',
                'Inventory Management System',
                'Product Catalog Management',
                'Mobile-Responsive Design',
              ]}
              actionHref="/packages"
            />
            <PackageCard
              name="Custom Enterprise"
              price="99,999"
              subtitle="Tailored Architecture"
              features={[
                'Comprehensive Consultation',
                'Fully Tailored Solution',
                'Unlimited Revisions',
                '24/7 Technical Support',
                'Scalable Enterprise Architecture',
              ]}
              actionHref="/packages"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button href="/packages" variant="secondary" size="md">
              View All Packages
              <svg className="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA — Bold, confident close
          ================================================================ */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Start Your<br />
                <span style={{ color: 'var(--brand-orange)' }}>Digital Transformation</span>
              </h2>
              <p className="cta-banner-desc">
                Connect with our technology consulting team to discuss your requirements
                and explore tailored enterprise solutions.
              </p>
              <div className="cta-banner-actions">
                <Button href="/contact" variant="primary" size="lg">
                  Get Started
                  <svg className="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Button>
                <Button href="/interns" variant="secondary" size="lg">
                  View Talent Directory
                </Button>
              </div>
            </div>
            <div className="cta-banner-decoration" aria-hidden="true">
              <div className="cta-deco-ring cta-deco-ring--1"></div>
              <div className="cta-deco-ring cta-deco-ring--2"></div>
              <div className="cta-deco-ring cta-deco-ring--3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
