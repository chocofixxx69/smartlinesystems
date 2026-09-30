'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import PackageCard from '@/components/PackageCard';
import Button from '@/components/Button';

interface BasePackageOption {
  id: string;
  name: string;
  price: number;
  days: number;
}

interface AddonOption {
  id: string;
  name: string;
  price: number;
  days: number;
}

const basePackages: BasePackageOption[] = [
  { id: 'designs', name: 'Designs', price: 5999, days: 5 },
  { id: 'web-dev', name: 'Web Development', price: 29999, days: 14 },
  { id: 'ecommerce', name: 'E-commerce Solution', price: 49999, days: 21 },
  { id: 'enterprise', name: 'Custom Enterprise', price: 99999, days: 30 },
];

const addonOptions: AddonOption[] = [
  { id: 'ai', name: 'AI Workflow & LLM Integration', price: 15000, days: 7 },
  { id: 'mobile', name: 'Mobile App Extension', price: 25000, days: 12 },
  { id: 'iot', name: 'IoT Telemetry Integration', price: 20000, days: 10 },
  { id: 'support', name: '24x7 Dedicated SLA Support', price: 9999, days: 0 },
];

export default function PackagesPage() {
  const [selectedBase, setSelectedBase] = useState<string>('web-dev');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const activeBase = basePackages.find((pkg) => pkg.id === selectedBase) || basePackages[1];
  const activeAddonItems = addonOptions.filter((item) => selectedAddons.includes(item.id));

  const totalCost = activeBase.price + activeAddonItems.reduce((acc, curr) => acc + curr.price, 0);
  const totalDays = activeBase.days + activeAddonItems.reduce((acc, curr) => acc + curr.days, 0);

  return (
    <>
      {/* PAGE HERO */}
      <section className="section-compact">
        <div className="container text-center">
          <div className="badge">
            <span className="badge-dot"></span>
            Transparent Pricing
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            Our Service <span style={{ color: 'var(--brand-orange)' }}>Packages</span>
          </h1>
          <p style={{ maxWidth: 680, margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Clear, fixed one-time project costs for design, web development, e-commerce, and enterprise solutions.
          </p>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            <PackageCard
              name="Designs"
              price="5,999"
              period="One-time Project Cost"
              features={[
                'Professional Logo Design',
                'Complete Brand Identity',
                '3 Marketing Collaterals',
                'UI/UX Concept Mockups',
                'Social Media Graphics Pack',
              ]}
              actionHref="/contact?package=designs"
            />

            <PackageCard
              name="Web Development"
              price="29,999"
              period="One-time Project Cost"
              features={[
                'Fully Responsive Website',
                'Custom Frontend Development',
                'Backend System Integration',
                'Performance Optimization',
                'Advanced SEO Configuration',
              ]}
              actionHref="/contact?package=web-dev"
            />

            <PackageCard
              name="E-commerce Solution"
              price="49,999"
              period="One-time Project Cost"
              features={[
                'Complete Online Store Setup',
                'Multiple Payment Gateways',
                'Inventory Management System',
                'Product Catalog Management',
                'Mobile-Responsive Design',
              ]}
              actionHref="/contact?package=ecommerce"
            />

            <PackageCard
              name="Custom Enterprise"
              price="99,999"
              period="One-time Project Cost"
              features={[
                'Comprehensive Consultation',
                'Fully Tailored Solution',
                'Unlimited Revisions',
                '24/7 Technical Support',
                'Scalable Enterprise Architecture',
              ]}
              actionHref="/contact?package=enterprise"
            />
          </div>
        </div>
      </section>

      {/* ESTIMATION CALCULATOR */}
      <section className="section" id="calculator" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <SectionHeading
            badge="Project Estimator"
            title="Scope &amp; Investment"
            highlight="Calculator"
            subtitle="Select a base package and optional specialized add-ons to view an estimated project total and delivery timeline."
          />

          <div className="calculator-wrapper">
            <div className="calc-grid">
              <div>
                <div className="calc-section-title">1. Select Core Service Package</div>
                <div className="calc-options-grid">
                  {basePackages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`calc-option-label ${selectedBase === pkg.id ? 'active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="basePackage"
                        value={pkg.id}
                        checked={selectedBase === pkg.id}
                        onChange={() => setSelectedBase(pkg.id)}
                      />
                      <div className="calc-option-info">
                        <span className="calc-option-name">{pkg.name}</span>
                        <span className="calc-option-price">₹{pkg.price.toLocaleString('en-IN')}</span>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="calc-section-title">2. Optional Capability Add-ons</div>
                <div className="calc-options-grid">
                  {addonOptions.map((addon) => (
                    <label
                      key={addon.id}
                      className={`calc-option-label ${selectedAddons.includes(addon.id) ? 'active' : ''}`}
                    >
                      <input
                        type="checkbox"
                        name="addon"
                        value={addon.id}
                        checked={selectedAddons.includes(addon.id)}
                        onChange={() => handleAddonToggle(addon.id)}
                      />
                      <div className="calc-option-info">
                        <span className="calc-option-name">{addon.name}</span>
                        <span className="calc-option-price">+₹{addon.price.toLocaleString('en-IN')}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Summary Card */}
              <div>
                <div className="calc-summary-card">
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>Estimated Summary</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Calculation based on selected specifications</p>

                  <div className="calc-total-box">
                    <div className="calc-total-label">Total Estimated Cost</div>
                    <div className="calc-total-amount">₹{totalCost.toLocaleString('en-IN')}</div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
                      Selected Deliverables:
                    </div>
                    <ul style={{ margin: 0, padding: 0 }}>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.85rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Package: {activeBase.name}</span>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>₹{activeBase.price.toLocaleString('en-IN')}</span>
                      </li>
                      {activeAddonItems.map((addon) => (
                        <li key={addon.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.85rem' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>{addon.name}</span>
                          <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>+₹{addon.price.toLocaleString('en-IN')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ background: 'var(--brand-orange-light)', border: '1px solid var(--brand-orange-border)', padding: '0.75rem', borderRadius: 'var(--radius-xs)', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--brand-orange)' }}>
                      Estimated Timeline
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', marginTop: '0.15rem' }}>
                      {totalDays} - {totalDays + 5} Business Days
                    </div>
                  </div>

                  <Button href={`/contact?package=${selectedBase}&calc=true`} variant="primary" style={{ width: '100%' }}>
                    Enquire With This Scope
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <SectionHeading
            badge="Frequently Asked"
            title="Common"
            highlight="Questions"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-card)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
              <h4 style={{ marginBottom: '0.4rem', color: 'var(--text-primary)' }}>Are there recurring monthly fees for fixed packages?</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                No. The stated costs are fixed one-time project costs. Ongoing cloud hosting or 24/7 SLA maintenance agreements can be arranged separately based on operational requirements.
              </p>
            </div>

            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-card)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
              <h4 style={{ marginBottom: '0.4rem', color: 'var(--text-primary)' }}>Can extra features be added during project implementation?</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                Yes. If project scope expands during development, additional features are documented through clear change requests with transparent pricing.
              </p>
            </div>

            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-card)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
              <h4 style={{ marginBottom: '0.4rem', color: 'var(--text-primary)' }}>Who owns the intellectual property and code?</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                Upon project completion and final sign-off, full intellectual property and source code ownership transfer directly to your organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
