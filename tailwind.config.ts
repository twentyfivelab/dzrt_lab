import type { Config } from "tailwindcss";

/**
 * Configuration Tailwind — direction artistique « luxe minimaliste ».
 *
 * Principe : neutres profonds + un seul accent (or sourd). Les dégradés
 * pastel vibrants (façon wallpaper macOS) ne sont PAS des couleurs de remplissage
 * ici : ils vivent en CSS (voir globals.css → .aurora) et s'emploient par touches.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fonds neutres chauds
        canvas: "#F5F2EC", // blanc cassé / sable très clair (fond principal)
        paper: "#FFFFFF",
        sand: "#ECE7DD", // panneaux neutres discrets
        night: "#141009", // sections sombres (presque noir, chaud)

        // Encre / texte (noir chaud, contraste maîtrisé)
        ink: {
          DEFAULT: "#17150F",
          soft: "#403B31",
          muted: "#79735F",
        },

        // Filets / bordures
        line: "#E2DBCC",

        // Accent unique : or sourd, chic et discret
        gold: {
          DEFAULT: "#9F8244",
          deep: "#7C6531",
          soft: "#EFE7D2",
        },

        // Rouge brique sourd — réservé aux erreurs de formulaire (jamais criard)
        danger: "#9A3B2E",
      },
      fontFamily: {
        // Variables injectées par next/font (app/layout.tsx)
        display: ["var(--font-display)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Échelle fluide pour de grands titres éditoriaux (display sérif)
        "display-xl": [
          "clamp(2.6rem, 6.5vw, 5.75rem)",
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2.1rem, 5vw, 4rem)",
          { lineHeight: "1.04", letterSpacing: "-0.018em" },
        ],
        "display-md": [
          "clamp(1.65rem, 3.4vw, 2.6rem)",
          { lineHeight: "1.1", letterSpacing: "-0.012em" },
        ],
      },
      letterSpacing: {
        brand: "0.32em", // wordmark façon maison de luxe
      },
      boxShadow: {
        soft: "0 1px 2px rgba(23, 21, 15, 0.04), 0 12px 32px -16px rgba(23, 21, 15, 0.12)",
        lift: "0 2px 6px rgba(23, 21, 15, 0.06), 0 30px 60px -24px rgba(23, 21, 15, 0.20)",
      },
      maxWidth: {
        container: "1240px",
        measure: "62ch", // largeur de lecture confortable (anti-coupures)
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
