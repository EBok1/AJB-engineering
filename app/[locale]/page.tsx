import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ServiceIcons from '@/components/ServiceIcons';
import EngineeringBackground from '@/components/EngineeringBackground';

export default function HomePage() {
  const t = useTranslations('hero');

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/background.png" alt="" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
        </div>

        {/* Engineering icons float up on page load (z-index 2, behind hero-content at z-index 3) */}
        <EngineeringBackground />

        <div className="hero-content">
          <h1 className="hero-title">{t('title')}</h1>
          <p className="hero-subtitle">{t('subtitle')}</p>
          <div className="hero-buttons">
            <Link href="/projects" className="hero-button hero-button--primary">
              {t('ctaProjects')}
            </Link>
            <a href="mailto:info@ajb-engineering.nl" className="hero-button hero-button--outline">
              {t('ctaContact')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceIcons />

      {/* Projects CTA — prominent link to portfolio */}
      <ProjectsCTA />

      {/* About Preview Section */}
      <AboutPreview />
    </>
  );
}

function ProjectsCTA() {
  const t = useTranslations('projectsCta');

  return (
    <section className="projects-cta">
      <div className="projects-cta-container">
        <div>
          <span className="projects-cta-eyebrow">{t('eyebrow')}</span>
          <h2 className="projects-cta-title">{t('title')}</h2>
          <p className="projects-cta-text">{t('text')}</p>
        </div>
        <div className="projects-cta-action">
          <Link href="/projects" className="projects-cta-button">
            {t('button')}
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const t = useTranslations('homeAbout');
  const tAbout = useTranslations('about');

  return (
    <section className="section" id="about">
      <div className="section-container">
        <h2 className="section-title animate-on-scroll">{tAbout('pageTitle')}</h2>

        <div className="content-block animate-on-scroll" style={{ '--stagger': '1' } as React.CSSProperties}>
          <p>{t('para1')}</p>
          <p>{t('para2')}</p>
          <p>{t('para3')}</p>
        </div>

        <div className="animate-on-scroll" style={{ '--stagger': '2', marginTop: '2rem' } as React.CSSProperties}>
          <Link href="/about" className="cta-button">
            {t('readMore')}
          </Link>
        </div>
      </div>
    </section>
  );
}
