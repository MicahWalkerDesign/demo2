import { useEffect, useRef, useState } from "react";
import { content, type Locale, type MenuKey } from "./content";
import { getTodayHours } from "./openingHours";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  CloseIcon,
  Globe,
  MapPin,
  MenuIcon,
  Phone,
  Plus,
} from "./icons";

const menuKeys: MenuKey[] = ["migdia", "capSetmana", "grups"];
const languages: { code: Locale; name: string }[] = [
  { code: "ca", name: "Català" },
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "ru", name: "Русский" },
];
const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
const menuUrl = assetUrl("carta/");

function Brand() {
  return (
    <a className="brand" href="#inici" aria-label="Casa Alejandro, inici">
      <span>Casa Alejandro</span>
      <small>Reus · des de 1999</small>
    </a>
  );
}

function DiamondRule() {
  return (
    <span className="diamond-rule" aria-hidden="true">
      <i />
    </span>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>("ca");
  const [activeMenu, setActiveMenu] = useState<MenuKey>("migdia");
  const [openDetail, setOpenDetail] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const languageRef = useRef<HTMLDivElement>(null);
  const t = content[locale];
  const menu = t.menu.content[activeMenu];

  const setLanguage = (nextLocale: Locale) => {
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
    setLanguageOpen(false);
  };

  useEffect(() => {
    if (!languageOpen) return;
    const close = (event: PointerEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLanguageOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, [languageOpen]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="site-header">
        <Brand />
        <nav className={mobileOpen ? "main-nav is-open" : "main-nav"} aria-label="Principal">
          <a href="#inici" onClick={closeMobile}>{t.nav.home}</a>
          <a href="#carta" onClick={closeMobile}>{t.nav.menus}</a>
          <a href="#la-casa" onClick={closeMobile}>{t.nav.house}</a>
          <a href="#grups" onClick={closeMobile}>{t.nav.groups}</a>
          <a href="#visita" onClick={closeMobile}>{t.nav.visit}</a>
        </nav>
        <div className="header-actions">
          <div className="language-picker" ref={languageRef}>
            <button
              className="language-trigger"
              type="button"
              aria-haspopup="listbox"
              aria-expanded={languageOpen}
              aria-label="Language"
              onClick={() => setLanguageOpen((value) => !value)}
            >
              <Globe />
              <span>{locale.toUpperCase()}</span>
              <ChevronDown />
            </button>
            {languageOpen && (
              <div className="language-menu" role="listbox" aria-label="Language">
                {languages.map((language) => (
                  <button
                    type="button"
                    role="option"
                    aria-selected={locale === language.code}
                    className={locale === language.code ? "is-active" : ""}
                    key={language.code}
                    onClick={() => setLanguage(language.code)}
                  >
                    <span>{language.name}</span>
                    <small>{language.code.toUpperCase()}</small>
                  </button>
                ))}
              </div>
            )}
          </div>
          <a className="button button--primary header-reserve" href="tel:+34977773039">
            {t.nav.reserve}
          </a>
          <button
            className="mobile-toggle"
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Tancar menú" : "Obrir menú"}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inici">
          <div className="hero-copy">
            <h1>
              <span>{t.hero.titleA}</span>
              <em>{t.hero.titleB}</em>
            </h1>
            <DiamondRule />
            <p>{t.hero.body}</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#carta">
                {t.hero.menus}
                <ArrowRight />
              </a>
              <a className="button button--outline" href="tel:+34977773039">
                {t.hero.call}
                <Phone />
              </a>
            </div>
            <div className="hero-utility">
              <span><MapPin />{t.hero.address}</span>
              <span><Clock />{getTodayHours(locale, now)}</span>
            </div>
          </div>
          <figure className="hero-media">
            <img src={assetUrl("images/hero-fideua.jpg")} alt={t.hero.imageAlt} />
          </figure>
        </section>

        <section className="menu-section section" id="carta">
          <div className="section-intro section-intro--center">
            <DiamondRule />
            <h2>{t.menu.title}</h2>
            <p>{t.menu.intro}</p>
          </div>
          <div className="menu-shell">
            <div className="menu-tabs" role="tablist" aria-label={t.menu.title}>
              {menuKeys.map((key) => (
                <button
                  key={key}
                  id={`tab-${key}`}
                  role="tab"
                  aria-selected={activeMenu === key}
                  aria-controls={`panel-${key}`}
                  onClick={() => setActiveMenu(key)}
                >
                  {t.menu.tabs[key]}
                </button>
              ))}
            </div>
            <div
              className="menu-panel"
              id={`panel-${activeMenu}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeMenu}`}
            >
              <div>
                <span className="menu-number">01</span>
                <h3>{menu.heading}</h3>
                <p>{menu.note}</p>
              </div>
              <ul>
                {menu.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a className="text-link" href={menuUrl}>
                {t.menu.action}
                <ArrowRight />
              </a>
            </div>
            <p className="menu-note">{t.menu.phoneNote}</p>
          </div>
        </section>

        <section className="dishes-section section">
          <div className="dishes-copy">
            <DiamondRule />
            <h2>{t.dishes.title}</h2>
            <p>{t.dishes.body}</p>
            <a className="button button--outline-light" href={menuUrl}>
              {t.dishes.action}
              <ArrowRight />
            </a>
          </div>
          <div className="dishes-gallery">
            {t.dishes.items.map((dish, index) => (
              <figure className={`dish dish--${index + 1}`} key={dish.name}>
                <img src={assetUrl(dish.image)} alt={dish.alt} loading="lazy" />
                <figcaption>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <span>{dish.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="history-section section" id="la-casa">
          <div className="history-media">
            <img
              src={assetUrl("images/hockey-memory.jpg")}
              alt={t.history.imageAlt}
              loading="lazy"
            />
            <small>{t.history.imageNote}</small>
          </div>
          <div className="history-copy">
            <h2>{t.history.title}</h2>
            <DiamondRule />
            <p>{t.history.body}</p>
            <ol>
              {t.history.timeline.map((item) => <li key={item}>{item}</li>)}
            </ol>
            <a className="text-link text-link--light" href="#visita">
              {t.history.action}
              <ArrowRight />
            </a>
          </div>
        </section>

        <section className="groups-section section" id="grups">
          <figure>
            <img
              src={assetUrl("images/family-table.jpg")}
              alt={t.groups.imageAlt}
              loading="lazy"
            />
          </figure>
          <div className="groups-copy">
            <h2>{t.groups.title}</h2>
            <p>{t.groups.body}</p>
            <a className="button button--outline" href="tel:+34977773039">
              {t.groups.action}
              <ArrowRight />
            </a>
            <div className="details-list">
              {t.groups.details.map((detail, index) => {
                const isOpen = openDetail === index;
                return (
                  <div className={isOpen ? "detail is-open" : "detail"} key={detail.title}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenDetail(isOpen ? null : index)}
                    >
                      <span>{detail.title}</span>
                      <Plus />
                    </button>
                    <p>{detail.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="visit-section section" id="visita">
          <div className="visit-copy">
            <h2>{t.visit.title}</h2>
            <p className="visit-address"><MapPin />{t.visit.address}</p>
            <div className="hours">
              <h3>{t.visit.hoursTitle}</h3>
              {t.visit.hours.map((line) => <p key={line}>{line}</p>)}
            </div>
            <div className="visit-actions">
              <a className="button button--gold" href="tel:+34977773039">
                {t.visit.reserve}
                <ArrowRight />
              </a>
              <a
                className="button button--outline-light"
                href="https://www.google.com/maps/search/?api=1&query=Casa+Alejandro+Reus"
                target="_blank"
                rel="noreferrer"
              >
                {t.visit.directions}
                <ArrowRight />
              </a>
              <a className="phone-link" href="tel:+34977773039"><Phone />977 77 30 39</a>
            </div>
          </div>
          <div className="visit-map">
            <iframe
              title={t.visit.mapAlt}
              src="https://www.google.com/maps?q=Restaurant%20Casa%20Alejandro%2C%20Carrer%20del%20Batan%203%2C%20Reus&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Brand />
        <nav aria-label="Peu de pàgina">
          <a href="#inici">{t.nav.home}</a>
          <a href="#carta">{t.nav.menus}</a>
          <a href="#la-casa">{t.nav.house}</a>
          <a href="#grups">{t.nav.groups}</a>
          <a href="#visita">{t.nav.visit}</a>
        </nav>
        <div className="footer-social">
          <a href="https://www.instagram.com/restaurantcasaalejandro/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/p/Restaurant-Casa-Alejandro-100067520053823/" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </footer>
    </>
  );
}
