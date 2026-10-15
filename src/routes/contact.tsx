import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Linkedin, Instagram } from "lucide-react";
import { useI18n } from "@/i18n";
import { COMPANY } from "@/data/site";
import { PageHero } from "@/components/Section";
import { submitContactForm } from "@/lib/contact.functions";

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
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submit = useServerFn(submitContactForm);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setError(null);
    try {
      await submit({
        data: {
          name: formData.get("name")?.toString() || "",
          email: formData.get("email")?.toString() || "",
          phone: formData.get("phone")?.toString() || "",
          subject: formData.get("subject")?.toString() || "",
          message: formData.get("message")?.toString() || "",
        },
      });
      setSent(true);
      form.reset();
    } catch {
      setError(t("contact.error"));
    } finally {
      setSending(false);
    }
  };

  const field = "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-ring/30 text-foreground";

  return (
    <>
      <PageHero title={t("contact.title")} lead={t("contact.lead")} />
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          
          <form onSubmit={onSubmit} className="min-w-0 rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-foreground">
                {t("contact.name")}
                <input required name="name" className={field} placeholder="Your Name" />
              </label>
              <label className="block text-sm font-medium text-foreground">
                {t("contact.email")}
                <input required type="email" name="email" className={field} placeholder="your@email.com" />
              </label>
              <label className="block text-sm font-medium text-foreground">
                {t("contact.phone")}
                <input name="phone" className={field} placeholder="Optional" />
              </label>
              <label className="block text-sm font-medium text-foreground">
                {t("contact.subject")}
                <input required name="subject" className={field} placeholder="Subject" />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-foreground">
              {t("contact.message")}
              <textarea required name="message" rows={6} className={field} placeholder="Type your message here..." />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full rounded-md bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
            >
              {sending ? t("contact.sending") : t("contact.send")}
            </button>
            {sent && (
              <p role="status" className="mt-4 rounded-md bg-accent px-4 py-3 text-sm text-brand-dark font-medium">
                {t("contact.sent")}
              </p>
            )}
            {error && (
              <p role="alert" className="mt-4 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive font-medium">
                {error}
              </p>
            )}
          </form>

          <div className="min-w-0 space-y-6">
            <ul className="space-y-4 rounded-lg border border-border bg-card p-6 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <span>
                  <strong className="block text-foreground">{t("contact.office")}</strong>
                  <span className="text-muted-foreground">{COMPANY.address}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-brand">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <a href={`mailto:${COMPANY.email}`} className="text-muted-foreground hover:text-brand">
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
              href={`https://wa.me{COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {t("contact.whatsapp")}
            </a>

            <div className="flex items-center gap-3">
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-md border border-border p-2.5 text-brand hover:bg-accent">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border border-border p-2.5 text-brand hover:bg-accent">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-md border border-border p-2.5 text-brand hover:bg-accent">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
