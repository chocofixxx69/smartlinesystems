import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="section-compact">
        <div className="container text-center">
          <div className="badge">
            <span className="badge-dot"></span>
            Company Profile &amp; Mission
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            About <span style={{ color: 'var(--brand-orange)' }}>SmartLine Systems</span>
          </h1>
          <p style={{ maxWidth: 680, margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            An innovative tech startup combining technical expertise and business intelligence to deliver results across Cloud Computing and Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* EDITORIAL COMPANY STORY: VISION, JOURNEY, COMMITMENT */}
      <section className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

            {/* Vision Editorial Block */}
            <div style={{ borderLeft: '3px solid var(--brand-orange)', paddingLeft: '1.75rem' }}>
              <div style={{ fontSize: '0.8125rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--brand-orange)', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Core Purpose
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>Our Vision</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Smartline Systems Pvt. Ltd. is an innovative tech startup at the forefront of Cloud Computing and Artificial Intelligence (AI), dedicated to delivering cutting-edge solutions that empower businesses to achieve unparalleled success in today’s competitive landscape.
              </p>
            </div>

            {/* Journey Editorial Block */}
            <div style={{ borderLeft: '3px solid var(--border-hover)', paddingLeft: '1.75rem' }}>
              <div style={{ fontSize: '0.8125rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Evolution
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>Our Journey</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Founded by a team of passionate tech enthusiasts, the company initially focused on product development and quickly evolved into a dynamic force in the tech industry. Through focused engineering discipline and agile iterations, SmartLine expanded its capabilities to bridge hardware, software, and machine intelligence.
              </p>
            </div>

            {/* Commitment Editorial Block */}
            <div style={{ borderLeft: '3px solid var(--border-hover)', paddingLeft: '1.75rem' }}>
              <div style={{ fontSize: '0.8125rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                Talent &amp; Enablement
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>Our Commitment</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                In addition to its core offerings, Smartline Systems specializes in providing comprehensive training and consulting services, ensuring both employees and clients are equipped with the knowledge and skills to navigate the ever-evolving technological landscape.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL EXPERTISE & DIGITAL TRANSFORMATION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            <div>
              <div className="badge">
                <span className="badge-dot"></span>
                Technology Domains
              </div>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '0.85rem' }}>Digital Transformation</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Smartline Systems combines tech expertise and business intelligence to catalyze change and deliver results. As a Tech-Startup Enterprise, we concentrate on Web Application Development, Mobile Application Development, Design Services, Search Engine Optimization, and Enterprise Resource Planning Softwares.
              </p>
              <Button href="/contact" variant="primary" size="md">
                Consult With Us
              </Button>
            </div>

            <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Technical Expertise Benchmarks
              </h3>

              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-meta">
                    <span>Web Development</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-track" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} aria-label="Web Development proficiency">
                    <div className="skill-fill" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-meta">
                    <span>Cloud Computing</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-track" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} aria-label="Cloud Computing proficiency">
                    <div className="skill-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-meta">
                    <span>Mobile App Development</span>
                    <span className="skill-percentage">88%</span>
                  </div>
                  <div className="skill-track" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} aria-label="Mobile App Development proficiency">
                    <div className="skill-fill" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-meta">
                    <span>Artificial Intelligence</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-track" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} aria-label="Artificial Intelligence proficiency">
                    <div className="skill-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-meta">
                    <span>Data Analytics</span>
                    <span className="skill-percentage">82%</span>
                  </div>
                  <div className="skill-track" role="progressbar" aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} aria-label="Data Analytics proficiency">
                    <div className="skill-fill" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP QUOTE BANNER */}
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="quote-banner">
            <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="quote-text">
              “Innovation distinguishes between a leader and a follower.”
            </blockquote>
            <div className="quote-author">Steve Jobs</div>
            <div className="quote-role">Apple Co-Founder</div>
          </div>
        </div>
      </section>
    </>
  );
}
