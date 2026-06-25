import type { Metadata } from "next";
import {
  locales,
  localeConfig,
  getLocalizedUrl,
  SITE_URL,
  type Locale,
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function buildAlternates(locale: Locale) {
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[localeConfig[loc].hreflang] = getLocalizedUrl(loc);
  }
  languages["x-default"] = getLocalizedUrl("en");

  return {
    canonical: getLocalizedUrl(locale),
    languages,
  };
}

export function buildMetadata(locale: Locale, dict: Dictionary): Metadata {
  const config = localeConfig[locale];
  const url = getLocalizedUrl(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: buildAlternates(locale),
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url,
      siteName: "Energiemind",
      locale: config.ogLocale,
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => localeConfig[l].ogLocale),
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: dict.meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.twitterTitle,
      description: dict.meta.twitterDescription,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "bingbot": "index, follow",
      "yandex": "index, follow",
      "baiduspider": "index, follow",
    },
  };
}

export function buildOrganizationSchema(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Energiemind",
    url: getLocalizedUrl(locale),
    logo: `${SITE_URL}/logo.png`,
    description: dict.meta.description,
    email: "hello@energiemind.org",
    sameAs: [],
    areaServed: "Worldwide",
    knowsAbout: dict.meta.keywords,
  };
}

export function buildWebsiteSchema(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Energiemind",
    url: getLocalizedUrl(locale),
    description: dict.meta.description,
    inLanguage: localeConfig[locale].hreflang,
    publisher: {
      "@type": "Organization",
      name: "Energiemind",
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${getLocalizedUrl(locale)}#public-resources`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbSchema(locale: Locale, dict: Dictionary) {
  const base = getLocalizedUrl(locale);
  const sections = [
    { name: dict.nav.mission, id: "mission" },
    { name: dict.nav.research, id: "research" },
    { name: dict.nav.miningHeatReuse, id: "mining-heat-reuse" },
    { name: dict.nav.energyWasteReduction, id: "energy-waste-reduction" },
    { name: dict.nav.sustainabilityReports, id: "sustainability-reports" },
    { name: dict.nav.education, id: "education" },
    { name: dict.nav.publicResources, id: "public-resources" },
    { name: dict.nav.contact, id: "contact" },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Energiemind",
        item: base,
      },
      ...sections.map((section, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: section.name,
        item: `${base}#${section.id}`,
      })),
    ],
  };
}

export function buildArticleSchemas(locale: Locale, dict: Dictionary) {
  return dict.articles.map((article) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    author: {
      "@type": "Organization",
      name: "Energiemind",
    },
    publisher: {
      "@type": "Organization",
      name: "Energiemind",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getLocalizedUrl(locale),
    },
    inLanguage: localeConfig[locale].hreflang,
  }));
}

export function buildFaqSchema(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildAllSchemas(locale: Locale, dict: Dictionary) {
  return [
    buildOrganizationSchema(locale, dict),
    buildWebsiteSchema(locale, dict),
    buildBreadcrumbSchema(locale, dict),
    ...buildArticleSchemas(locale, dict),
    buildFaqSchema(dict),
  ];
}
