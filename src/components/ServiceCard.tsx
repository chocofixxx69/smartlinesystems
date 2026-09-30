import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  tags?: string[];
  icon?: React.ReactNode;
  actionHref?: string;
  actionText?: string;
}

export default function ServiceCard({
  title,
  description,
  tags = [],
  icon,
  actionHref = '/contact',
  actionText = 'Explore Service',
}: ServiceCardProps) {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      {tags.length > 0 && (
        <div className="tag-list">
          {tags.map((tag) => (
            <span key={tag} className="tag-item">
              {tag}
            </span>
          ))}
        </div>
      )}
      <Link href={actionHref} className="card-link">
        {actionText}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
