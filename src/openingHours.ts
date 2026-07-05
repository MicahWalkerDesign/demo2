import type { Locale } from "./content";

const MADRID_TIME_ZONE = "Europe/Madrid";

const dayFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: MADRID_TIME_ZONE,
  weekday: "short",
});

const labels: Record<Locale, { today: string; closed: string }> = {
  ca: { today: "Avui", closed: "Tancat" },
  es: { today: "Hoy", closed: "Cerrado" },
  en: { today: "Today", closed: "Closed" },
  de: { today: "Heute", closed: "Geschlossen" },
  fr: { today: "Aujourd’hui", closed: "Fermé" },
  ru: { today: "Сегодня", closed: "Закрыто" },
};

const lunch = "13.00–15.30";
const dinner = "20.30–23.00";

export function getTodayHours(locale: Locale, now = new Date()) {
  const day = dayFormatter.format(now);
  const service =
    day === "Tue"
      ? labels[locale].closed
      : day === "Mon" || day === "Sun"
        ? lunch
        : `${lunch} / ${dinner}`;

  return `${labels[locale].today} · ${service}`;
}
