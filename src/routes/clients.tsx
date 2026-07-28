import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { useI18n } from "@/i18n";
import { CLIENTS } from "@/data/site";
import { PageHero, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Organisations We Support" },
      {
        name: "description",
        content:
          "Government bodies, international organisations, universities and companies that rely on our conference equipment and interpreters.",
      },
      { property: "og:title", content: "Clients — LinguaTech" },
      { property: "og:description", content: "Who we work with and what they say about us." },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  const { t } = useI18n();
  const testimonials = [
    { q: "clients.t1", a: "clients.t1a" },
    { q: "clients.t2", a: "clients.t2a" },
    { q: "clients.t3", a: "clients.t3a" },
  ];

  return (
    <>
      <PageHero title={t("clients.title")} lead={t("clients.lead")} />
      <section className="section-y">
        <div className="container-page">
          <SectionHeading title={t("clients.trusted")} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CLIENTS.map((c) => (
              <li
                key={c}
                className="grid min-h-24 place-items-center rounded-lg border border-border bg-card p-5 text-center text-sm font-semibold text-brand-dark"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading title={t("clients.testT")} />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((tm) => (
              <blockquote key={tm.q} className="rounded-lg border border-border bg-card p-6">
                <Quote className="h-6 w-6 text-brand" aria-hidden />
                <p className="mt-4 text-sm leading-relaxed text-foreground">{t(tm.q)}</p>
                <footer className="mt-4 text-xs font-semibold text-muted-foreground">{t(tm.a)}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
