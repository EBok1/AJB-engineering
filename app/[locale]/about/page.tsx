import { useTranslations } from 'next-intl';

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
          <div className="content-block">
            <p>{t('intro')}</p>
            <p>{t('certification')}</p>
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

          <h2 className="section-title" style={{ marginTop: '3rem' }}>
            {t('whyChoose')}
          </h2>
          
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

          <h2 className="section-title" style={{ marginTop: '3rem' }}>
            {t('servicesTitle')}
          </h2>
          
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('servicesTable.service')}</th>
                <th>{t('servicesTable.description')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('servicesTable.cad')}</td>
                <td>{t('servicesTable.cadDesc')}</td>
              </tr>
              <tr>
                <td>{t('servicesTable.visualization')}</td>
                <td>{t('servicesTable.visualizationDesc')}</td>
              </tr>
              <tr>
                <td>{t('servicesTable.integration')}</td>
                <td>{t('servicesTable.integrationDesc')}</td>
              </tr>
            </tbody>
          </table>

          <div className="cta-box">
            <h2>{t('goalTitle')}</h2>
            <p>{t('goalText')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
