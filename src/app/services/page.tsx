import React from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { LayoutDashboard, Code2, Smartphone, Wifi, Globe, Terminal } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="section-compact">
        <div className="container text-center">
          <div className="badge">
            <span className="badge-dot"></span>
            Technical Capabilities &amp; Solutions
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            Our Services &amp; <span style={{ color: 'var(--brand-orange)' }}>Capabilities</span>
          </h1>
          <p style={{ maxWidth: 680, margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Empowering businesses through innovative technology solutions, custom software engineering, modern cloud frameworks, and 24x7 ongoing operational support.
          </p>
        </div>
      </section>

      {/* PRIMARY SOLUTIONS & ENGINEERING */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>Software Engineering &amp; Applied AI</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Core development capabilities spanning web platforms, mobile ecosystems, machine intelligence, and connected hardware.</p>
          </div>

          <div className="grid-2">
            <ServiceCard
              title="(SAAS) apps with AI"
              description="With SAAS applications, we automate business workflows integrating with Advanced Artificial Intelligence to automate industries and predict future endeavors."
              tags={['AI Workflows', 'SaaS Architecture', 'Automation']}
              actionHref="/contact?service=ai-saas"
              actionText="Discuss AI SaaS"
              icon={<LayoutDashboard size={22} />}
            />

            <ServiceCard
              title="Design and Development"
              description="We love designing creative stuffs and we have expertise in developing lightweight Web and Mobile Applications engineered for reliability and user adoption."
              tags={['UI/UX Design', 'Web Platforms', 'Lightweight Apps']}
              actionHref="/contact?service=web-dev"
              actionText="Discuss Web Dev"
              icon={<Code2 size={22} />}
            />

            <ServiceCard
              title="Mobile App Development"
              description="Get a Mobile App which is the glue for all other digital industries to use when approaching convergence across consumer touchpoints."
              tags={['iOS & Android', 'Cross-Platform', 'Mobile Ecosystem']}
              actionHref="/contact?service=mobile-apps"
              actionText="Discuss Mobile Apps"
              icon={<Smartphone size={22} />}
            />

            <ServiceCard
              title="Internet of Things (IoT)"
              description="SmartLine Systems combines hardware and software innovation. Our IoT solutions are integrated with telemetry streams and real-time sensor data for connected business systems."
              tags={['Hardware Integration', 'Sensor Telemetry', 'IoT Gateways']}
              actionHref="/contact?service=iot"
              actionText="Discuss IoT Integration"
              icon={<Wifi size={22} />}
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS & ENTERPRISE SYSTEMS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>Products &amp; Infrastructure</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Proprietary infrastructure and customized software engineering frameworks.</p>
          </div>

          <div className="grid-2">
            <ServiceCard
              title="Innovative Products &amp; CDN"
              description="Developing future tech products that innovates the future with quality and having user-friendly products is our CDN's Mission."
              tags={['Content Delivery', 'Distributed Systems', 'Edge Technology']}
              actionHref="/contact?service=products"
              actionText="Learn More"
              icon={<Globe size={22} />}
            />

            <ServiceCard
              title="Development"
              description="Custom software solutions and innovations built to address unique operational bottlenecks and modernize enterprise systems."
              tags={['Custom Architecture', 'Backend Services', 'API Integration']}
              actionHref="/contact?service=web-dev"
              actionText="Learn More"
              icon={<Terminal size={22} />}
            />
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVISORY, TALENT & 24/7 SUPPORT */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>Advisory, Training &amp; Operational Support</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Strategic guidance, talent enablement, and mission-critical support services.</p>
          </div>

          <div className="grid-4">
            <div className="card">
              <h3 className="card-title">Training</h3>
              <p className="card-desc">Comprehensive skill development programs ensuring both employees and client teams are equipped with modern tech competencies.</p>
              <Link href="/interns" className="card-link">
                View Programs &rarr;
              </Link>
            </div>

            <div className="card">
              <h3 className="card-title">Consulting</h3>
              <p className="card-desc">Strategic tech guidance for businesses seeking to evaluate technical debt, architect migrations, and adopt cloud platforms.</p>
              <Link href="/contact?service=consulting" className="card-link">
                Request Guidance &rarr;
              </Link>
            </div>

            <div className="card">
              <h3 className="card-title">Outsourcing</h3>
              <p className="card-desc">Efficient outsourcing solutions providing dedicated software engineering pods and project delivery capacity.</p>
              <Link href="/contact?service=outsourcing" className="card-link">
                Discuss Pods &rarr;
              </Link>
            </div>

            <div className="card">
              <h3 className="card-title">Our 24x7 Support</h3>
              <p className="card-desc">We provide round-the-clock support for product, sales, and technical enquiries. SmartLine Systems ensures a customer-centred experience with 24x7 operational SLA coverage.</p>
              <Link href="/contact" className="card-link">
                Contact Support &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section-compact" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Need a Custom Technical Architecture?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Connect directly with our consultants for an individualized scope.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary" size="md">Contact an Architect</Button>
          </div>
        </div>
      </section>
    </>
  );
}
