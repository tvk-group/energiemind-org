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

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/sitemap") ||
    pathname === "/robots.txt" ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameLocale) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const locale = getPreferredLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  const locale = getPreferredLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
