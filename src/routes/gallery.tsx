import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { GALLERY } from "@/data/site";
import { PageHero } from "@/components/Section";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Conference Installations & Equipment" },
      {
        name: "description",
        content: "Photos of interpretation booths, conference audio installations and equipment from recent projects.",
      },
      { property: "og:title", content: "Gallery — LinguaTech" },
      { property: "og:description", content: "Installations, events and equipment from recent projects." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t("gallery.title")} lead={t("gallery.lead")} />
      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <figure key={g.captionKey} className="overflow-hidden rounded-lg border border-border bg-card">
              <img
                src={g.image}
                alt={t(g.captionKey)}
                loading="lazy"
                width={1024}
                height={768}
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">{t(g.captionKey)}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
