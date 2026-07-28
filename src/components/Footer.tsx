import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { COMPANY, PRODUCT_CATEGORIES } from "@/data/site";
import logo from "@/assets/albemar-logo.png.asset.json";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto bg-brand-dark text-primary-foreground">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logo.url}
              alt={`${COMPANY.name} logo`}
              width={480}
              height={480}
              loading="lazy"
              className="h-14 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-80">{t("footer.about")}</p>
          <div className="mt-5 flex items-center gap-3">
            <a href={COMPANY.social.facebook} aria-label="Facebook" className="rounded-md bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={COMPANY.social.linkedin} aria-label="LinkedIn" className="rounded-md bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={COMPANY.social.instagram} aria-label="Instagram" className="rounded-md bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">{t("footer.quick")}</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100">{t("nav.about")}</Link></li>
            <li><Link to="/services" className="hover:opacity-100">{t("nav.services")}</Link></li>
            <li><Link to="/gallery" className="hover:opacity-100">{t("nav.gallery")}</Link></li>
            <li><Link to="/clients" className="hover:opacity-100">{t("nav.clients")}</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">{t("footer.prods")}</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {PRODUCT_CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to="/products" hash={c.slug} className="hover:opacity-100">
                  {t(c.titleKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">{t("footer.contact")}</h2>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{COMPANY.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" />{COMPANY.phone}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" />{COMPANY.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs opacity-70">
          © {new Date().getFullYear()} {COMPANY.name}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
