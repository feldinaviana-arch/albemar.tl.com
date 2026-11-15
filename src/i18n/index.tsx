import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "pt" | "tet";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "tet", label: "Tetun", short: "TET" },
];

type Dict = Record<string, string>;

const en: Dict = {
  "brand.name": "LinguaTech",
  "brand.tagline": "Conference Technology & Language Services",

  "nav.home": "Home",
  "nav.about": "About Us",
  "nav.products": "Products",
  "nav.services": "Services",
  "nav.gallery": "Gallery",
  "nav.clients": "Clients",
  "nav.contact": "Contact",
  "nav.quote": "Request a Quote",

  "hero.eyebrow": "Conference equipment & language solutions",
  "hero.title": "Every voice heard. In every language.",
  "hero.subtitle":
    "We supply and rent professional interpretation systems, conference headsets and audio equipment — and deliver expert interpretation and translation for events of any size.",
  "hero.cta": "Request a Quote",
  "hero.cta2": "Explore Products",
  "hero.stat1": "Events equipped",
  "hero.stat2": "Working languages",
  "hero.stat3": "Years of service",

  "home.catsTitle": "Product categories",
  "home.catsSub": "Certified equipment, ready for sale or rental.",
  "home.servicesTitle": "Professional language services",
  "home.servicesSub": "Certified interpreters and translators for conferences, courts and business.",
  "home.whyTitle": "Why work with us",
  "home.why1": "Certified equipment",
  "home.why1d": "Tested, calibrated hardware from trusted manufacturers, always event-ready.",
  "home.why2": "On-site technicians",
  "home.why2d": "Our engineers install, monitor and support your event from start to finish.",
  "home.why3": "Fast nationwide delivery",
  "home.why3d": "Rental fleets and spare units dispatched within 24 hours.",
  "home.why4": "Transparent pricing",
  "home.why4d": "Clear quotes with no hidden setup or transport surprises.",
  "home.ctaTitle": "Planning a multilingual event?",
  "home.ctaSub": "Tell us the dates, venue and languages — we will send a full quote within one business day.",

  "about.title": "About Us",
  "about.lead":
    "We are a specialist supplier of conference technology and a provider of professional language services.",
  "about.p1":
    "For over a decade we have equipped conferences, parliaments, training centres and corporate events with reliable interpretation and audio technology. What began as a small equipment rental service has grown into a full partner for multilingual communication.",
  "about.p2":
    "Our team combines audio engineers, technicians and accredited interpreters, so clients get hardware and human expertise from one accountable source.",
  "about.missionT": "Our mission",
  "about.missionD":
    "To remove language and technical barriers so that every participant can take part fully in any conversation.",
  "about.visionT": "Our vision",
  "about.visionD":
    "To be the most trusted partner for conference technology and language services in the region.",
  "about.valuesT": "Our values",
  "about.valuesD": "Reliability, accuracy, confidentiality and respect for every language we work with.",

  "products.title": "Products",
  "products.lead":
    "Equipment for sale and rental — interpretation systems, conference headsets and audio systems for your office or venue.",
  "products.features": "Includes",
  "products.enquire": "Enquire about this range",

  "cat.book": "Book Equipment",
  "cat.bookD":
    "Book scanners, binding and laminating machines, library shelving and archive handling equipment for institutions and print rooms.",
  "cat.bookF": "Overhead book scanners|Spiral & thermal binders|Laminators and trimmers|Library shelving",
  "cat.interp": "Interpretation Equipment",
  "cat.interpD":
    "Complete simultaneous interpretation systems: infrared and digital transmitters, receivers, interpreter consoles and soundproof booths.",
  "cat.interpF": "IR & digital transmitters|Multi-channel receivers|Interpreter consoles|Portable tour-guide systems",
  "cat.headsets": "Conference Headsets",
  "cat.headsetsD":
    "Single- and double-ear delegate headsets, interpreter headsets with boom microphones, and hygienic earpieces for large audiences.",
  "cat.headsetsF": "Delegate headsets|Interpreter boom headsets|Stereo monitoring headphones|Disposable earpieces",
  "cat.audio": "Audio Systems",
  "cat.audioD":
    "Speakers, mixers, amplifiers, wireless microphones and full PA packages sized for boardrooms up to conference halls.",
  "cat.audioF": "Active PA speakers|Digital mixing consoles|Wireless mic systems|Amplifiers & DI boxes",

  "services.title": "Services",
  "services.lead":
    "Language and technical services delivered by accredited professionals, on-site or remote.",
  "services.request": "Request this service",
  "svc.sim": "Simultaneous Interpretation",
  "svc.simD":
    "Real-time interpretation from soundproof booths with full equipment, ideal for conferences, summits and live broadcasts.",
  "svc.con": "Consecutive Interpretation",
  "svc.conD":
    "Interpreters working alongside your speakers for meetings, negotiations, court hearings and official visits.",
  "svc.doc": "Document Translation",
  "svc.docD":
    "Certified translation of legal, technical, medical and commercial documents with proofreading and formatting.",
  "svc.rent": "Conference Equipment Rental",
  "svc.rentD":
    "Short- and long-term rental of interpretation systems, headsets, PA and recording equipment, delivered and installed.",
  "svc.tech": "Technical Support",
  "svc.techD":
    "On-site engineers, preventive maintenance, repairs and stand-by technicians for the whole duration of your event.",

  "gallery.title": "Gallery",
  "gallery.lead": "Installations, events and equipment from recent projects.",
  "gallery.i1": "Interpreter booth in operation",
  "gallery.i2": "Conference audio setup",
  "gallery.i3": "Delegates with wireless headsets",
  "gallery.i4": "Interpretation system deployment",
  "gallery.i5": "Conference headset fleet",
  "gallery.i6": "Sound system installation",

  "clients.title": "Clients",
  "clients.lead":
    "Government bodies, international organisations, universities and private companies rely on our equipment and interpreters.",
  "clients.trusted": "Trusted by teams across sectors",
  "clients.testT": "What clients say",
  "clients.t1":
    "The interpretation system worked flawlessly across three days and four languages. Their technician never left our side.",
  "clients.t1a": "Event Director, National Summit",
  "clients.t2":
    "Fast delivery, clean equipment and interpreters who genuinely understood our technical vocabulary.",
  "clients.t2a": "Operations Manager, Energy Sector",
  "clients.t3": "Our go-to partner for every multilingual training programme we run.",
  "clients.t3a": "Programme Coordinator, NGO",

  "contact.title": "Contact",
  "contact.lead": "Send us your requirements and we will reply within one business day.",
  "contact.name": "Full name",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.subject": "Subject",
  "contact.message": "Message",
  "contact.send": "Send message",
  "contact.sending": "Sending…",
  "contact.sent": "Thank you — your message has been received. We will be in touch shortly.",
  "contact.error": "Something went wrong while sending your message. Please try again.",
  "contact.whatsapp": "Chat on WhatsApp",
  "contact.office": "Office",
  "contact.hours": "Opening hours",
  "contact.hoursV": "Monday – Friday, 08:00 – 18:00",
  "contact.findUs": "Find us",

  "footer.about":
    "Conference technology, interpretation equipment and professional language services for organisations that work across languages.",
  "footer.quick": "Quick links",
  "footer.prods": "Products",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
  "footer.follow": "Follow us",
  "lang.label": "Language",
};

const pt: Dict = {
  ...en,
  "brand.tagline": "Tecnologia de Conferência e Serviços Linguísticos",
  "nav.home": "Início",
  "nav.about": "Sobre Nós",
  "nav.products": "Produtos",
  "nav.services": "Serviços",
  "nav.gallery": "Galeria",
  "nav.clients": "Clientes",
  "nav.contact": "Contacto",
  "nav.quote": "Pedir Orçamento",

  "hero.eyebrow": "Equipamento de conferência e soluções linguísticas",
  "hero.title": "Cada voz ouvida. Em todas as línguas.",
  "hero.subtitle":
    "Fornecemos e alugamos sistemas profissionais de interpretação, auscultadores de conferência e equipamento áudio — e prestamos serviços de interpretação e tradução para eventos de qualquer dimensão.",
  "hero.cta": "Pedir Orçamento",
  "hero.cta2": "Ver Produtos",
  "hero.stat1": "Eventos equipados",
  "hero.stat2": "Línguas de trabalho",
  "hero.stat3": "Anos de experiência",

  "home.catsTitle": "Categorias de produtos",
  "home.catsSub": "Equipamento certificado, para venda ou aluguer.",
  "home.servicesTitle": "Serviços linguísticos profissionais",
  "home.servicesSub": "Intérpretes e tradutores certificados para conferências, tribunais e empresas.",
  "home.whyTitle": "Porquê trabalhar connosco",
  "home.why1": "Equipamento certificado",
  "home.why1d": "Material testado e calibrado de fabricantes de confiança, sempre pronto a usar.",
  "home.why2": "Técnicos no local",
  "home.why2d": "Os nossos engenheiros instalam, monitorizam e apoiam o evento do início ao fim.",
  "home.why3": "Entrega rápida",
  "home.why3d": "Frota de aluguer e unidades de reserva enviadas em 24 horas.",
  "home.why4": "Preços transparentes",
  "home.why4d": "Orçamentos claros, sem custos escondidos de instalação ou transporte.",
  "home.ctaTitle": "Está a planear um evento multilingue?",
  "home.ctaSub": "Indique datas, local e línguas — enviamos um orçamento completo em um dia útil.",

  "about.title": "Sobre Nós",
  "about.lead":
    "Somos fornecedores especializados em tecnologia de conferência e prestadores de serviços linguísticos profissionais.",
  "about.p1":
    "Há mais de uma década equipamos conferências, parlamentos, centros de formação e eventos empresariais com tecnologia de interpretação e áudio fiável. O que começou como um pequeno serviço de aluguer é hoje um parceiro completo de comunicação multilingue.",
  "about.p2":
    "A nossa equipa reúne engenheiros de áudio, técnicos e intérpretes acreditados, oferecendo hardware e competência humana numa só fonte responsável.",
  "about.missionT": "Missão",
  "about.missionD":
    "Eliminar barreiras linguísticas e técnicas para que todos possam participar plenamente em qualquer conversa.",
  "about.visionT": "Visão",
  "about.visionD":
    "Ser o parceiro mais confiável em tecnologia de conferência e serviços linguísticos da região.",
  "about.valuesT": "Valores",
  "about.valuesD": "Fiabilidade, rigor, confidencialidade e respeito por cada língua com que trabalhamos.",

  "products.title": "Produtos",
  "products.lead":
    "Equipamento para venda e aluguer — sistemas de interpretação, auscultadores de conferência e sistemas de áudio para o seu escritório ou sala.",
  "products.features": "Inclui",
  "products.enquire": "Pedir informações",

  "cat.book": "Equipamento para Livros",
  "cat.bookD":
    "Scanners de livros, máquinas de encadernação e plastificação, estantes e equipamento de arquivo para instituições.",
  "cat.bookF": "Scanners de livros|Encadernadoras|Plastificadoras e guilhotinas|Estantes de biblioteca",
  "cat.interp": "Equipamento de Interpretação",
  "cat.interpD":
    "Sistemas completos de interpretação simultânea: transmissores digitais e por infravermelhos, recetores, consolas e cabinas.",
  "cat.interpF": "Transmissores IR e digitais|Recetores multicanal|Consolas de intérprete|Sistemas portáteis",
  "cat.headsets": "Auscultadores de Conferência",
  "cat.headsetsD":
    "Auscultadores de delegado, auscultadores de intérprete com microfone e auriculares higiénicos para grandes audiências.",
  "cat.headsetsF": "Auscultadores de delegado|Auscultadores de intérprete|Auscultadores de monitorização|Auriculares descartáveis",
  "cat.audio": "Sistemas de Áudio",
  "cat.audioD":
    "Colunas, mesas de mistura, amplificadores, microfones sem fios e sistemas PA completos para salas de qualquer dimensão.",
  "cat.audioF": "Colunas amplificadas|Mesas de mistura digitais|Microfones sem fios|Amplificadores e DI",

  "services.title": "Serviços",
  "services.lead": "Serviços linguísticos e técnicos prestados por profissionais acreditados, no local ou à distância.",
  "services.request": "Pedir este serviço",
  "svc.sim": "Interpretação Simultânea",
  "svc.simD":
    "Interpretação em tempo real a partir de cabinas insonorizadas com equipamento completo, ideal para conferências e cimeiras.",
  "svc.con": "Interpretação Consecutiva",
  "svc.conD":
    "Intérpretes junto dos oradores em reuniões, negociações, audiências judiciais e visitas oficiais.",
  "svc.doc": "Tradução de Documentos",
  "svc.docD":
    "Tradução certificada de documentos jurídicos, técnicos, médicos e comerciais, com revisão e formatação.",
  "svc.rent": "Aluguer de Equipamento",
  "svc.rentD":
    "Aluguer de curta e longa duração de sistemas de interpretação, auscultadores, PA e gravação, com entrega e instalação.",
  "svc.tech": "Apoio Técnico",
  "svc.techD":
    "Engenheiros no local, manutenção preventiva, reparações e técnicos de apoio durante todo o evento.",

  "gallery.title": "Galeria",
  "gallery.lead": "Instalações, eventos e equipamento de projetos recentes.",
  "gallery.i1": "Cabina de interpretação em funcionamento",
  "gallery.i2": "Montagem de áudio de conferência",
  "gallery.i3": "Delegados com auscultadores sem fios",
  "gallery.i4": "Instalação de sistema de interpretação",
  "gallery.i5": "Auscultadores de conferência",
  "gallery.i6": "Instalação de sistema de som",

  "clients.title": "Clientes",
  "clients.lead":
    "Organismos públicos, organizações internacionais, universidades e empresas privadas confiam no nosso equipamento e intérpretes.",
  "clients.trusted": "Confiança de equipas em vários setores",
  "clients.testT": "O que dizem os clientes",
  "clients.t1":
    "O sistema de interpretação funcionou impecavelmente durante três dias e quatro línguas. O técnico nunca nos deixou sozinhos.",
  "clients.t1a": "Diretora de Eventos, Cimeira Nacional",
  "clients.t2": "Entrega rápida, equipamento impecável e intérpretes que dominam o nosso vocabulário técnico.",
  "clients.t2a": "Gestor de Operações, Setor Energético",
  "clients.t3": "O nosso parceiro de eleição para todos os programas de formação multilingue.",
  "clients.t3a": "Coordenadora de Programa, ONG",

  "contact.title": "Contacto",
  "contact.lead": "Envie-nos os seus requisitos e respondemos em um dia útil.",
  "contact.name": "Nome completo",
  "contact.email": "Email",
  "contact.phone": "Telefone",
  "contact.subject": "Assunto",
  "contact.message": "Mensagem",
  "contact.send": "Enviar mensagem",
  "contact.sending": "A enviar…",
  "contact.sent": "Obrigado — a sua mensagem foi recebida. Entraremos em contacto em breve.",
  "contact.error": "Ocorreu um erro ao enviar a sua mensagem. Tente novamente.",
  "contact.whatsapp": "Falar no WhatsApp",
  "contact.office": "Escritório",
  "contact.hours": "Horário",
  "contact.hoursV": "Segunda a sexta, 08:00 – 18:00",
  "contact.findUs": "Onde estamos",

  "footer.about":
    "Tecnologia de conferência, equipamento de interpretação e serviços linguísticos profissionais para organizações multilingues.",
  "footer.quick": "Links rápidos",
  "footer.prods": "Produtos",
  "footer.contact": "Contacto",
  "footer.rights": "Todos os direitos reservados.",
  "footer.follow": "Siga-nos",
  "lang.label": "Idioma",
};

const tet: Dict = {
  ...en,
  "brand.tagline": "Teknolojia Konferénsia no Servisu Lian",
  "nav.home": "Uma",
  "nav.about": "Kona-ba Ami",
  "nav.products": "Produtu",
  "nav.services": "Servisu",
  "nav.gallery": "Galeria",
  "nav.clients": "Kliente",
  "nav.contact": "Kontaktu",
  "nav.quote": "Husu Orsamentu",

  "hero.eyebrow": "Ekipamentu konferénsia no solusaun lian",
  "hero.title": "Lian hotu-hotu rona. Iha lian hotu-hotu.",
  "hero.subtitle":
    "Ami fa'an no aluga sistema interpretasaun profisionál, auskultadór konferénsia no ekipamentu áudio — no fó servisu interpretasaun no tradusaun ba eventu boot ka ki'ik.",
  "hero.cta": "Husu Orsamentu",
  "hero.cta2": "Haree Produtu",
  "hero.stat1": "Eventu ne'ebé ekipa ona",
  "hero.stat2": "Lian servisu",
  "hero.stat3": "Tinan esperiénsia",

  "home.catsTitle": "Kategoria produtu",
  "home.catsSub": "Ekipamentu sertifikadu, ba fa'an ka aluga.",
  "home.servicesTitle": "Servisu lian profisionál",
  "home.servicesSub": "Intérprete no tradutór sertifikadu ba konferénsia, tribunál no negósiu.",
  "home.whyTitle": "Tanbasá servisu ho ami",
  "home.why1": "Ekipamentu sertifikadu",
  "home.why1d": "Ekipamentu ne'ebé teste no kalibra husi fabrikante fiar, prontu ba eventu.",
  "home.why2": "Tékniku iha fatin",
  "home.why2d": "Ami-nia enjeñeiru instala, monitoriza no apoiu ita-nia eventu husi komesu to'o rohan.",
  "home.why3": "Entrega lalais",
  "home.why3d": "Ekipamentu aluga no reserva haruka iha oras 24 nia laran.",
  "home.why4": "Presu klaru",
  "home.why4d": "Orsamentu klaru, la iha kustu subar ba instalasaun ka transporte.",
  "home.ctaTitle": "Prepara eventu multilingue?",
  "home.ctaSub": "Hatete data, fatin no lian — ami haruka orsamentu kompletu iha loron servisu ida.",

  "about.title": "Kona-ba Ami",
  "about.lead": "Ami mak fornesedór espesializadu ba teknolojia konferénsia no servisu lian profisionál.",
  "about.p1":
    "Ho tinan sanulu resin, ami ekipa ona konferénsia, parlamentu, sentru formasaun no eventu empreza ho teknolojia interpretasaun no áudio ne'ebé fiar. Servisu aluga ki'ik sai ona parseiru kompletu ba komunikasaun multilingue.",
  "about.p2":
    "Ami-nia ekipa inklui enjeñeiru áudio, tékniku no intérprete akreditadu, hodi fó ekipamentu no matenek iha fatin ida de'it.",
  "about.missionT": "Misaun",
  "about.missionD": "Hasai barreira lian no tékniku atu ema hotu bele partisipa kompletu iha konversa ida-idak.",
  "about.visionT": "Vizaun",
  "about.visionD": "Sai parseiru ne'ebé fiar liu iha teknolojia konferénsia no servisu lian iha rejiaun.",
  "about.valuesT": "Valór",
  "about.valuesD": "Konfiansa, presizaun, konfidensialidade no respeitu ba lian hotu-hotu.",

  "products.title": "Produtu",
  "products.lead": "Ekipamentu ba fa'an no aluga — sistema interpretasaun, auskultadór konferénsia no sistema áudio ba ita-nia eskritóriu.",
  "products.features": "Inklui",
  "products.enquire": "Husu informasaun",

  "cat.book": "Ekipamentu Livru",
  "cat.bookD":
    "Skaner livru, masina enkuadernasaun no laminasaun, prateleira biblioteka no ekipamentu arkivu ba instituisaun.",
  "cat.bookF": "Skaner livru|Masina enkuadernasaun|Laminadór no guilhotina|Prateleira biblioteka",
  "cat.interp": "Ekipamentu Interpretasaun",
  "cat.interpD":
    "Sistema interpretasaun simultánea kompletu: transmisór infravermellu no dijitál, resetór, konsola intérprete no kabine.",
  "cat.interpF": "Transmisór IR no dijitál|Resetór multikanál|Konsola intérprete|Sistema portátil",
  "cat.headsets": "Auskultadór Konferénsia",
  "cat.headsetsD":
    "Auskultadór delegadu, auskultadór intérprete ho mikrofone, no auriku ijieniku ba partisipante barak.",
  "cat.headsetsF": "Auskultadór delegadu|Auskultadór intérprete|Auskultadór monitorizasaun|Auriku deskartavel",
  "cat.audio": "Sistema Áudio",
  "cat.audioD":
    "Kolunas, mesa mistura, amplifikadór, mikrofone sem fiu no sistema PA kompletu ba sala oioin.",
  "cat.audioF": "Koluna PA ativu|Mesa mistura dijitál|Mikrofone sem fiu|Amplifikadór no DI",

  "services.title": "Servisu",
  "services.lead": "Servisu lian no tékniku husi profisionál akreditadu, iha fatin ka online.",
  "services.request": "Husu servisu ne'e",
  "svc.sim": "Interpretasaun Simultánea",
  "svc.simD": "Interpretasaun tempu real husi kabine ho ekipamentu kompletu, di'ak ba konferénsia no kimeira.",
  "svc.con": "Interpretasaun Konsekutiva",
  "svc.conD": "Intérprete servisu hamutuk ho oradór iha reuniaun, negosiasaun, tribunál no vizita ofisiál.",
  "svc.doc": "Tradusaun Dokumentu",
  "svc.docD": "Tradusaun sertifikadu ba dokumentu legál, tékniku, médiku no komersiál, ho revizaun no formatasaun.",
  "svc.rent": "Aluga Ekipamentu Konferénsia",
  "svc.rentD": "Aluga tempu badak ka naruk ba sistema interpretasaun, auskultadór, PA no gravasaun, ho instalasaun.",
  "svc.tech": "Apoiu Tékniku",
  "svc.techD": "Enjeñeiru iha fatin, manutensaun preventiva, reparasaun no tékniku prontu durante eventu tomak.",

  "gallery.title": "Galeria",
  "gallery.lead": "Instalasaun, eventu no ekipamentu husi projetu foun.",
  "gallery.i1": "Kabine interpretasaun servisu hela",
  "gallery.i2": "Montajen áudio konferénsia",
  "gallery.i3": "Delegadu ho auskultadór sem fiu",
  "gallery.i4": "Instalasaun sistema interpretasaun",
  "gallery.i5": "Auskultadór konferénsia",
  "gallery.i6": "Instalasaun sistema som",

  "clients.title": "Kliente",
  "clients.lead":
    "Instituisaun governu, organizasaun internasionál, universidade no kompañia privadu fiar ami-nia ekipamentu no intérprete.",
  "clients.trusted": "Ekipa husi setór oioin fiar ami",
  "clients.testT": "Kliente hatete",
  "clients.t1": "Sistema interpretasaun servisu di'ak durante loron tolu ho lian haat. Tékniku sempre iha ami-nia sorin.",
  "clients.t1a": "Diretór Eventu, Kimeira Nasionál",
  "clients.t2": "Entrega lalais, ekipamentu moos no intérprete ne'ebé komprende ami-nia vokabuláriu tékniku.",
  "clients.t2a": "Jestór Operasaun, Setór Enerjia",
  "clients.t3": "Parseiru prinsipál ba ami-nia programa formasaun multilingue hotu.",
  "clients.t3a": "Koordenadór Programa, ONG",

  "contact.title": "Kontaktu",
  "contact.lead": "Haruka ita-nia nesesidade no ami responde iha loron servisu ida.",
  "contact.name": "Naran kompletu",
  "contact.email": "Email",
  "contact.phone": "Telefone",
  "contact.subject": "Asuntu",
  "contact.message": "Mensajen",
  "contact.send": "Haruka mensajen",
  "contact.sending": "Haruka hela…",
  "contact.sent": "Obrigadu — ami simu ona ita-nia mensajen. Ami sei kontaktu lalais.",
  "contact.error": "Iha sala ida bainhira haruka mensajen. Favor koko fali.",
  "contact.whatsapp": "Koalia iha WhatsApp",
  "contact.office": "Eskritóriu",
  "contact.hours": "Oras servisu",
  "contact.hoursV": "Segunda – Sesta, 08:00 – 18:00",
  "contact.findUs": "Ami-nia fatin",

  "footer.about":
    "Teknolojia konferénsia, ekipamentu interpretasaun no servisu lian profisionál ba organizasaun multilingue.",
  "footer.quick": "Ligasaun lalais",
  "footer.prods": "Produtu",
  "footer.contact": "Kontaktu",
  "footer.rights": "Direitu hotu rezervadu.",
  "footer.follow": "Tuir ami",
  "lang.label": "Lian",
};

const dicts: Record<Lang, Dict> = { en, pt, tet };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => dicts.en[k] ?? k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang") as Lang | null;
    if (stored && dicts[stored]) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
    document.documentElement.lang = l === "tet" ? "tet" : l;
  };

  const t = (k: string) => dicts[lang][k] ?? dicts.en[k] ?? k;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
