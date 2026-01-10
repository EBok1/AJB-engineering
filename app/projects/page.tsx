export default function ProjectsPage() {
  const projects = [
    {
      title: "CAD Ontwerp Productielijn",
      category: "Werktuigbouw",
      description: "Complete 3D- en 2D-CAD-tekeningen voor een geautomatiseerde productielijn in de voedingsindustrie.",
    },
    {
      title: "Elektrotechnische Installatie",
      category: "Elektrotechniek",
      description: "Technische documentatie en visualisaties voor een complexe elektrotechnische installatie.",
    },
    {
      title: "Showcontrol Systeem",
      category: "Systeemintegratie",
      description: "Integratie van PLC-programmatuur met audio, video en animatronics voor een interactieve attractie.",
    },
  ]

  return (
    <>
      <div className="page-header">
        <h1>Projecten</h1>
        <p>Bekijk een selectie van onze werkzaamheden</p>
      </div>

      <div className="page-content">
        <p>
          Bij AJB-Engineering hebben we diverse projecten uitgevoerd in werktuigbouwkunde, 
          elektrotechniek en systeemintegratie. Van technische CAD-tekeningen tot complete 
          visualisaties en geïntegreerde oplossingen—elk project krijgt onze volle aandacht 
          en expertise.
        </p>
      </div>

      <section className="features-section">
        <div className="features-grid">
          {projects.map((project, index) => (
            <div key={index} className="feature-card">
              <span style={{ 
                fontSize: '0.75rem', 
                color: '#f97316', 
                textTransform: 'uppercase',
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}>
                {project.category}
              </span>
              <h3 style={{ marginTop: '0.5rem' }}>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="goal-section" style={{ marginTop: '2rem' }}>
        <h2>Interesse in een samenwerking?</h2>
        <p>
          Neem contact met ons op voor een vrijblijvend gesprek over uw project. 
          Wij denken graag met u mee over de beste oplossingen.
        </p>
        <a 
          href="mailto:info@ajb-engineering.nl" 
          style={{ 
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.75rem 2rem',
            background: '#f97316',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 500,
            transition: 'background 0.2s'
          }}
        >
          Contact opnemen
        </a>
      </section>
    </>
  )
}
