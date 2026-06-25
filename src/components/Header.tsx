"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: dict.nav.mission, href: "#mission" },
    { label: dict.nav.research, href: "#research" },
    { label: dict.nav.miningHeatReuse, href: "#mining-heat-reuse" },
    { label: dict.nav.energyWasteReduction, href: "#energy-waste-reduction" },
    { label: dict.nav.sustainabilityReports, href: "#sustainability-reports" },
    { label: dict.nav.education, href: "#education" },
    { label: dict.nav.publicResources, href: "#public-resources" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href={`/${locale}`} className="group flex shrink-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
            EM
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-accent-dark group-hover:text-accent transition-colors">
            Energiemind
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label={dict.nav.mainNav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-sm text-muted transition-colors hover:bg-section-alt hover:text-accent-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher
            currentLocale={locale}
            label={dict.nav.language}
            selectLabel={dict.nav.selectLanguage}
          />

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-accent-dark xl:hidden"
            aria-expanded={open}
            aria-label={dict.nav.toggleMenu}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface px-6 py-4 xl:hidden" aria-label={dict.nav.mainNav}>
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-section-alt hover:text-accent-dark"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
