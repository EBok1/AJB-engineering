'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
      <p>AJB Engineering</p>
      <p>
        <a href="mailto:info@ajb-engineering.nl">info@ajb-engineering.nl</a>
      </p>
      <p>© {currentYear} AJB-Engineering. Alle rechten voorbehouden.</p>
    </footer>
  )
}
