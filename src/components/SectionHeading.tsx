import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`section-header ${centered ? '' : 'text-left'} ${className}`.trim()}>
      {badge && (
        <div className="badge">
          <span className="badge-dot"></span>
          {badge}
        </div>
      )}
      <h2 className="section-title">
        {title} {highlight && <span className="highlight">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
