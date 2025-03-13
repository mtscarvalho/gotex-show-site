import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-br", "en"],
  defaultLocale: "pt-br",
  localePrefix: "as-needed",
  localeDetection: false,
});
