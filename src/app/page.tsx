import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import {
  ArrowRight,
  Cloud,
  BarChart3,
  TrendingUp,
  Clock,
  Users,
  Activity,
  LayoutDashboard,
  Code2,
  ReceiptText,
  Wifi,
  Mail,
  CheckCircle2,
} from 'lucide-react';

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
        {/* Soft Warm Orange Curved Accent & Ambient Orbs */}
        <div className="hero-corner-swoop" aria-hidden="true" />
        <div className="hero-ambient-orb-top-right" aria-hidden="true" />
        <div className="hero-ambient-orb-mid-left" aria-hidden="true" />
        <div className="hero-ambient-orb-bottom-right" aria-hidden="true" />

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
              Innovate <span className="hero-break-mobile"><br /></span>Possibilities.<br />
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
                <ArrowRight size={16} className="arrow-right" aria-hidden="true" />
              </Button>
              <Button href="/services" variant="secondary" size="lg" className="btn-pill" id="heroSecondaryCta">
                Explore Services
              </Button>
            </div>

            {/* Mobile Visual & Feature Trio (Matching Reference Image 1) */}
            <div className="hero-mobile-visual" aria-hidden="true">
              <div className="hero-mobile-image-wrap">
                <img
                  src="/assets/hero-mobile-visual.jpg"
                  alt="SmartLine Systems Cloud &amp; AI Enterprise Platform"
                  className="hero-mobile-img"
                  loading="eager"
                />
              </div>

              <div className="hero-feature-trio">
                <div className="feature-trio-item">
                  <div className="feature-trio-icon">
                    <Cloud size={18} />
                  </div>
                  <div className="feature-trio-title">Cloud Ready</div>
                  <div className="feature-trio-sub">Scalable &amp; Secure</div>
                </div>

                <div className="feature-trio-item">
                  <div className="feature-trio-icon">
                    <BarChart3 size={18} />
                  </div>
                  <div className="feature-trio-title">AI Powered</div>
                  <div className="feature-trio-sub">Smarter Decisions</div>
                </div>

                <div className="feature-trio-item">
                  <div className="feature-trio-icon">
                    <TrendingUp size={18} />
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
                <Clock size={20} />
              </div>
              <div className="stat-text">
                <div className="stat-value">6<span>+</span></div>
                <div className="stat-label">Years of Innovation</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <Users size={20} />
              </div>
              <div className="stat-text">
                <div className="stat-value">50<span>+</span></div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <Cloud size={20} />
              </div>
              <div className="stat-text">
                <div className="stat-value">100<span>%</span></div>
                <div className="stat-label">Cloud-Native Systems</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-circle" aria-hidden="true">
                <Activity size={20} />
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
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* 4-column icon service grid */}
          <div className="services-icon-grid">
            <div className="service-icon-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <LayoutDashboard size={28} />
              </div>
              <h3 className="service-icon-title">SaaS apps with AI</h3>
              <p className="service-icon-desc">Automate business workflows integrating Advanced AI to predict future endeavors.</p>
              <Link href="/services" className="service-icon-link">Explore →</Link>
            </div>

            <div className="service-icon-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <Code2 size={28} />
              </div>
              <h3 className="service-icon-title">Design &amp; Development</h3>
              <p className="service-icon-desc">Lightweight Web and Mobile Applications engineered for reliability and user adoption.</p>
              <Link href="/services" className="service-icon-link">Explore →</Link>
            </div>

            <div className="service-icon-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <ReceiptText size={28} />
              </div>
              <h3 className="service-icon-title">Cloud Bookkeeping</h3>
              <p className="service-icon-desc">Centralized financial data systems that streamline operations, auditing, and corporate accounting.</p>
              <Link href="/services" className="service-icon-link">Explore →</Link>
            </div>

            <div className="service-icon-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <Wifi size={28} />
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
                <ArrowRight size={16} className="arrow-right" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

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
                  <ArrowRight size={16} className="arrow-right" aria-hidden="true" />
                </Button>
                <Button href="/services" variant="secondary" size="lg" className="btn-pill" id="ctaBannerSecondaryBtn">
                  Explore Services
                </Button>
              </div>
            </div>

            <div className="cta-banner-contact-card">
              <div className="cta-contact-item">
                <div className="cta-contact-icon" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <div className="cta-contact-text">
                  <div className="cta-contact-label">Direct Consultation</div>
                  <div className="cta-contact-value">contact@smartlinesystems.com</div>
                </div>
              </div>

              <div className="cta-contact-item">
                <div className="cta-contact-icon" aria-hidden="true">
                  <Clock size={18} />
                </div>
                <div className="cta-contact-text">
                  <div className="cta-contact-label">Response Time</div>
                  <div className="cta-contact-value">Within 24 Business Hours</div>
                </div>
              </div>

              <div className="cta-contact-item">
                <div className="cta-contact-icon" aria-hidden="true">
                  <CheckCircle2 size={18} />
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
