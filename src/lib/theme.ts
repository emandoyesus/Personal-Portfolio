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

export const PALETTES: readonly Palette[] = [
  { id: "blueberry-cream-soda", label: "Blueberry & Cream Soda", primary: "#2D428D", secondary: "#FFF3CA" },
  { id: "neon-orange-porcelain", label: "Neon Orange & Porcelain", primary: "#FF6115", secondary: "#FFFCF4" },
  { id: "inkberry-peach", label: "Inkberry & Peach", primary: "#1A0B2E", secondary: "#FFB7A5" },
  { id: "forest-graphite-acid-mint", label: "Forest Graphite & Acid Mint", primary: "#18251D", secondary: "#B7FF72" },
  { id: "signal-violet-mist-gray", label: "Signal Violet & Mist Gray", primary: "#7A35FF", secondary: "#F0F2F5" },
  { id: "clay-brown-soft-butter", label: "Clay Brown & Soft Butter", primary: "#6B352A", secondary: "#FFF1A6" },
  { id: "quantum-blue-ice-glass", label: "Quantum Blue & Ice Glass", primary: "#3B5BFF", secondary: "#EEF4FF" },
  { id: "cyber-teal-aqua-foam", label: "Cyber Teal & Aqua Foam", primary: "#10474A", secondary: "#88FFDB" },
  { id: "raspberry-pale-sky", label: "Raspberry & Pale Sky", primary: "#AD1952", secondary: "#DAF0FF" },
  { id: "prompt-blue-ai-green", label: "Prompt Blue & AI Green", primary: "#0B132B", secondary: "#39FF88" },
];

export const ACTIVE_PALETTE_ID = "cyber-teal-aqua-foam";

export function getActivePalette(): Palette {
  return PALETTES.find((p) => p.id === ACTIVE_PALETTE_ID) ?? PALETTES[0];
}

type Tokens = Record<string, string>;

const MIN_ACCENT_LUMINANCE = 0.03;

function pickAccent(primary: string, secondary: string): string {
  if (relativeLuminance(primary) >= MIN_ACCENT_LUMINANCE) return primary;
  if (relativeLuminance(secondary) >= MIN_ACCENT_LUMINANCE) return secondary;
  return primary;
}

function pickBaseTint(accent: string, partner: string): string {
  if (relativeLuminance(partner) < 0.08) return partner;
  if (relativeLuminance(accent) < 0.12) return mix(accent, "#000000", 0.55);
  return mix(accent, "#000000", 0.85);
}

function buildDark(palette: Palette): Tokens {
  const { primary, secondary } = palette;

  const accent = pickAccent(primary, secondary);
  const partner = accent === primary ? secondary : primary;

  const baseTint = pickBaseTint(accent, partner);

  const NEAR_BLACK = "#030305";
  const ink = mix(NEAR_BLACK, baseTint, 0.5);
  const hero = mix(NEAR_BLACK, baseTint, 0.35);
  const surface = mix(ink, "#FFFFFF", 0.05);
  const card = mix(ink, "#FFFFFF", 0.1);
  const wash = mix(ink, baseTint, 0.6);

  let counter = partner;
  if (contrastRatio(counter, ink) < 2.2) {
    counter = saturation(partner) < 0.2 ? partner : mix(partner, accent, 0.35);
  }
  if (contrastRatio(counter, ink) < 3) {
    counter = ensureContrastOnDark(counter, ink, 3);
  }

  const chalk = mix("#FFFFFF", counter, 0.08);
  const muted = mix(chalk, ink, 0.4);
  const dim = mix(chalk, ink, 0.65);
  const iconMuted = mix(muted, accent, 0.25);

  const accentSoft = ensureContrastOnDark(accent, ink, 4.5);
  const accentGraphics = contrastRatio(accent, ink) >= 3 ? accent : ensureContrastOnDark(accent, ink, 3);
  const counterSoft = ensureContrastOnDark(counter, ink, 4);
  const accentDeep = mix(accent, "#000000", 0.7);
  const accentGlow = mix(accent, "#000000", 0.45);

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
    "--accent-graphics-rgb": rgbTriplet(accentGraphics),
    "--accent-deep-rgb": rgbTriplet(accentDeep),
    "--accent-glow-rgb": rgbTriplet(accentGlow),
    "--accent-2-rgb": rgbTriplet(counter),
    "--accent-2-soft-rgb": rgbTriplet(counterSoft),
    "--border-hairline": rgba("#FFFFFF", 0.06),
    "--border-hairline-strong": rgba("#FFFFFF", 0.14),
    "--grid-line": rgba(accent, 0.08),
    "--glow-fade": rgba(accentDeep, 0.18),
    "--shadow-accent": rgba(accent, 0.15),
    "--shadow-accent-strong": rgba(accent, 0.35),
    "--grain-opacity": "0.02",
    "color-scheme": "dark",
  };
}

function buildLight(palette: Palette): Tokens {
  const { primary, secondary } = palette;

  const lumPrimary = relativeLuminance(primary);
  const lumSecondary = relativeLuminance(secondary);
  const paleHue = lumPrimary >= lumSecondary ? primary : secondary;
  const deepHue = lumPrimary >= lumSecondary ? secondary : primary;

  const BASE_WARM = "#FAF8F3";
  const base = mix(BASE_WARM, paleHue, 0.35);
  const ink = base;
  const hero = mix(base, "#FFFFFF", 0.5);
  const surface = mix(base, "#FFFFFF", 0.65);
  const card = mix(base, "#FFFFFF", 0.9);
  const wash = mix(base, deepHue, 0.08);

  const chalk = mix("#0B0A10", deepHue, 0.15);
  const muted = mix(chalk, base, 0.38);
  const dim = mix(chalk, base, 0.6);
  const iconMuted = mix(muted, deepHue, 0.25);

  const accent = ensureContrastOnLight(deepHue, base, 3.5);
  const accentSoft = ensureContrastOnLight(deepHue, base, 4.5);
  const counter = mix(paleHue, "#000000", 0.3);
  const counterSoft = ensureContrastOnLight(paleHue, base, 4.5);
  const counterGraphics = contrastRatio(counter, base) >= 3 ? counter : ensureContrastOnLight(counter, base, 3);
  const accentDeep = mix(deepHue, "#000000", 0.5);
  const accentGlow = mix(deepHue, "#FFFFFF", 0.2);

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
    "--accent-graphics-rgb": rgbTriplet(accent),
    "--accent-deep-rgb": rgbTriplet(accentDeep),
    "--accent-glow-rgb": rgbTriplet(accentGlow),
    "--accent-2-rgb": rgbTriplet(counter),
    "--accent-2-soft-rgb": rgbTriplet(counterSoft),
    "--accent-2-graphics-rgb": rgbTriplet(counterGraphics),
    "--border-hairline": rgba("#0B0A10", 0.06),
    "--border-hairline-strong": rgba("#0B0A10", 0.12),
    "--grid-line": rgba(accent, 0.07),
    "--glow-fade": rgba(accentDeep, 0.12),
    "--shadow-accent": rgba(accent, 0.12),
    "--shadow-accent-strong": rgba(accent, 0.25),
    "--grain-opacity": "0.035",
    "color-scheme": "light",
  };
}

function block(selector: string, tokens: Tokens): string {
  const body = Object.entries(tokens)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");
  return `${selector} {\n${body}\n}`;
}

export function buildThemeCss(palette: Palette = getActivePalette()): string {
  return [block(":root,\n.dark", buildDark(palette)), block(".light", buildLight(palette))].join("\n\n");
}