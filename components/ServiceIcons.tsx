'use client';

import { useTranslations } from 'next-intl';

export default function ServiceIcons() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'cadDesign',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 7h18M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l3-4h12l3 4" />
          <path d="M8 11l2 2 4-4" />
        </svg>
      ),
    },
    {
      key: 'technicalDrawing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 3v4a1 1 0 001 1h4" />
          <path d="M18 17v2a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2h7l3 3v11z" />
          <path d="M9 9h1M9 13h6M9 17h6" />
        </svg>
      ),
    },
    {
      key: 'systemIntegration',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="19" r="2" />
          <circle cx="5" cy="19" r="2" />
          <path d="M6.5 6.5l3 3M14.5 14.5l3 3M17.5 6.5l-3 3M6.5 17.5l3-3" />
        </svg>
      ),
    },
    {
      key: 'projectManagement',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
          <path d="M17 8l-1.5 1.5L14 8" />
        </svg>
      ),
    },
    {
      key: 'qualityControl',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M8 11l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="services" id="about">
      <div className="services-container">
        <h2 className="services-title">{t('title')}</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.key} className="service-item">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <span className="service-label">{t(service.key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
