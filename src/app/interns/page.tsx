import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import InternCard from '@/components/InternCard';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

interface InternProfile {
  id: string;
  name: string;
  role: string;
  initials: string;
  email: string;
  phone: string;
  techStack: string[];
  resumeUrl?: string;
}

const internsData: InternProfile[] = [
  {
    id: 'himanshu',
    name: 'Himanshu Sharma',
    role: 'Software Engineering Intern',
    initials: 'HS',
    email: 'sharmaslov@gmail.com',
    phone: '+91 98284 77222',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'TypeScript'],
    resumeUrl: 'https://drive.google.com/file/d/1nT2wOGQjM3qi2eKDnFTBALZiLYE-0ymA/view?usp=sharing',
  },
  {
    id: 'akash',
    name: 'Akash',
    role: 'Frontend Intern',
    initials: 'AK',
    email: 'akashsaminathan24@gmail.com',
    phone: '+91 98407 29884',
    techStack: ['Next.js', 'React', 'Tailwind'],
    resumeUrl: undefined,
  },
  {
    id: 'sriram',
    name: 'Sriram V',
    role: 'Full Stack Intern',
    initials: 'SV',
    email: 'sri20jan5@gmail.com',
    phone: '+91 70105 57145',
    techStack: ['React', 'Python Flask', 'PostgreSQL', 'Express JS'],
    resumeUrl: 'https://drive.google.com/file/d/1A3a9Eh5TGGlbKtZH3AXuK5XgjRQMpvAH/view?usp=sharing',
  },
  {
    id: 'sampreeth',
    name: 'Sampreeth',
    role: 'Software Engineering Intern',
    initials: 'SA',
    email: 'saisampreeth56@gmail.com',
    phone: '+91 80083 28282',
    techStack: ['Python', 'Machine Learning', 'Express', 'MySQL', 'Java'],
    resumeUrl: 'https://drive.google.com/file/d/1LKGcxYj2dxLQEPqsD134PmhGJlpM0PmJ/view?usp=sharing',
  },
];

export default function InternsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="section-compact">
        <div className="container text-center">
          <div className="badge">
            <span className="badge-dot"></span>
            Engineering Talent &amp; Training
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            Our Talented <span style={{ color: 'var(--brand-orange)' }}>Interns</span>
          </h1>
          <p style={{ maxWidth: 680, margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            SmartLine Systems fosters engineering talent across full stack development, cloud infrastructure, and artificial intelligence.
          </p>
        </div>
      </section>

      {/* INTERNS DIRECTORY */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {internsData.map((intern) => (
              <InternCard
                key={intern.id}
                name={intern.name}
                role={intern.role}
                initials={intern.initials}
                email={intern.email}
                phone={intern.phone}
                techStack={intern.techStack}
                resumeUrl={intern.resumeUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING & TALENT COMMITMENT */}
      <section className="section-compact" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container" style={{ maxWidth: 840, textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Our Talent &amp; Training Commitment</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
            In addition to its core offerings, Smartline Systems specializes in providing comprehensive training and consulting services, ensuring both employees and clients are equipped with the knowledge and skills to navigate the ever-evolving technological landscape.
          </p>
          <Button href="/contact" variant="primary" size="md">
            Inquire About Training Programs
            <ArrowRight size={16} className="arrow-right" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </>
  );
}
