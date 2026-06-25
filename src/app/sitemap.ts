import type { MetadataRoute } from "next";
import { locales, localeConfig, getLocalizedUrl } from "@/i18n/config";

export async function generateSitemaps() {
  return locales.map((locale) => ({ id: locale }));
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[localeConfig[loc].hreflang] = getLocalizedUrl(loc);
  }

  return [
    {
      url: getLocalizedUrl(id as (typeof locales)[number]),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: id === "en" ? 1.0 : 0.9,
      alternates: {
        languages,
      },
    },
  ];
}

export const dynamic = "force-static";
