import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useI18n } from "@/i18n";
import { PRODUCT_CATEGORIES } from "@/data/site";
import { PageHero } from "@/components/Section";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Interpretation Equipment, Headsets & Audio Systems" },
      {
        name: "description",
        content:
          "Book equipment, interpretation systems, conference headsets, audio systems and electronic devices for sale and rental.",
      },
      { property: "og:title", content: "Products — LinguaTech" },
      { property: "og:description", content: "Conference and interpretation equipment for sale and rental." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t("products.title")} lead={t("products.lead")} />
      <section className="section-y">
        <div className="container-page space-y-14">
          {PRODUCT_CATEGORIES.map((c, i) => (
            <article
              key={c.slug}
              id={c.slug}
              className="grid scroll-mt-28 gap-8 rounded-lg border border-border bg-card p-5 md:p-8 lg:grid-cols-2 lg:items-center"
            >
              <img
                src={c.image}
                alt={t(c.titleKey)}
                loading="lazy"
                width={1024}
                height={768}
                className={`w-full rounded-md object-cover ${i % 2 ? "lg:order-2" : ""}`}
              />
              <div className="min-w-0">
                <h2 className="font-display text-xl font-bold text-brand-dark md:text-2xl">{t(c.titleKey)}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{t(c.descKey)}</p>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-brand">{t("products.features")}</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {t(c.featuresKey)
                    .split("|")
                    .map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                        {f}
                      </li>
                    ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-dark"
                >
                  {t("products.enquire")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
