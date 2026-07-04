import { useState } from "react";
import { content, type Locale, type MenuKey } from "./content";
import {
  ArrowRight,
  Clock,
  CloseIcon,
  MapPin,
  MenuIcon,
  Phone,
  Plus,
} from "./icons";

const menuKeys: MenuKey[] = ["migdia", "capSetmana", "grups"];
const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

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

function ReusMap({ label }: { label: string }) {
  return (
    <svg className="reus-map" viewBox="0 0 640 330" role="img" aria-label={label}>
      <g className="map-lines">
        <path d="M-20 48 126 92l88-74 91 60 89-53 122 86 152-62" />
        <path d="M-15 148 92 113l98 49 112-62 95 67 116-27 142 66" />
        <path d="M-13 261 110 203l86 65 99-82 88 57 118-45 157 69" />
        <path d="m78-20 7 96 52 104-16 164M221-20l20 97-29 96 44 179M389-20l-26 96 29 105-21 173M542-20l-8 98 32 90-39 186" />
        <path d="m0 205 68-23 46-72 68-14 57-57M253 332l13-79 91-54 34-80 89-45M475 337l-22-78 75-77 39-104" />
      </g>
      <g className="map-labels">
        <text x="78" y="66">Plaça del Mercadal</text>
        <text x="462" y="286">Prioral de Sant Pere</text>
        <text x="408" y="90">Centre de Reus</text>
      </g>
      <g className="map-pin" transform="translate(321 160)">
        <path d="M0 42S-25 18-25-2A25 25 0 0 1 25-2C25 18 0 42 0 42Z" />
        <circle cx="0" cy="-2" r="7" />
      </g>
    </svg>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>("ca");
  const [activeMenu, setActiveMenu] = useState<MenuKey>("migdia");
  const [openDetail, setOpenDetail] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = content[locale];
  const menu = t.menu.content[activeMenu];

  const setLanguage = (nextLocale: Locale) => {
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="site-header">
        <Brand />
        <nav className={mobileOpen ? "main-nav is-open" : "main-nav"} aria-label="Principal">
          <a href="#inici" onClick={closeMobile}>{t.nav.home}</a>
          <a href="#menus" onClick={closeMobile}>{t.nav.menus}</a>
          <a href="#la-casa" onClick={closeMobile}>{t.nav.house}</a>
          <a href="#grups" onClick={closeMobile}>{t.nav.groups}</a>
          <a href="#visita" onClick={closeMobile}>{t.nav.visit}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Idioma">
            {(["ca", "es"] as Locale[]).map((language) => (
              <button
                className={locale === language ? "is-active" : ""}
                key={language}
                onClick={() => setLanguage(language)}
                aria-pressed={locale === language}
              >
                {language.toUpperCase()}
              </button>
            ))}
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
              <a className="button button--primary" href="#menus">
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
              <span><Clock />{t.hero.hours}</span>
            </div>
          </div>
          <figure className="hero-media">
            <img src={assetUrl("images/hero-fideua.jpg")} alt={t.hero.imageAlt} />
          </figure>
        </section>

        <section className="menu-section section" id="menus">
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
              <a className="text-link" href="tel:+34977773039">
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
            <a className="button button--outline" href="#menus">
              {t.dishes.action}
              <ArrowRight />
            </a>
          </div>
          <div className="dishes-gallery">
            {t.dishes.items.map((dish, index) => (
              <figure className={`dish dish--${index + 1}`} key={dish.name}>
                <img src={assetUrl(dish.image)} alt={dish.alt} loading="lazy" />
                <figcaption>
                  <span>{dish.name}</span>
                  <i aria-hidden="true" />
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
            <ReusMap label={t.visit.mapAlt} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Brand />
        <nav aria-label="Peu de pàgina">
          <a href="#inici">{t.nav.home}</a>
          <a href="#menus">{t.nav.menus}</a>
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
