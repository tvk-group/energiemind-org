import type { MetadataRoute } from "next";
import { locales, SITE_URL } from "@/i18n/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "Yandex",
        allow: "/",
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      ...locales.map((locale) => `${SITE_URL}/sitemap/${locale}.xml`),
    ],
    host: SITE_URL,
  };
}
