/**
 * Configuration globale du site « dzrt ».
 * Point d'entrée unique pour les informations de marque, contact et SEO.
 * Modifiez les valeurs ci-dessous pour personnaliser tout le site.
 */

export const siteConfig = {
  name: "dzrt",
  legalName: "dzrt — Studio de web design",
  // Slogan court affiché ponctuellement
  tagline: "Studio de création de sites web & design",
  // Description SEO par défaut
  description:
    "dzrt conçoit des sites web sur mesure — site vitrine, one page et e-commerce — au design premium, optimisés pour le référencement (SEO) et la performance. Demandez votre devis.",

  // URL canonique du site (surchargée par NEXT_PUBLIC_SITE_URL en production)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dzrt.fr",

  // ── Coordonnées ──
  // ⚠️ REMPLACEZ ces valeurs par les vôtres avant la mise en ligne.
  email: "hello@dzrt.fr",
  // Numéro WhatsApp Business au format international SANS le « + » ni espaces.
  // ⚠️ PLACEHOLDER À REMPLACER par le vrai numéro.
  whatsappNumber: "33600000000",
  phoneDisplay: "+33 6 00 00 00 00",
  city: "Paris",
  country: "France",

  // ── Réseaux sociaux (⚠️ à personnaliser) ──
  socials: {
    instagram: "https://instagram.com/dzrt.studio",
    linkedin: "https://linkedin.com/company/dzrt-studio",
    dribbble: "https://dribbble.com/dzrt",
    behance: "https://behance.net/dzrt",
  },

  // Mots-clés SEO principaux
  keywords: [
    "création de site web",
    "site vitrine",
    "site one page",
    "site e-commerce",
    "web design",
    "référencement SEO",
    "agence web",
    "studio design",
    "site internet sur mesure",
    "Next.js",
    "Paris",
  ],
} as const;

// Navigation principale (header + footer)
export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Devis", href: "/devis" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "Contacts", href: "/contacts" },
] as const;

// Lien WhatsApp prêt à l'emploi
export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Bonjour dzrt, je souhaite discuter de mon projet de site web.",
)}`;
