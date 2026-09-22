'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const services = [
  {
    key: 'cadDesign',
    href: '/services/cad-design',
    icon: (
      <Image src="/cad.svg" alt="" width={32} height={32} aria-hidden="true" />
    ),
  },
  {
    key: 'visualization',
    href: '/services/3d-visualization',
    icon: (
      <Image src="/3d.svg" alt="" width={32} height={32} aria-hidden="true" />
    ),
  },
  {
    key: 'systemIntegration',
    href: '/services/system-integration',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="19" r="2" />
        <circle cx="5" cy="19" r="2" />
        <path d="M6.5 6.5l3 3M14.5 14.5l3 3M17.5 6.5l-3 3M6.5 17.5l3-3" />
      </svg>
    ),
  },
];

export default function ServiceIcons() {
  const t = useTranslations('services');

  return (
    <section className="services" id="about">
      <div className="services-container">
        <h2 className="services-title">{t('title')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              key={service.key}
              href={service.href}
              className="service-item animate-on-scroll"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <span className="service-label">{t(service.key)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
