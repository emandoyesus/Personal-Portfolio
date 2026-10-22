import {
  contrastRatio,
  ensureContrastOnDark,
  ensureContrastOnLight,
  mix,
  rgba,
  relativeLuminance,
  rgbTriplet,
  saturation,
} from "@/lib/color";

export type Palette = {
  id: string;
  label: string;
  primary: string;
  secondary: string;
};

/**
 * The ten colour combinations, in the order they were supplied.
 * Swapping the active theme = changing `ACTIVE_PALETTE_ID` below.
 */
export const PALETTES: readonly Palette[] = [
  {
    id: "blueberry-cream-soda",
    label: "Blueberry & Cream Soda",
    primary: "#2D428D",
    secondary: "#FFF3CA",
  },
  {
    id: "neon-orange-porcelain",
    label: "Neon Orange & Porcelain",
    primary: "#FF6115",
    secondary: "#FFFCF4",
  },
  {
    id: "inkberry-peach",
    label: "Inkberry & Peach",
    primary: "#1A0B2E",
    secondary: "#FFB7A5",
  },
  {
    id: "forest-graphite-acid-mint",
    label: "Forest Graphite & Acid Mint",
    primary: "#18251D",
    secondary: "#B7FF72",
  },
  {
    id: "signal-violet-mist-gray",
    label: "Signal Violet & Mist Gray",
    primary: "#7A35FF",
    secondary: "#F0F2F5",
  },
  {
    id: "clay-brown-soft-butter",
    label: "Clay Brown & Soft Butter",
    primary: "#6B352A",
    secondary: "#FFF1A6",
  },
  {
    id: "quantum-blue-ice-glass",
    label: "Quantum Blue & Ice Glass",
    primary: "#3B5BFF",
    secondary: "#EEF4FF",
  },
  {
    id: "cyber-teal-aqua-foam",
    label: "Cyber Teal & Aqua Foam",
    primary: "#10474A",
    secondary: "#88FFDB",
  },
  {
    id: "raspberry-pale-sky",
    label: "Raspberry & Pale Sky",
    primary: "#AD1952",
    secondary: "#DAF0FF",
  },
  {
    id: "prompt-blue-ai-green",
    label: "Prompt Blue & AI Green",
    primary: "#0B132B",
    secondary: "#39FF88",
  },
];

/** The combination currently applied to the site. */
export const ACTIVE_PALETTE_ID = "cyber-teal-aqua-foam";

export function getActivePalette(): Palette {
  return PALETTES.find((p) => p.id === ACTIVE_PALETTE_ID) ?? PALETTES[0];
}

type Tokens = Record<string, string>;

/**
 * Minimum relative luminance for a colour to still read as an accent on a
 * near-black canvas. Below this the colour only works as a surface tone.
 */
const MIN_ACCENT_LUMINANCE = 0.03;

/** The accent is the primary unless it is too dark to be seen on the canvas. */
function pickAccent(primary: string, secondary: string): string {
  if (relativeLuminance(primary) >= MIN_ACCENT_LUMINANCE) return primary;
  if (relativeLuminance(secondary) >= MIN_ACCENT_LUMINANCE) return secondary;
  return primary;
}

/**
 * The canvas tint. A dark partner colour drives it; otherwise the accent is
 * deepened — keeping a deep accent's hue in the background.
 */
function pickBaseTint(accent: string, partner: string): string {
  if (relativeLuminance(partner) < 0.08) return partner;
  if (relativeLuminance(accent) < 0.12) return mix(accent, "#000000", 0.55);
  return mix(accent, "#000000", 0.85);
}

function buildDark(palette: Palette): Tokens {
  const { primary, secondary } = palette;

  // The accent is the expressive colour of the pair; the partner carries the surface tone.
  const accent = pickAccent(primary, secondary);
  const partner = accent === primary ? secondary : primary;

  const baseTint = pickBaseTint(accent, partner);

  const ink = mix("#06070C", baseTint, 0.35);
  const hero = mix("#06070C", baseTint, 0.24);
  const surface = mix(ink, "#FFFFFF", 0.035);
  const card = mix(ink, "#FFFFFF", 0.075);
  const wash = mix(ink, baseTint, 0.45);

  // Counter colour: the partner hue, lifted until it is legible on the canvas.
  let counter = partner;
  if (contrastRatio(counter, ink) < 2.2) {
    counter =
      saturation(partner) < 0.2 ? partner : mix(partner, accent, 0.35);
  }
  if (contrastRatio(counter, ink) < 2.2) {
    counter = ensureContrastOnDark(counter, ink, 2.2);
  }

  const chalk = mix("#FFFFFF", counter, 0.1);
  const muted = mix(chalk, ink, 0.45);
  const dim = mix(chalk, ink, 0.7);
  const iconMuted = mix(muted, accent, 0.3);

  const accentSoft = ensureContrastOnDark(accent, ink, 4.5);
  const counterSoft = ensureContrastOnDark(counter, ink, 4);
  const accentDeep = mix(accent, "#000000", 0.72);
  const accentGlow = mix(accent, "#000000", 0.5);

  return {
    "--bg-ink-rgb": rgbTriplet(ink),
    "--bg-hero-rgb": rgbTriplet(hero),
    "--bg-surface-rgb": rgbTriplet(surface),
    "--bg-card-rgb": rgbTriplet(card),
    "--bg-wash-rgb": rgbTriplet(wash),
    "--text-chalk-rgb": rgbTriplet(chalk),
    "--text-muted-rgb": rgbTriplet(muted),
    "--text-dim-rgb": rgbTriplet(dim),
    "--text-icon-muted-rgb": rgbTriplet(iconMuted),
    "--accent-rgb": rgbTriplet(accent),
    "--accent-soft-rgb": rgbTriplet(accentSoft),
    "--accent-deep-rgb": rgbTriplet(accentDeep),
    "--accent-glow-rgb": rgbTriplet(accentGlow),
    "--accent-2-rgb": rgbTriplet(counter),
    "--accent-2-soft-rgb": rgbTriplet(counterSoft),
    "--border-hairline": rgba("#FFFFFF", 0.08),
    "--border-hairline-strong": rgba("#FFFFFF", 0.18),
    "--grid-line": rgba(accent, 0.11),
    "--glow-fade": rgba(accentDeep, 0.2),
    "--shadow-accent": rgba(accent, 0.18),
    "--shadow-accent-strong": rgba(accent, 0.4),
    "--grain-opacity": "0.025",
    "color-scheme": "dark",
  };
}

function buildLight(palette: Palette): Tokens {
  const { primary, secondary } = palette;

  const lumPrimary = relativeLuminance(primary);
  const lumSecondary = relativeLuminance(secondary);
  const paleHue = lumPrimary >= lumSecondary ? primary : secondary;
  const deepHue = lumPrimary >= lumSecondary ? secondary : primary;

  // Light surfaces are washed with the pale partner, text uses the deep partner.
  const base = mix("#F7F5F8", paleHue, 0.28);
  const ink = base;
  const hero = mix(base, "#FFFFFF", 0.45);
  const surface = mix(base, "#FFFFFF", 0.6);
  const card = mix(base, "#FFFFFF", 0.88);
  const wash = mix(base, deepHue, 0.1);

  const chalk = mix("#0A0812", deepHue, 0.12);
  const muted = mix(chalk, base, 0.42);
  const dim = mix(chalk, base, 0.66);
  const iconMuted = mix(muted, deepHue, 0.3);

  const accent = ensureContrastOnLight(deepHue, base, 3);
  const accentSoft = ensureContrastOnLight(deepHue, base, 4.5);
  const counter = mix(paleHue, "#000000", 0.22);
  const counterSoft = ensureContrastOnLight(paleHue, base, 4.5);
  const accentDeep = mix(deepHue, "#000000", 0.55);
  const accentGlow = mix(deepHue, "#FFFFFF", 0.25);

  return {
    "--bg-ink-rgb": rgbTriplet(ink),
    "--bg-hero-rgb": rgbTriplet(hero),
    "--bg-surface-rgb": rgbTriplet(surface),
    "--bg-card-rgb": rgbTriplet(card),
    "--bg-wash-rgb": rgbTriplet(wash),
    "--text-chalk-rgb": rgbTriplet(chalk),
    "--text-muted-rgb": rgbTriplet(muted),
    "--text-dim-rgb": rgbTriplet(dim),
    "--text-icon-muted-rgb": rgbTriplet(iconMuted),
    "--accent-rgb": rgbTriplet(accent),
    "--accent-soft-rgb": rgbTriplet(accentSoft),
    "--accent-deep-rgb": rgbTriplet(accentDeep),
    "--accent-glow-rgb": rgbTriplet(accentGlow),
    "--accent-2-rgb": rgbTriplet(counter),
    "--accent-2-soft-rgb": rgbTriplet(counterSoft),
    "--border-hairline": rgba("#0A0812", 0.08),
    "--border-hairline-strong": rgba("#0A0812", 0.16),
    "--grid-line": rgba(accent, 0.09),
    "--glow-fade": rgba(accentDeep, 0.16),
    "--shadow-accent": rgba(accent, 0.16),
    "--shadow-accent-strong": rgba(accent, 0.32),
    "--grain-opacity": "0.045",
    "color-scheme": "light",
  };
}

function block(selector: string, tokens: Tokens): string {
  const body = Object.entries(tokens)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");
  return `${selector} {\n${body}\n}`;
}

/**
 * The full stylesheet for the active palette. Injected once in the root layout
 * so every colour token in the site resolves from this single source.
 */
export function buildThemeCss(palette: Palette = getActivePalette()): string {
  return [
    block(":root,\n.dark", buildDark(palette)),
    block(".light", buildLight(palette)),
  ].join("\n\n");
}
