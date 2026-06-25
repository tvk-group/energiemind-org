import { buildAllSchemas } from "@/lib/seo";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface JsonLdProps {
  locale: Locale;
  dict: Dictionary;
}

export function JsonLd({ locale, dict }: JsonLdProps) {
  const schemas = buildAllSchemas(locale, dict);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
