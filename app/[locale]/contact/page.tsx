import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

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
          </div>

          <div className="contact-links animate-on-scroll" style={{ '--stagger': '1' } as React.CSSProperties}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/arjan-bok-6272b06/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-card-icon">
                <i className="fa-brands fa-linkedin" aria-hidden="true" />
              </div>
              <div className="contact-link-card-text">
                <strong>{t('linkedinLabel')}</strong>
                <span>linkedin.com/in/arjan-bok-6272b06</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@ajb-engineering.nl"
              className="contact-link-card"
            >
              <div className="contact-link-card-icon">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
              </div>
              <div className="contact-link-card-text">
                <strong>{t('emailLabel')}</strong>
                <span>info@ajb-engineering.nl</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
