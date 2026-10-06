'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/Button';
import { Phone, Mail, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || 'web-dev';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceParam,
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!formData.details.trim()) nextErrors.details = 'Please provide details about your inquiry.';
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const mailtoHref = `mailto:info@smartlinesystems.org?subject=${encodeURIComponent(
    `Project Inquiry from ${formData.name} (${formData.service})`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nProject Details:\n${formData.details}`
  )}`;

  return (
    <div className="contact-form-card">
      <div className="contact-card-header">
        <h2 className="contact-card-title">Send an Inquiry</h2>
        <p className="contact-card-sub">
          Fill out the form below to outline your project requirements.
        </p>
      </div>

      {submitted ? (
        <div style={{ padding: '1.25rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ color: 'var(--brand-orange)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>
            Inquiry Prepared
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '0.85rem' }}>
            Direct server-side transmission is pending backend deployment. Click below to send your details directly via email:
          </p>

          <div style={{ background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-card)', fontSize: '0.8125rem', marginBottom: '1rem' }}>
            <div><strong>From:</strong> {formData.name} ({formData.email})</div>
            <div><strong>Phone:</strong> {formData.phone}</div>
            <div><strong>Service:</strong> {formData.service}</div>
            <div style={{ marginTop: '0.35rem' }}><strong>Details:</strong> {formData.details}</div>
          </div>

          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            <Button href={mailtoHref} variant="primary" size="sm">
              Send via Email Client
              <Mail size={15} />
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
              Edit Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className="form-group">
            <label className="form-label" htmlFor="contactName">Full Name <span className="req" aria-hidden="true">*</span></label>
            <input
              type="text"
              id="contactName"
              name="name"
              className="form-control"
              placeholder="e.g. Priyanshu Sharma"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'contactNameError' : undefined}
              aria-required="true"
              required
            />
            {errors.name && <span id="contactNameError" className="form-error" role="alert">{errors.name}</span>}
          </div>

          <div className="grid-2" style={{ gap: '0.75rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="contactEmail">Work Email <span className="req" aria-hidden="true">*</span></label>
              <input
                type="email"
                id="contactEmail"
                name="email"
                className="form-control"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'contactEmailError' : undefined}
                aria-required="true"
                required
              />
              {errors.email && <span id="contactEmailError" className="form-error" role="alert">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contactPhone">Phone Number <span className="req" aria-hidden="true">*</span></label>
              <input
                type="tel"
                id="contactPhone"
                name="phone"
                className="form-control"
                placeholder="+91 98284 77222"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'contactPhoneError' : undefined}
                aria-required="true"
                required
              />
              {errors.phone && <span id="contactPhoneError" className="form-error" role="alert">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="projectScope">Service Focus</label>
            <select
              id="projectScope"
              name="service"
              className="form-control"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="web-dev">Web Development</option>
              <option value="ai-saas">(SAAS) apps with AI</option>
              <option value="cloud-bookkeeping">Cloud-Based Bookkeeping</option>
              <option value="mobile-apps">Mobile App Development</option>
              <option value="iot">Internet of Things (IoT)</option>
              <option value="consulting">Strategic Tech Consulting</option>
              <option value="outsourcing">Outsourcing &amp; Engineering Pods</option>
              <option value="products">Innovative Products &amp; CDN</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="projectDetails">Project Requirements <span className="req" aria-hidden="true">*</span></label>
            <textarea
              id="projectDetails"
              name="details"
              rows={3}
              className="form-control"
              placeholder="Outline your timeline, goals, and technical specifications..."
              value={formData.details}
              onChange={handleChange}
              aria-invalid={!!errors.details}
              aria-describedby={errors.details ? 'projectDetailsError' : undefined}
              aria-required="true"
              required
            ></textarea>
            {errors.details && <span id="projectDetailsError" className="form-error" role="alert">{errors.details}</span>}
          </div>

          <Button type="submit" variant="primary" size="md" className="btn-pill" style={{ width: '100%', marginTop: 'auto', paddingTop: '0.65rem', paddingBottom: '0.65rem', justifyContent: 'center' }}>
            Submit Inquiry
            <ArrowRight size={15} className="arrow-right" aria-hidden="true" />
          </Button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="contact-section">
      <div className="container">
        {/* Page Context Header — Centered & Visually Grounded */}
        <div className="contact-page-header">
          <div className="badge">
            <span className="badge-dot"></span>
            Direct Communication
          </div>
          <h1 className="contact-page-title">
            Contact <span style={{ color: 'var(--brand-orange)' }}>SmartLine Systems</span>
          </h1>
          <p className="contact-page-subtitle">
            Connect directly with our engineering and consulting team for project inquiries, technical advisory, and partnership discussions.
          </p>
        </div>

        {/* Symmetrical Two-Column Cards Grid */}
        <div className="contact-grid-symmetrical">
          {/* Left Column: Direct Contact Channels Card */}
          <div className="contact-channels-card">
            <div className="contact-card-header">
              <h2 className="contact-card-title">Direct Channels</h2>
              <p className="contact-card-sub">
                Reach our team directly for immediate assistance.
              </p>
            </div>

            <div className="contact-channels-list">
              <div className="contact-channel-item">
                <div className="contact-channel-icon" aria-hidden="true">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="contact-channel-label">Telephone &amp; Hotline</div>
                  <div className="contact-channel-value">
                    <a href="tel:+919828477222">+91 98284 77222</a>
                  </div>
                  <div className="contact-channel-sub">Mon – Sat, 9:00 AM – 8:00 PM IST</div>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-channel-label">Official Inquiries &amp; RFP</div>
                  <div className="contact-channel-value">
                    <a href="mailto:info@smartlinesystems.org">info@smartlinesystems.org</a>
                  </div>
                  <div className="contact-channel-sub">Response within 24 business hours</div>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon" aria-hidden="true">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="contact-channel-label">24x7 Operations Support</div>
                  <div className="contact-channel-value">24x7 SLA Operational Coverage</div>
                  <div className="contact-channel-sub">Round-the-clock technical assistance</div>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="contact-channel-icon" aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-channel-label">Headquarters</div>
                  <div className="contact-channel-value">Smartline Systems Tech Park</div>
                  <div className="contact-channel-sub">Technology &amp; Business Solutions</div>
                </div>
              </div>
            </div>

            <div className="contact-status-strip">
              <span className="status-live-dot" aria-hidden="true"></span>
              <span>Engineering &amp; consulting team online to assist</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <Suspense fallback={<div className="contact-form-card" style={{ padding: '2rem' }}>Loading inquiry form...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
