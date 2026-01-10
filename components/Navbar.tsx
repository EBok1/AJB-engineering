'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Over AJB Engineering</Link>
        </li>
        <li>
          <Link href="/projects">Projecten</Link>
        </li>
      </ul>
    </nav>
  )
}
