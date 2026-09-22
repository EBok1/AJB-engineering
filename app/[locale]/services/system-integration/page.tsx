import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function SystemIntegrationPage() {
  const t = useTranslations('servicePages.integration');
  const nav = useTranslations('servicePages');

  return (
    <>
      <div className="page-header">
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
      </div>

      <section className="section">
        <div className="section-container">

          <div className="service-page-icon animate-on-scroll">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              width="64"
              height="64"
              aria-hidden="true"
              style={{ color: 'var(--color-accent)' }}
            >
              <circle cx="12" cy="12" r="3" />
              <circle cx="19" cy="5" r="2" />
              <circle cx="5" cy="5" r="2" />
              <circle cx="19" cy="19" r="2" />
              <circle cx="5" cy="19" r="2" />
              <path d="M6.5 6.5l3 3M14.5 14.5l3 3M17.5 6.5l-3 3M6.5 17.5l3-3" />
            </svg>
          </div>

          <div className="content-block animate-on-scroll">
            <p>{t('intro')}</p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-on-scroll" style={{ '--stagger': '0' } as React.CSSProperties}>
              <h3>{t('feature1Title')}</h3>
              <p>{t('feature1Text')}</p>
            </div>
            <div className="feature-card animate-on-scroll" style={{ '--stagger': '1' } as React.CSSProperties}>
              <h3>{t('feature2Title')}</h3>
              <p>{t('feature2Text')}</p>
            </div>
            <div className="feature-card animate-on-scroll" style={{ '--stagger': '2' } as React.CSSProperties}>
              <h3>{t('feature3Title')}</h3>
              <p>{t('feature3Text')}</p>
            </div>
          </div>

          <div className="cta-box animate-on-scroll">
            <h2>{t('ctaTitle')}</h2>
            <p>{t('ctaText')}</p>
            <a href="mailto:info@ajb-engineering.nl" className="cta-button">
              {t('ctaButton')}
            </a>
          </div>

          <div className="service-page-back animate-on-scroll">
            <Link href="/">{nav('backToHome')}</Link>
          </div>

        </div>
      </section>
    </>
  );
}
