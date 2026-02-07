'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: 'nl' | 'en' | 'de') => {
    startTransition(() => {
      // Construct the new path with the new locale
      const newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
      router.push(newPath);
    });
  };

  return (
    <div 
      className="language-switcher" 
      role="group" 
      aria-label={t('switchTo')}
    >
      <button
        onClick={() => switchLocale('nl')}
        className={locale === 'nl' ? 'active' : ''}
        aria-pressed={locale === 'nl'}
        disabled={isPending}
      >
        NL
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={locale === 'en' ? 'active' : ''}
        aria-pressed={locale === 'en'}
        disabled={isPending}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('de')}
        className={locale === 'de' ? 'active' : ''}
        aria-pressed={locale === 'de'}
        disabled={isPending}
      >
        DE
      </button>
    </div>
  );
}
