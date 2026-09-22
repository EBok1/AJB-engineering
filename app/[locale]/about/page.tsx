import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <div className="page-header">
        <h1>{t('pageTitle')}</h1>
        <p>{t('pageSubtitle')}</p>
      </div>

      <section className="section">
        <div className="section-container">
          <div className="content-block animate-on-scroll">
            <p>{t('intro')}</p>
            <p>{t('cadParagraph')}</p>
            <p>{t('visualization')}</p>
            <p>{t('integration')}</p>

            <ul className="content-list">
              <li>{t('integrationList.mechanical')}</li>
              <li>{t('integrationList.plc')}</li>
              <li>{t('integrationList.showcontrol')}</li>
              <li>{t('integrationList.audioVideo')}</li>
              <li>{t('integrationList.animatronics')}</li>
            </ul>

            <p>{t('conclusion')}</p>
          </div>

          <h2
            className="section-title animate-on-scroll"
            style={{ marginTop: '3rem' }}
          >
            {t('whyChoose')}
          </h2>

          {/* Cards link to the relevant service detail pages */}
          <div className="features-grid">
            <Link
              href="/services/cad-design"
              className="feature-card animate-on-scroll"
              style={{ '--stagger': '0', textDecoration: 'none', color: 'inherit' } as React.CSSProperties}
            >
              <h3>{t('features.specialization.title')}</h3>
              <p>{t('features.specialization.description')}</p>
            </Link>
            <Link
              href="/services/3d-visualization"
              className="feature-card animate-on-scroll"
              style={{ '--stagger': '1', textDecoration: 'none', color: 'inherit' } as React.CSSProperties}
            >
              <h3>{t('features.innovation.title')}</h3>
              <p>{t('features.innovation.description')}</p>
            </Link>
            <Link
              href="/services/system-integration"
              className="feature-card animate-on-scroll"
              style={{ '--stagger': '2', textDecoration: 'none', color: 'inherit' } as React.CSSProperties}
            >
              <h3>{t('features.flexible.title')}</h3>
              <p>{t('features.flexible.description')}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
