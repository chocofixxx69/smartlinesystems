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
      {/* ================================================================
          HERO — Reference-inspired warm sunlit composition with floating capability cards
          ================================================================ */}
      <section className="hero-section">
        {/* Soft Warm Orange Curved Accent (Bottom-Left) */}
        <div className="hero-corner-swoop" aria-hidden="true" />

        {/* Studio Workspace Visual: Modern angled laptop with SaaS dashboard & orange backdrop */}
        <div className="hero-bg-container" aria-hidden="true">
          <div className="hero-bg-image" />
          <div className="hero-bg-gradient-overlay" />
        </div>

        <div className="container hero-container">
          {/* LEFT: High-Impact Editorial Text Column */}
          <div className="hero-content">
            <div className="hero-badge-pill">
              <span className="hero-badge-dot"></span>
              <span>Engineered for Cloud, AI &amp; Enterprise Growth</span>
            </div>

            <h1 className="hero-title">
              Innovate Possibilities.<br />
              <span className="highlight-text">Built for Scale.</span>
            </h1>

            <p className="hero-lead">
              Track operations, automate cloud bookkeeping, and unlock real-time enterprise AI
              insights — all in one unified platform. SmartLine Systems helps growing organizations
              stay informed, agile, and ahead.
            </p>

            <div className="hero-cta-group">
              <Button href="/contact" variant="primary" size="lg" className="btn-pill" id="heroPrimaryCta">
                Get Started
                <svg className="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </Button>
              <Button href="/services" variant="secondary" size="lg" className="btn-pill" id="heroSecondaryCta">
                Explore Services
              </Button>
            </div>

            {/* Mobile Visual & Feature Trio (Matching Reference Image 1) */}
            <div className="hero-mobile-visual" aria-hidden="true">
              <div className="hero-mobile-image-wrap">
                <img
                  src="/assets/hero-reference-inspired.jpg"
                  alt="SmartLine Systems Cloud &amp; AI Enterprise Platform"
                  className="hero-mobile-img"
                  loading="eager"
                />
              </div>

              <div className="hero-feature-trio">
                <div className="feature-trio-item">
                  <div className="feature-trio-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div className="feature-trio-title">Cloud Ready</div>
                  <div className="feature-trio-sub">Scalable &amp; Secure</div>
                </div>

                <div className="feature-trio-item">
                  <div className="feature-trio-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
                      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
                      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
                    </svg>
                  </div>
                  <div className="feature-trio-title">AI Powered</div>
                  <div className="feature-trio-sub">Smarter Decisions</div>
                </div>

                <div className="feature-trio-item">
                  <div className="feature-trio-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div className="feature-trio-title">Enterprise Grade</div>
                  <div className="feature-trio-sub">Built for Tomorrow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          STATS STRIP — Warm Credential bar: 4 metrics + narrative quote
          ================================================================ */}
      <section className="stats-strip" aria-label="Company highlights and operational scale">
        <div className="container">
          <div className="stats-grid-5">

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div className="stat-text">
                <div className="stat-value">50<span>+</span></div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <div className="stat-text">
                <div className="stat-value">100<span>%</span></div>
                <div className="stat-label">Cloud-Native Systems</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div className="stat-text">
                <div className="stat-value">99.9<span>%</span></div>
                <div className="stat-label">System Uptime SLA</div>
              </div>
            </div>

            <div className="stats-narrative-col">
              <p className="stats-narrative-text">
                From automated cloud bookkeeping to custom enterprise AI, SmartLine Systems stays with you at every step of your digital transformation.
              </p>
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
          <div className="tech-capabilities-grid">
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

            <div className="technical-focus-card">
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
      {/* ================================================================
          FINAL CTA — Grounded Executive Enterprise Action Block
          ================================================================ */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Start Your<br />
                <span className="highlight-text">Digital Transformation</span>
              </h2>
              <p className="cta-banner-desc">
                Connect with our technology consulting team to discuss your software engineering,
                cloud systems, and business management requirements.
              </p>
              <div className="cta-banner-actions">
                <Button href="/contact" variant="primary" size="lg" className="btn-pill" id="ctaBannerPrimaryBtn">
                  Get Started
                  <svg className="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Button>
                <Button href="/services" variant="secondary" size="lg" className="btn-pill" id="ctaBannerSecondaryBtn">
                  Explore Services
                </Button>
              </div>
            </div>

            <div className="cta-banner-contact-card">
              <div className="cta-contact-item">
                <div className="cta-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="cta-contact-text">
                  <div className="cta-contact-label">Direct Consultation</div>
                  <div className="cta-contact-value">contact@smartlinesystems.com</div>
                </div>
              </div>

              <div className="cta-contact-item">
                <div className="cta-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="cta-contact-text">
                  <div className="cta-contact-label">Response Time</div>
                  <div className="cta-contact-value">Within 24 Business Hours</div>
                </div>
              </div>

              <div className="cta-contact-item">
                <div className="cta-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="cta-contact-text">
                  <div className="cta-contact-label">Project Delivery</div>
                  <div className="cta-contact-value">Fixed-Price Turnkey Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
