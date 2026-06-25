import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { locales, localeConfig } from "@/i18n/config";
import { CORPORATE_URLS } from "@/lib/corporate";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-accent-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-light text-sm font-bold">
                EM
              </span>
              <span className="font-serif text-xl font-semibold">Energiemind</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {dict.footer.description}
            </p>
            <p className="mt-4 text-sm text-white/60">
              {locale === "hi" || locale === "ur" ? (
                <>
                  <a
                    href={CORPORATE_URLS.tvkGroup}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={dict.footer.tvkGroupAria}
                    className="font-medium text-accent-light underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white/40"
                  >
                    {dict.footer.tvkGroup}
                  </a>{" "}
                  {dict.footer.partOf}
                </>
              ) : (
                <>
                  {dict.footer.partOf}{" "}
                  <a
                    href={CORPORATE_URLS.tvkGroup}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={dict.footer.tvkGroupAria}
                    className="font-medium text-accent-light underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white/40"
                  >
                    {dict.footer.tvkGroup}
                  </a>
                </>
              )}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              {dict.footer.explore}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#mission" className="hover:text-white transition-colors">{dict.nav.mission}</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">{dict.nav.research}</a></li>
              <li><a href="#mining-heat-reuse" className="hover:text-white transition-colors">{dict.nav.miningHeatReuse}</a></li>
              <li><a href="#energy-waste-reduction" className="hover:text-white transition-colors">{dict.nav.energyWasteReduction}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              {dict.footer.resources}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#sustainability-reports" className="hover:text-white transition-colors">{dict.nav.sustainabilityReports}</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">{dict.nav.education}</a></li>
              <li><a href="#public-resources" className="hover:text-white transition-colors">{dict.nav.publicResources}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{dict.nav.contact}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
            {dict.footer.languages}
          </p>
          <nav aria-label={dict.nav.selectLanguage} className="flex flex-wrap gap-x-3 gap-y-2">
            {locales.map((loc) => (
              <a
                key={loc}
                href={`/${loc}`}
                hrefLang={localeConfig[loc].hreflang}
                lang={localeConfig[loc].hreflang}
                className={`text-xs transition-colors hover:text-white ${
                  loc === locale ? "font-semibold text-accent-light" : "text-white/60"
                }`}
              >
                {localeConfig[loc].nativeName}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>&copy; {year} Energiemind. {dict.footer.rights}</p>
          <p>{dict.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
