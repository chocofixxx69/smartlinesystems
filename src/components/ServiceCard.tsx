import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
