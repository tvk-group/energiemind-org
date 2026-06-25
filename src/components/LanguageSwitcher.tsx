"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { locales, localeConfig, type Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
  selectLabel: string;
}

export function LanguageSwitcher({
  currentLocale,
  label,
  selectLabel,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function getLocaleHref(locale: Locale): string {
    const segments = pathname.split("/");
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = locale;
      return segments.join("/") || `/${locale}`;
    }
    return `/${locale}`;
  }

  const current = localeConfig[currentLocale];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:bg-section-alt hover:text-accent-dark"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={selectLabel}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
        <span className="hidden sm:inline">{label}:</span>
        <span className="font-medium text-accent-dark">{current.nativeName}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={selectLabel}
          className="absolute end-0 z-50 mt-2 max-h-80 w-56 overflow-y-auto rounded-lg border border-border bg-surface py-1 shadow-lg"
        >
          {locales.map((locale) => {
            const config = localeConfig[locale];
            const isActive = locale === currentLocale;
            return (
              <li key={locale} role="option" aria-selected={isActive}>
                <a
                  href={getLocaleHref(locale)}
                  hrefLang={config.hreflang}
                  lang={config.hreflang}
                  className={`flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-section-alt ${
                    isActive ? "bg-accent/10 font-medium text-accent" : "text-muted"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span>{config.nativeName}</span>
                  <span className="text-xs text-muted/70">{config.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
