import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug, type Project } from '@/lib/projects';
import ImageLightbox from '@/components/ImageLightbox';

// Tell Next.js which slugs to pre-render at build time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}

function ProjectDetailContent({ project }: { project: Project }) {
  const t = useTranslations('projects');
  const title = t(`items.${project.translationKey}.title`);
  const description = t(`items.${project.translationKey}.description`);

  return (
    <>
      <div className="page-header">
        <h1>{title}</h1>
      </div>

      <section className="section">
        <div className="section-container">

          {/* Back button — small orange outlined */}
          <div className="animate-on-scroll" style={{ marginBottom: '2rem' }}>
            <Link href="/projects" className="btn-back">
              {t('backToProjects')}
            </Link>
          </div>

          {/* Full description */}
          <div className="content-block animate-on-scroll">
            <p>{description}</p>
          </div>

          {/* Clickable image gallery with lightbox */}
          <div className="animate-on-scroll" style={{ '--stagger': '1' } as React.CSSProperties}>
            <ImageLightbox images={project.images} alt={title} />
          </div>

        </div>
      </section>
    </>
  );
}
