import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Wrench, Truck, BadgeDollarSign } from "lucide-react";
import { useI18n } from "@/i18n";
import { HERO_IMAGE, PRODUCT_CATEGORIES, SERVICES } from "@/data/site";
import { SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALBEMAR — Interpretation Equipment & Language Services" },
      {
        name: "description",
        content:
          "Sale and rental of interpretation systems, conference headsets, audio systems and electronics, plus professional interpretation and translation services.",
      },
      { property: "og:title", content: "ALBEMAR — Interpretation Equipment & Language Services" },
      {
        property: "og:description",
        content: "Conference technology and professional interpretation and translation services.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WHY = [
  { icon: ShieldCheck, t: "home.why1", d: "home.why1d" },
  { icon: Wrench, t: "home.why2", d: "home.why2d" },
  { icon: Truck, t: "home.why3", d: "home.why3d" },
  { icon: BadgeDollarSign, t: "home.why4", d: "home.why4d" },
];

function Index() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark">
        <img
          src={HERO_IMAGE}
          alt="Delegates using wireless interpretation headsets at an international conference"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="container-page relative py-20 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            {t("hero.eyebrow")}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            {t("hero.subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/85"
            >
              {t("hero.cta")} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              {t("hero.cta2")}
            </Link>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8 text-primary-foreground">
            {[
              { v: "500+", k: "hero.stat1" },
              { v: "20", k: "hero.stat2" },
              { v: "10+", k: "hero.stat3" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-2xl font-bold md:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-xs opacity-75 md:text-sm">{t(s.k)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading title={t("home.catsTitle")} sub={t("home.catsSub")} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/products"
                hash={c.slug}
                className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <img
                  src={c.image}
                  alt={t(c.titleKey)}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-brand-dark">{t(c.titleKey)}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{t(c.descKey)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading title={t("home.servicesTitle")} sub={t("home.servicesSub")} />
          <div className="grid gap-4 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <div key={s.slug} className="rounded-lg border border-border bg-card p-6">
                <span className="font-display text-sm font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-brand-dark">{t(s.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(s.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading title={t("home.whyTitle")} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.t}>
                <span className="grid h-11 w-11 place-items-center rounded-md bg-accent text-brand">
                  <w.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-brand-dark">{t(w.t)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(w.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="container-page grid gap-6 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">{t("home.ctaTitle")}</h2>
            <p className="mt-3 max-w-xl text-sm text-primary-foreground/80">{t("home.ctaSub")}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/85"
          >
            {t("nav.quote")} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
