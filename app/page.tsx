import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <Image
          src="/engineering.jpg"
          alt="AJB Engineering"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <h1>AJB Engineering</h1>
      </div>

      {/* Profile Section */}
      <section className="profile-container">
        <div className="profile-content">
          <h2>Arjan Bok</h2>
          <p>
            Technisch tekenaar en systeemintegrator met jarenlange ervaring in 
            werktuigbouwkundige en elektrotechnische projecten. Gespecialiseerd 
            in het creëren van accurate CAD-tekeningen en het samenbrengen van 
            complexe technische systemen tot naadloze oplossingen.
          </p>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/arjan-bok-6272b06/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="mailto:info@ajb-engineering.nl"
              aria-label="Email"
            >
              <i className="fa-solid fa-at"></i>
            </a>
          </div>
        </div>
        <Image
          src="/profile-picture.JPG"
          alt="Arjan Bok - Profiel foto"
          width={280}
          height={350}
          style={{ objectFit: 'cover' }}
        />
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>Over AJB-Engineering</h2>
        <p>
          Technische precisie, heldere visualisaties en slimme systeemintegratie.
        </p>
        <p>
          Bij <strong>AJB-Engineering</strong> brengen we technisch tekenen en integratie tot leven. 
          Wij zijn gespecialiseerd in het creëren van accurate en heldere <strong>3D- en 2D-CAD-tekeningen</strong> 
          voor werktuigbouwkundige en elektrotechnische installaties. Elk ontwerp is op maat gemaakt en 
          perfect afgestemd op jouw projectbehoefte.
        </p>
        <p>
          Onze <em>Onshape Certified Professional</em> status garandeert een professionele aanpak en actuele 
          expertise in moderne CAD-software.
        </p>
        <p>
          Daarnaast realiseren we <strong>3D-visualisaties</strong>, waarmee technische tekeningen eenvoudig 
          online of via media worden gepresenteerd—ideaal voor presentaties of marketingdoeleinden.
        </p>
        <p>
          Maar we gaan verder dan ontwerpen alleen. Met onze <strong>systeemintegratie</strong> brengen we 
          meerdere disciplines samen tot één naadloos geheel. Denk aan de integratie tussen: mechanische 
          installaties, PLC-programmatuur en tijdlijn-gestuurde showcontrol-apparatuur, gecombineerd met audio, 
          video, animatronics en special-effects. Zo transformeren we complexe technische installaties tot 
          interactieve totaaloplossingen.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Waarom AJB-Engineering kiezen?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Specialisatie</h3>
            <p>Focus op CAD-tekeningen, 3D-visualisatie en integratie in technische installaties.</p>
          </div>
          <div className="feature-card">
            <h3>Innovatiegericht</h3>
            <p>Technische precisie gecombineerd met creatieve visualisering en slimme koppelingen.</p>
          </div>
          <div className="feature-card">
            <h3>Flexibele oplossingen</h3>
            <p>Maatwerk voor werktuigbouwkundige en elektrotechnische projecten.</p>
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="services-section">
        <h2>Wat doen we precies?</h2>
        <table className="services-table">
          <thead>
            <tr>
              <th>Dienst</th>
              <th>Beschrijving</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3D &amp; 2D CAD-ontwerpen</td>
              <td>Technische tekeningen in moderne CAD-software voor verschillende disciplines.</td>
            </tr>
            <tr>
              <td>3D-visualisaties</td>
              <td>Visualisaties voor media, presentaties of marketingdoeleinden.</td>
            </tr>
            <tr>
              <td>Systeemintegratie</td>
              <td>Koppeling en coördinatie van meerdere technische disciplines en systemen.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Goal Section */}
      <section className="goal-section">
        <h2>Ons doel</h2>
        <p>
          Bij AJB-Engineering streven we ernaar om technische precisie te verbinden met 
          creatieve visuele ondersteuning en slimme systeemintegratie. Kwaliteit is ons 
          uitgangspunt en klantgerichtheid ons commitment—voor betrouwbare oplossingen 
          die werken zoals jij dat wilt.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2>Projecten</h2>
        <p>
          Bekijk onze portfolio met diverse projecten in werktuigbouwkunde, 
          elektrotechniek en systeemintegratie. Van technische CAD-tekeningen 
          tot complete visualisaties en geïntegreerde oplossingen.
        </p>
      </section>
    </>
  )
}
