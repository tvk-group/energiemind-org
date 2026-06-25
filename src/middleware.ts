import { locales, defaultLocale } from "@/i18n/config";
import { NextRequest, NextResponse } from "next/server";

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [lang, qPart] = part.trim().split(";q=");
      return { lang: lang.toLowerCase(), q: qPart ? parseFloat(qPart) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of preferred) {
    if (lang === "zh-cn" || lang === "zh-hans" || lang === "zh") return "zh-cn";
    if (lang === "zh-tw" || lang === "zh-hant" || lang === "zh-hk") return "zh-tw";
    const primary = lang.split("-")[0];
    const match = locales.find((l) => l === lang || l === primary);
    if (match) return match;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/sitemaps") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameLocale) {
    const response = NextResponse.next();
    response.headers.set("x-locale", pathnameLocale);
    return response;
  }

  if (pathname === "/") {
    const locale = getPreferredLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  const locale = getPreferredLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
