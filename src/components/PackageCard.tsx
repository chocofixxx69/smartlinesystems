import React from 'react';
import Button from './Button';

interface PackageCardProps {
  name: string;
  icon?: React.ReactNode;
  price: string;
  period?: string;
  subtitle?: string;
  features: string[];
  featured?: boolean;
  ribbon?: string;
  actionHref?: string;
}

export default function PackageCard({
  name,
  icon,
  price,
  period = 'One-time Project Cost',
  subtitle,
  features,
  featured = false,
  ribbon,
  actionHref = '/contact',
}: PackageCardProps) {
  return (
    <div className={`pricing-card ${featured ? 'featured' : ''}`}>
      {ribbon && <div className="pricing-ribbon">{ribbon}</div>}
      {icon && <div className="card-icon">{icon}</div>}
      <h3 className="pricing-name">{name}</h3>
      {subtitle && <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{subtitle}</p>}
      <div className="pricing-price">
        <span className="currency">₹</span>
        <span className="amount">{price}</span>
      </div>
      <div className="pricing-term">{period}</div>
      <ul className="pricing-features">
        {features.map((feature, idx) => (
          <li key={idx} className="pricing-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={actionHref}
        variant={featured ? 'primary' : 'secondary'}
        size="sm"
        style={{ marginTop: 'auto' }}
      >
        Choose Package
      </Button>
    </div>
  );
}
