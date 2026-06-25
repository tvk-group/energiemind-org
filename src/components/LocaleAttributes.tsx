"use client";

import { useEffect } from "react";
import { localeConfig, type Locale } from "@/i18n/config";

export function LocaleAttributes({ locale }: { locale: Locale }) {
  const config = localeConfig[locale];

  useEffect(() => {
    document.documentElement.lang = config.hreflang;
    document.documentElement.dir = config.dir;
  }, [config.hreflang, config.dir]);

  return null;
}
