import { createFileRoute, Link } from "@tanstack/react-router";
import { Headphones, Users, FileText, PackageOpen, LifeBuoy, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { SERVICES } from "@/data/site";
import { PageHero } from "@/components/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Interpretation, Translation & Equipment Rental" },
      {
        name: "description",
        content:
          "Simultaneous and consecutive interpretation, document translation, conference equipment rental and on-site technical support.",
      },
      { property: "og:title", content: "Services — LinguaTech" },
      { property: "og:description", content: "Professional language and conference technology services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const ICONS = [Headphones, Users, FileText, PackageOpen, LifeBuoy];

function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t("services.title")} lead={t("services.lead")} />
      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <article key={s.slug} id={s.slug} className="flex scroll-mt-28 flex-col rounded-lg border border-border bg-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-accent text-brand">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-brand-dark">{t(s.titleKey)}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t(s.descKey)}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  {t("services.request")} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
