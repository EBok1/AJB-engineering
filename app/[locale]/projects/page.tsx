import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { projects } from '@/lib/projects';

// Returns only the first sentence (up to and including the first . ! or ?)
function firstSentence(text: string): string {
  const m = text.match(/^[^.!?]+[.!?]/);
  return m ? m[0] : text;
}

export default function ProjectsPage() {
  const t = useTranslations('projects');

  return (
    <>
      <div className="page-header">
        <h1>{t('pageTitle')}</h1>
      </div>

      <section className="section">
        <div className="section-container">
          <div className="content-block animate-on-scroll">
            <p>{t('intro')}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="project-card animate-on-scroll"
                style={{ '--stagger': index } as React.CSSProperties}
              >
                <div className="project-card-image">
                  <Image
                    src={project.coverImage}
                    alt={t(`items.${project.translationKey}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="project-card-body">
                  <h3>{t(`items.${project.translationKey}.title`)}</h3>
                  <p>{firstSentence(t(`items.${project.translationKey}.description`))}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
