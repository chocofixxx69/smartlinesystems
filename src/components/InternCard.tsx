import React from 'react';
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            {email}
          </a>
          <a href={`tel:${phone.replace(/\s+/g, '')}`} className="intern-contact-link" aria-label={`Call ${name} at ${phone}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
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
