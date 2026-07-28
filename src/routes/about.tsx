import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import { useI18n } from "@/i18n";
import { PageHero } from "@/components/Section";
import galleryBooth from "@/assets/gallery-booth.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — LinguaTech Conference Technology" },
      {
        name: "description",
        content:
          "Over a decade equipping conferences with interpretation and audio technology, backed by accredited interpreters and on-site engineers.",
      },
      { property: "og:title", content: "About Us — LinguaTech" },
      { property: "og:description", content: "Who we are and how we support multilingual events." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const pillars = [
    { icon: Target, t: "about.missionT", d: "about.missionD" },
    { icon: Eye, t: "about.visionT", d: "about.visionD" },
    { icon: Heart, t: "about.valuesT", d: "about.valuesD" },
  ];

  return (
    <>
      <PageHero title={t("about.title")} lead={t("about.lead")} />
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0 space-y-4 text-muted-foreground">
            <p className="leading-relaxed">{t("about.p1")}</p>
            <p className="leading-relaxed">{t("about.p2")}</p>
          </div>
          <img
            src={galleryBooth}
            alt="Interpreters working inside a soundproof booth"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="rounded-lg border border-border bg-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-accent text-brand">
                <p.icon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-brand-dark">{t(p.t)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(p.d)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
