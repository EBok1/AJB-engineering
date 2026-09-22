import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function VisualizationPage() {
  const t = useTranslations('servicePages.visualization');
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
            <Image src="/3d.svg" alt="" width={64} height={64} aria-hidden="true" />
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
