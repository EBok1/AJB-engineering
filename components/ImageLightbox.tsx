'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface Props {
  images: string[];
  alt: string;
}

export default function ImageLightbox({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const isOpen = activeIndex !== null;
  const hasPrev = isOpen && activeIndex > 0;
  const hasNext = isOpen && activeIndex < images.length - 1;

  const close = useCallback(() => setActiveIndex(null), []);
  const prev  = useCallback(() => setActiveIndex(i => (i !== null && i > 0 ? i - 1 : i)), []);
  const next  = useCallback(() => setActiveIndex(i => (i !== null && i < images.length - 1 ? i + 1 : i)), []);

  // Keyboard: Escape closes, arrow keys navigate
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close, prev, next]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const overlay = isOpen ? (
    <div
      className="lightbox-overlay"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Afbeelding vergroot"
    >
      {/* Prev arrow */}
      {hasPrev && (
        <button
          className="lightbox-nav lightbox-nav--prev"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Vorige afbeelding"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="28" height="28" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="lightbox-img-wrap"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={close} aria-label="Sluiten">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="28" height="28" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[activeIndex]} alt={`${alt} — ${activeIndex + 1} / ${images.length}`} />
        {images.length > 1 && (
          <p className="lightbox-counter">{activeIndex + 1} / {images.length}</p>
        )}
      </div>

      {/* Next arrow */}
      {hasNext && (
        <button
          className="lightbox-nav lightbox-nav--next"
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Volgende afbeelding"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="28" height="28" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  ) : null;

  return (
    <>
      <div className="project-detail-gallery">
        {images.map((src, i) => (
          <button
            key={src}
            className="project-detail-image"
            onClick={() => setActiveIndex(i)}
            aria-label={`${alt} — afbeelding ${i + 1} vergroten`}
            style={{ padding: 0, background: 'none', border: '1px solid var(--color-glass-border)', cursor: 'zoom-in', display: 'block', width: '100%' }}
          >
            <Image
              src={src}
              alt={`${alt} — afbeelding ${i + 1}`}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ maxWidth: '100%', maxHeight: '65vh', width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }}
            />
          </button>
        ))}
      </div>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
