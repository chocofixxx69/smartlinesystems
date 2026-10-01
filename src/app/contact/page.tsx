'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/Button';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || 'web-dev';
  const packageParam = searchParams.get('package');

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
    if (packageParam) {
      setFormData((prev) => ({ ...prev, service: `package-${packageParam}` }));
    }
  }, [serviceParam, packageParam]);

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
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService/Package: ${formData.service}\n\nProject Details:\n${formData.details}`
  )}`;

  return (
    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: 'var(--shadow-xs)' }}>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>Send an Inquiry</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
        Fill out the form below to outline your project requirements.
      </p>

      {submitted ? (
        <div style={{ padding: '1.5rem', background: 'var(--bg-subtle)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ color: 'var(--brand-orange)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
            Inquiry Prepared
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
            <strong>Backend Integration Notice:</strong> Direct server-side form transmission is currently pending backend mail-service deployment. To ensure your inquiry reaches our team without delay, please use the button below to send your details directly via email:
          </p>

          <div style={{ background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-card)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
            <div><strong>From:</strong> {formData.name} ({formData.email})</div>
            <div><strong>Phone:</strong> {formData.phone}</div>
            <div><strong>Service:</strong> {formData.service}</div>
            <div style={{ marginTop: '0.5rem' }}><strong>Details:</strong> {formData.details}</div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button href={mailtoHref} variant="primary" size="md">
              Send via Default Email Client
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </Button>
            <Button variant="secondary" size="md" onClick={() => setSubmitted(false)}>
              Edit Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
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

          <div className="grid-2" style={{ gap: '1rem' }}>
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
            <label className="form-label" htmlFor="projectScope">Service or Package</label>
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
              <option value="package-designs">Package: Designs (₹5,999)</option>
              <option value="package-web-dev">Package: Web Development (₹29,999)</option>
              <option value="package-ecommerce">Package: E-commerce (₹49,999)</option>
              <option value="package-enterprise">Package: Custom Enterprise (₹99,999)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="projectDetails">Project Requirements <span className="req" aria-hidden="true">*</span></label>
            <textarea
              id="projectDetails"
              name="details"
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

          <Button type="submit" variant="primary" size="lg" style={{ width: '100%', marginTop: '0.5rem' }}>
            Submit Inquiry
          </Button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="section-compact">
        <div className="container text-center">
          <div className="badge">
            <span className="badge-dot"></span>
            Direct Communication
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            Contact <span style={{ color: 'var(--brand-orange)' }}>SmartLine Systems</span>
          </h1>
          <p style={{ maxWidth: 680, margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Connect with our engineering and consulting team for project inquiries, technical advisory, and partnership discussions.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            {/* Form Column */}
            <Suspense fallback={<div style={{ padding: '2rem' }}>Loading form...</div>}>
              <ContactFormContent />
            </Suspense>

            {/* Direct Channels Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card">
                <h3 className="card-title">Telephone &amp; Direct Hotline</h3>
                <p className="card-desc">Call or reach out directly to our team during business hours for immediate assistance.</p>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--brand-orange)' }}>
                  <a href="tel:+919828477222" style={{ color: 'inherit' }}>+91 98284 77222</a>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Mon – Sat, 9:00 AM – 8:00 PM IST
                </div>
              </div>

              <div className="card">
                <h3 className="card-title">Official Inquiries &amp; RFP</h3>
                <p className="card-desc">For formal requests for proposals, contract documentation, and corporate enquiries:</p>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <a href="mailto:info@smartlinesystems.org">info@smartlinesystems.org</a>
                </div>
              </div>

              <div className="card" style={{ backgroundColor: 'var(--bg-subtle)' }}>
                <h3 className="card-title">Our 24x7 Support</h3>
                <p className="card-desc">
                  We provide round-the-clock support for product, sales, and technical enquiries. SmartLine Systems ensures a customer-centred experience with 24x7 operational coverage.
                </p>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--brand-orange)' }}>
                  24x7 Operational SLA Coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
