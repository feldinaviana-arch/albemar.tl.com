import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Linkedin, Instagram } from "lucide-react";
import { useI18n } from "@/i18n";
import { COMPANY } from "@/data/site";
import { PageHero } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Request a Quote for Equipment or Interpreters" },
      {
        name: "description",
        content:
          "Contact LinguaTech in Dili for interpretation equipment, conference headsets, audio systems, translation and technical support.",
      },
      { property: "og:title", content: "Contact — LinguaTech" },
      { property: "og:description", content: "Request a quote for equipment, interpreters or translation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={t("contact.title")} lead={t("contact.lead")} />
      <section className="section-y">
        <div className="container-page flex flex-col items-center justify-center">
          
          <div className="w-full max-w-xl space-y-6">
            <ul className="space-y-4 rounded-lg border border-border bg-card p-6 md:p-8 text-sm shadow-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <span>
                  <strong className="block text-foreground">{t("contact.office")}</strong>
                  <span className="text-muted-foreground">{COMPANY.address}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-brand transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <a href={`mailto:${COMPANY.email}`} className="text-muted-foreground hover:text-brand transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <span>
                  <strong className="block text-foreground">{t("contact.hours")}</strong>
                  <span className="text-muted-foreground">{t("contact.hoursV")}</span>
                </span>
              </li>
            </ul>

            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-md"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {t("contact.whatsapp")}
            </a>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-md border border-border p-2.5 text-brand hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border border-border p-2.5 text-brand hover:bg-accent transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md border border-border p-2.5 text-brand hover:bg-accent transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
