"use client";

import React from "react";

/**
 * Custom outline icons:
 * 1. CatGithubIcon: Playful cat silhouette with upright ears, body, and curled tail on left
 * 2. LinkedinBoxIcon: Rounded square outline with 'in' glyph
 * 3. TelegramIcon: Telegram paper airplane outline
 * 4. EmailEnvelopeIcon: Clean envelope with top V fold
 */

export function CatGithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Head with pointed ears and rounded cheeks */}
      <path d="M9 3.2 L6.8 5.5 C5.5 7.2 5 9.2 5 11.2 C5 14.5 7.2 16 9.5 16" />
      <path d="M15 3.2 L17.2 5.5 C18.5 7.2 19 9.2 19 11.2 C19 14.5 16.8 16 14.5 16" />
      <path d="M9 3.2 C11 4.5 13 4.5 15 3.2" />
      {/* Legs */}
      <path d="M9.5 16 V 21.5" />
      <path d="M14.5 16 V 21.5" />
      {/* Curled tail on the left */}
      <path d="M9.5 19 C7 19 3.5 18.2 2.5 15 C2 13.5 2.6 12 3.5 12" />
    </svg>
  );
}

export function LinkedinBoxIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" />
      {/* 'i' */}
      <path d="M7 10.5 V 17" />
      <circle cx="7" cy="7.2" r="1.1" fill="currentColor" stroke="none" />
      {/* 'n' */}
      <path d="M11.5 10.5 V 17" />
      <path d="M11.5 13 C 12 11.5 13.8 10.5 15.5 10.5 C 17.2 10.5 17.5 11.8 17.5 13.5 V 17" />
    </svg>
  );
}

export function TelegramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.5 3.5 L2.5 10.8 L8.5 13.5 L10.5 19.5 L13 16 L18 19.8 L21.5 3.5 Z" />
      <path d="M21.5 3.5 L10 13.5" />
    </svg>
  );
}



export function EmailEnvelopeIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 6.8 L12 13.2 L21 6.8" />
    </svg>
  );
}

export const socialLinksData = [
  {
    name: "GitHub",
    href: "https://github.com/emandoyesus",
    icon: CatGithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emandoyesus/",
    icon: LinkedinBoxIcon,
  },
  {
    name: "Telegram",
    href: "https://t.me/vintage_01",
    icon: TelegramIcon,
  },
  {
    name: "Email",
    href: "mailto:emmandoyesus@gmail.com",
    icon: EmailEnvelopeIcon,
  },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 gap-x-6 gap-y-3.5 sm:flex sm:flex-wrap sm:items-center sm:gap-7 select-none ${className}`}
    >
      {socialLinksData.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={item.name}
            className="group/social inline-flex items-center gap-2 font-sans text-[13.5px] sm:text-[15px] font-normal text-muted dark:text-[#8fa0b5] transition-colors duration-200 hover:text-black dark:hover:text-white py-0.5"
          >
            <Icon className="size-[17px] text-muted dark:text-[#8fa0b5] transition-colors duration-200 group-hover/social:text-black dark:group-hover/social:text-white shrink-0" />
            <span>{item.name}</span>
          </a>
        );
      })}
    </div>
  );
}
