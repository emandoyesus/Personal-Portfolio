import type { Metadata } from "next";
import localFont from "next/font/local";
import ThemeProvider from "@/components/ThemeProvider";
import { buildThemeCss } from "@/lib/theme";
import "./globals.css";

const playfair = localFont({
  src: "./fonts/PlayfairDisplay-latin.woff2",
  variable: "--font-playfair",
  display: "swap",
  weight: "400 900",
});

const inter = localFont({
  src: "./fonts/Inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Emandoyesus Tesfaye",
  description:
    "Full-Stack Web & Mobile Developer and Software Engineering student at Mekelle University. Building practical, fast web applications with React, Next.js, TypeScript, Node.js and mobile apps for Android & iOS.",
  keywords: [
    "Emandoyesus Tesfaye",
    "software engineer",
    "full-stack developer",
    "web developer",
    "mobile developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Android",
    "iOS",
    "Mekelle University",
    "Mekelle Ethiopia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="relative flex min-h-full flex-col bg-ink text-chalk">
        {/* Active colour palette — single source of truth for every theme token */}
        <style
          id="theme-vars"
          dangerouslySetInnerHTML={{ __html: buildThemeCss() }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Grain texture overlay */}
          <div aria-hidden="true" className="texture-grain" />

          {/* Page Content */}
          <div className="relative z-10 flex min-h-full flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
