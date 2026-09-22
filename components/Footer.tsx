'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/arjan-bok-6272b06/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
          </a>
        </div>

        <p>
          <a href="mailto:info@ajb-engineering.nl">info@ajb-engineering.nl</a>
        </p>

        <p>© {currentYear} AJB-Engineering. {t('rights')}</p>
      </div>
    </footer>
  );
}
