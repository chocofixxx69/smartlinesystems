import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        {/* Half-side Background Image with Smooth Gradient Fade */}
        <div className="hero-bg-container" aria-hidden="true">
          <div className="hero-bg-image" style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }} />
          <div className="hero-bg-fade" />
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot"></span>
              Technology &amp; Business Management
            </div>
            <h1 className="hero-title">
              Innovate <span className="highlight-text">Possibilities</span>
            </h1>
            <p className="hero-lead">
              People, Cloud-Based Bookkeeping and Business Management Solutions designed for growing enterprises seeking scalable digital infrastructure.
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

            <div className="hero-highlights-row">
              <div className="hero-highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Cloud Bookkeeping
              </div>
              <div className="hero-highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Custom Software &amp; AI
              </div>
              <div className="hero-highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                24x7 Dedicated Support
              </div>
            </div>
          </div>

          {/* Floating Live Enterprise Status Pill */}
          <div className="hero-badge-floating" aria-hidden="true">
            <div className="hero-floating-pill">
              <span className="live-pulse"></span>
              <span>Global Cloud &amp; Analytics Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* CURATED SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Core Solutions"
            title="Our"
            highlight="Services"
            subtitle="Empowering businesses through innovative technology, custom engineering, and reliable digital systems."
          />

          <div className="grid-2">
            <ServiceCard
              title="(SAAS) apps with AI"
              description="With SAAS applications, we automate business workflows integrating with Advanced Artificial Intelligence to automate industries and predict future endeavors."
              tags={['Workflow Automation', 'AI Integration', 'SaaS']}
              actionHref="/services"
              actionText="Learn More"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />

            <ServiceCard
              title="Design and Development"
              description="We love designing creative stuffs and we have expertise in developing lightweight Web and Mobile Applications engineered for performance."
              tags={['Web Apps', 'Mobile UI', 'Frontend']}
              actionHref="/services"
              actionText="Learn More"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
            />

            <ServiceCard
              title="Cloud-Based Bookkeeping"
              description="Centralized financial data systems and business management software that streamline operations, auditing, and corporate bookkeeping."
              tags={['Bookkeeping', 'Cloud ERP', 'Business Management']}
              actionHref="/services"
              actionText="Learn More"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              }
            />

            <ServiceCard
              title="Internet of Things (IoT)"
              description="CyberDude Network's primary goal is to combine the hardware with software. Cyberdude products are integrated seamlessly with Internet of Things telemetry."
              tags={['Hardware Integration', 'Telemetry', 'Connected Systems']}
              actionHref="/services"
              actionText="Learn More"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              }
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button href="/services" variant="secondary" size="md">
              View All Services
              <svg className="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & CAPABILITIES */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <div className="badge">
                <span className="badge-dot"></span>
                Digital Transformation
              </div>
              <h2 className="section-title">Innovative Technology</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1rem', lineHeight: '1.6' }}>
                Smartline Systems combines tech expertise and business intelligence to catalyze change and deliver results. As a Tech-Startup Enterprise, we concentrate on Web Application Development, Mobile Application Development, Design Services, Search Engine Optimization, and Enterprise Resource Planning Softwares.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="tag-item">Web Applications</span>
                <span className="tag-item">Mobile Engineering</span>
                <span className="tag-item">Cloud Computing</span>
                <span className="tag-item">Artificial Intelligence</span>
                <span className="tag-item">ERP Software</span>
                <span className="tag-item">SEO</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.15rem' }}>Technical Expertise Focus</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    <span>Web Development</span>
                    <span style={{ color: 'var(--brand-orange)' }}>95%</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--border-light)', borderRadius: 3, overflow: 'hidden' }} role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} aria-label="Web Development proficiency">
                    <div style={{ width: '95%', height: '100%', background: 'var(--brand-orange)' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    <span>Cloud Computing</span>
                    <span style={{ color: 'var(--brand-orange)' }}>90%</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--border-light)', borderRadius: 3, overflow: 'hidden' }} role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} aria-label="Cloud Computing proficiency">
                    <div style={{ width: '90%', height: '100%', background: 'var(--brand-orange)' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    <span>Mobile App Development</span>
                    <span style={{ color: 'var(--brand-orange)' }}>88%</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--border-light)', borderRadius: 3, overflow: 'hidden' }} role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} aria-label="Mobile App Development proficiency">
                    <div style={{ width: '88%', height: '100%', background: 'var(--brand-orange)' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    <span>Artificial Intelligence</span>
                    <span style={{ color: 'var(--brand-orange)' }}>85%</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--border-light)', borderRadius: 3, overflow: 'hidden' }} role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} aria-label="Artificial Intelligence proficiency">
                    <div style={{ width: '85%', height: '100%', background: 'var(--brand-orange)' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    <span>Data Analytics</span>
                    <span style={{ color: 'var(--brand-orange)' }}>82%</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--border-light)', borderRadius: 3, overflow: 'hidden' }} role="progressbar" aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} aria-label="Data Analytics proficiency">
                    <div style={{ width: '82%', height: '100%', background: 'var(--brand-orange)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY PREVIEW */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="badge">
              <span className="badge-dot"></span>
              About SmartLine Systems
            </div>
            <h2 className="section-title">At the Forefront of Cloud &amp; AI</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '1.75rem' }}>
              Smartline Systems Pvt. Ltd. is an innovative tech startup at the forefront of Cloud Computing and Artificial Intelligence (AI), dedicated to delivering cutting-edge solutions that empower businesses to achieve unparalleled success in today’s competitive landscape. Founded by a team of passionate tech enthusiasts, the company initially focused on product development and quickly evolved into a dynamic force in the tech industry.
            </p>
            <Button href="/about" variant="secondary" size="md">
              Learn More
              <svg className="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
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
              View Packages
              <svg className="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-md)', padding: '3rem 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: '0.75rem' }}>Start Your Digital Transformation</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto 1.75rem auto', fontSize: '1rem', lineHeight: '1.5' }}>
              Connect with our technology consulting team to discuss your business requirements and explore tailored solutions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
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
        </div>
      </section>
    </>
  );
}
