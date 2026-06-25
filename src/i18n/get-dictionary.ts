import fs from "fs";
import path from "path";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaryCache = new Map<Locale, Dictionary>();

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  if (dictionaryCache.has(locale)) {
    return dictionaryCache.get(locale)!;
  }

  const filePath = path.join(
    process.cwd(),
    "src",
    "i18n",
    "dictionaries",
    `${locale}.json`
  );

  const content = fs.readFileSync(filePath, "utf-8");
  const dictionary = JSON.parse(content) as Dictionary;
  dictionaryCache.set(locale, dictionary);
  return dictionary;
}
