'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

// ─── Icons ──────────────────────────────────────────────────────────────────

function SunIcon({ active }: { active: boolean }) {
  return (
    <svg
      className={`theme-icon${active ? ' theme-icon--active' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon({ active }: { active: boolean }) {
  return (
    <svg
      className={`theme-icon${active ? ' theme-icon--active' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" width="20" height="20">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // ── Read saved theme on mount ──────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light') setIsDark(false);
    } catch {
      // localStorage unavailable
    }
  }, []);

  // ── Toggle theme ──────────────────────────────────────────────────────
  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    try {
      if (next) {
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    } catch {
      // ignore
    }
  }

  // ── Scroll listener ───────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Close menu on Escape ──────────────────────────────────────────────
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // ── Close menu on outside click ───────────────────────────────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // ── Lock body scroll when mobile menu is open ─────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { href: '/',         label: t('home') },
    { href: '/about',    label: t('about') },
    { href: '/projects', label: t('projects') },
    { href: '/contact',  label: t('contact') },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const isHome = pathname === '/';

  return (
    <nav
      className={`navbar${(isScrolled || !isHome) ? ' is-scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="navbar-container">

        {/* Brand — always far left */}
        <Link href="/" className="navbar-brand">
          AJB Engineering
        </Link>

        {/* ── Mobile only ─────────────────────────────────────────────── */}
        <button
          ref={buttonRef}
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>

        <div
          ref={menuRef}
          id="mobile-menu"
          className={`mobile-menu ${isOpen ? 'is-open' : ''}`}
          aria-hidden={!isOpen}
        >
          {/* Explicit close button at top of mobile menu */}
          <button
            className="mobile-menu-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mobile-menu-divider" />

          <div className="mobile-menu-social">
            <a
              href="https://www.linkedin.com/in/arjan-bok-6272b06/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:info@ajb-engineering.nl">
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>

          <div className="mobile-menu-divider" />

          <LanguageSwitcher />

          <div style={{ marginTop: '0.5rem' }}>
            <button
              className="theme-toggle theme-toggle--wide"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <SunIcon  active={isDark} />
              <MoonIcon active={!isDark} />
              <span className="theme-toggle-label">
                {isDark ? 'Light mode' : 'Dark mode'}
              </span>
            </button>
          </div>
        </div>

        {/* ── Desktop: center nav links ───────────────────────────────── */}
        <ul className="desktop-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop: right side ─────────────────────────────────────── */}
        <div className="desktop-nav-right">
          <div className="desktop-social">
            <a
              href="https://www.linkedin.com/in/arjan-bok-6272b06/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true" />
            </a>
            <a href="mailto:info@ajb-engineering.nl" aria-label="Email">
              <i className="fa-solid fa-envelope" aria-hidden="true" />
            </a>
          </div>

          <LanguageSwitcher />

          {/* Dark / Light mode toggle — both icons always rendered */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <SunIcon  active={isDark} />
            <MoonIcon active={!isDark} />
          </button>
        </div>

      </div>
    </nav>
  );
}
