import catBook from "@/assets/cat-book.jpg";
import catInterp from "@/assets/cat-interpretation.jpg";
import catHeadsets from "@/assets/cat-headsets.jpg";
import catAudio from "@/assets/cat-audio.jpg";
import catElectronics from "@/assets/cat-electronics.jpg";
import galleryBooth from "@/assets/gallery-booth.jpg";
import gallerySetup from "@/assets/gallery-setup.jpg";
import hero from "@/assets/hero-conference.jpg";

export const COMPANY = {
  name: "LinguaTech",
  phone: "+670 7700 1234",
  whatsapp: "67077001234",
  email: "info@linguatech.example",
  address: "Rua Belarmino Lobo 12, Dili, Timor-Leste",
  mapsQuery: "Rua Belarmino Lobo, Dili, Timor-Leste",
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
};

export const PRODUCT_CATEGORIES = [
  { slug: "book-equipment", image: catBook, titleKey: "cat.book", descKey: "cat.bookD", featuresKey: "cat.bookF" },
  { slug: "interpretation-equipment", image: catInterp, titleKey: "cat.interp", descKey: "cat.interpD", featuresKey: "cat.interpF" },
  { slug: "conference-headsets", image: catHeadsets, titleKey: "cat.headsets", descKey: "cat.headsetsD", featuresKey: "cat.headsetsF" },
  { slug: "audio-systems", image: catAudio, titleKey: "cat.audio", descKey: "cat.audioD", featuresKey: "cat.audioF" },
  { slug: "electronic-devices", image: catElectronics, titleKey: "cat.elec", descKey: "cat.elecD", featuresKey: "cat.elecF" },
];

export const SERVICES = [
  { slug: "simultaneous-interpretation", titleKey: "svc.sim", descKey: "svc.simD" },
  { slug: "consecutive-interpretation", titleKey: "svc.con", descKey: "svc.conD" },
  { slug: "document-translation", titleKey: "svc.doc", descKey: "svc.docD" },
  { slug: "conference-equipment-rental", titleKey: "svc.rent", descKey: "svc.rentD" },
  { slug: "technical-support", titleKey: "svc.tech", descKey: "svc.techD" },
];

export const GALLERY = [
  { image: galleryBooth, captionKey: "gallery.i1" },
  { image: gallerySetup, captionKey: "gallery.i2" },
  { image: hero, captionKey: "gallery.i3" },
  { image: catInterp, captionKey: "gallery.i4" },
  { image: catHeadsets, captionKey: "gallery.i5" },
  { image: catAudio, captionKey: "gallery.i6" },
];

export const CLIENTS = [
  "Ministry of Foreign Affairs",
  "United Nations Country Team",
  "National University",
  "Central Bank",
  "Global Energy Group",
  "Timor Chamber of Commerce",
  "Health Development Agency",
  "Pacific Legal Institute",
];

export const HERO_IMAGE = hero;
