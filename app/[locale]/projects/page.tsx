import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  const projects = [
    {
      key: 'cad',
      category: t('items.cad.category'),
      title: t('items.cad.title'),
      description: t('items.cad.description'),
    },
    {
      key: 'electrical',
      category: t('items.electrical.category'),
      title: t('items.electrical.title'),
      description: t('items.electrical.description'),
    },
    {
      key: 'showcontrol',
      category: t('items.showcontrol.category'),
      title: t('items.showcontrol.title'),
      description: t('items.showcontrol.description'),
    },
  ];

  return (
    <>
      <div className="page-header">
        <h1>{t('pageTitle')}</h1>
        <p>{t('pageSubtitle')}</p>
      </div>

      <section className="section">
        <div className="section-container">
          <div className="content-block">
            <p>{t('intro')}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.key} className="project-card">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>

          <div className="cta-box">
            <h2>{t('ctaTitle')}</h2>
            <p>{t('ctaText')}</p>
            <a href="mailto:info@ajb-engineering.nl" className="cta-button">
              {t('ctaButton')}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
