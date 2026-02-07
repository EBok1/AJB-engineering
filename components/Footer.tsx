'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>{t('company')}</p>
        <p>
          <a href="mailto:info@ajb-engineering.nl">info@ajb-engineering.nl</a>
        </p>
        <p>
          © {currentYear} AJB-Engineering. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
