import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import Button from './Button';

interface InternCardProps {
  name: string;
  role: string;
  initials: string;
  email: string;
  phone: string;
  techStack: string[];
  resumeUrl?: string;
}

export default function InternCard({
  name,
  role,
  initials,
  email,
  phone,
  techStack,
  resumeUrl,
}: InternCardProps) {
  return (
    <div className="intern-card">
      <div className="intern-header">
        <div className="intern-avatar">{initials}</div>
        <div>
          <div className="intern-role">{role}</div>
          <h3 className="intern-name">{name}</h3>
        </div>
      </div>
      <div className="intern-body">
        <div className="intern-contacts">
          <a href={`mailto:${email}`} className="intern-contact-link" aria-label={`Email ${name} at ${email}`}>
            <Mail size={16} aria-hidden="true" />
            {email}
          </a>
          <a href={`tel:${phone.replace(/\s+/g, '')}`} className="intern-contact-link" aria-label={`Call ${name} at ${phone}`}>
            <Phone size={16} aria-hidden="true" />
            {phone}
          </a>
        </div>

        <div className="intern-stack">
          <div className="intern-stack-title">Core Technologies</div>
          <div className="tag-list">
            {techStack.map((tech) => (
              <span key={tech} className="tag-item">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="intern-action-btn">
          {resumeUrl ? (
            <Button
              href={resumeUrl}
              variant="outline-orange"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              style={{ width: '100%' }}
              aria-label={`View Resume for ${name} (opens in new tab)`}
            >
              View Resume
              <ExternalLink size={14} aria-hidden="true" />
            </Button>
          ) : (
            <Button
              href={`mailto:${email}?subject=Profile%20Inquiry%20via%20SmartLine`}
              variant="secondary"
              size="sm"
              className="w-full"
              style={{ width: '100%' }}
              aria-label={`Contact ${name} via email`}
            >
              Resume Unavailable (Contact)
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
