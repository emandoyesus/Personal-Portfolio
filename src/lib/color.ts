export type RGB = [number, number, number];

const clamp255 = (n: number) => Math.min(255, Math.max(0, Math.round(n)));

export function hexToRgb(hex: string): RGB {
  const clean = hex.trim().replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean.padEnd(6, "0").slice(0, 6);
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

export function rgbToHex(rgb: RGB): string {
  return `#${rgb
    .map((v) => clamp255(v).toString(16).padStart(2, "0"))
    .join("")}`;
}

/** Blend two hex colors. t = 0 keeps `a`, t = 1 returns `b`. */
export function mix(a: string, b: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  return rgbToHex([r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t]);
}

export function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }) as RGB;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a: string, b: string): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

/** 0 = neutral gray, 1 = fully saturated. */
export function saturation(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

/** Perceived lightness: 0 = black, 1 = white. */
export function lightness(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return (Math.max(r, g, b) + Math.min(r, g, b)) / 2 / 255;
}

/** Lighten `fg` until it clears `target` contrast against a dark background. */
export function ensureContrastOnDark(
  fg: string,
  bg: string,
  target = 4.5
): string {
  let out = fg;
  for (let t = 0; t <= 0.95; t += 0.05) {
    out = mix(fg, "#FFFFFF", t);
    if (contrastRatio(out, bg) >= target) break;
  }
  return out;
}

/** Darken `fg` until it clears `target` contrast against a light background. */
export function ensureContrastOnLight(
  fg: string,
  bg: string,
  target = 4.5
): string {
  let out = fg;
  for (let t = 0; t <= 0.95; t += 0.05) {
    out = mix(fg, "#000000", t);
    if (contrastRatio(out, bg) >= target) break;
  }
  return out;
}

export function rgba(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** "106 0 244" — ready for `rgb(var(--token) / <alpha-value>)`. */
export function rgbTriplet(hex: string): string {
  return hexToRgb(hex).join(" ");
}
