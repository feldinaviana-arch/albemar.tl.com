import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe, Phone } from "lucide-react";
import { useI18n, LANGS } from "@/i18n";
import { COMPANY } from "@/data/site";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/products", key: "nav.products" },
  { to: "/services", key: "nav.services" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/clients", key: "nav.clients" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-brand-dark text-primary-foreground md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <span className="opacity-90">{t("brand.tagline")}</span>
          <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 opacity-90 hover:opacity-100">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {COMPANY.phone}
          </a>
        </div>
      </div>

      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label={COMPANY.name}>
          <img
            src="/albemar-logo.jpeg"
            alt={`${COMPANY.name} logo`}
            width={480}
            height={480}
            className="h-11 w-11 rounded-full object-cover shrink-0 md:h-12 md:w-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-accent text-brand-dark" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-md border border-border p-0.5 sm:flex" aria-label={t("lang.label")}>
            <Globe className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`rounded px-2 py-1 text-xs font-semibold transition-colors ${
                  lang === l.code ? "bg-brand text-primary-foreground" : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>
          <Link
            to="/contact"
            className="hidden rounded-md bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-dark md:inline-flex"
          >
            {t("nav.quote")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="rounded-md border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-brand" }}
                className="rounded-md px-1 py-2.5 text-sm font-medium text-muted-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-1">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`rounded px-3 py-1.5 text-xs font-semibold ${
                    lang === l.code ? "bg-brand text-primary-foreground" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
