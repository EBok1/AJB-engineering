import { useTranslations } from 'next-intl';
import ServiceIcons from '@/components/ServiceIcons';

export default function HomePage() {
  const t = useTranslations('hero');

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/background.png"
            alt=""
            aria-hidden="true"
          />
          <div className="hero-overlay" aria-hidden="true" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">{t('title')}</h1>
          <p className="hero-subtitle">{t('subtitle')}</p>
          <a href="#about" className="hero-button">
            {t('learnMore')}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <ServiceIcons />

      {/* About Preview Section */}
      <AboutPreview />
    </>
  );
}

function AboutPreview() {
  const t = useTranslations('about');

  return (
    <section className="section">
      <div className="section-container">
        <h2 className="section-title">{t('pageTitle')}</h2>
        <p className="section-subtitle">{t('pageSubtitle')}</p>
        
        <div className="content-block">
          <p>{t('intro')}</p>
          <p>{t('certification')}</p>
          <p>{t('visualization')}</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>{t('features.specialization.title')}</h3>
            <p>{t('features.specialization.description')}</p>
          </div>
          <div className="feature-card">
            <h3>{t('features.innovation.title')}</h3>
            <p>{t('features.innovation.description')}</p>
          </div>
          <div className="feature-card">
            <h3>{t('features.flexible.title')}</h3>
            <p>{t('features.flexible.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
