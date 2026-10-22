"use client";

import { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { Send } from "lucide-react";

interface AddToBasketButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function AddToBasketButton({
  href = "#contact",
  label = "Contact Now",
  className = "",
}: AddToBasketButtonProps) {
  const [scope, animate] = useAnimate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    if (isAnimating) return;
    setIsAnimating(true);

    try {
      // 1. Curved trajectory arc animation for the send icon
      await animate(
        ".fly-icon",
        {
          x: [0, 8, 16, 22],
          y: [0, -7, -3, 0],
          scale: [1, 1.25, 0.9, 1],
          rotate: [0, -20, 15, 0],
        },
        {
          duration: 0.42,
          ease: [0.74, 0.18, 0.93, 0.69],
        }
      );

      // 2. Spring recoil impact on the button
      await animate(
        scope.current,
        {
          scale: [1, 0.96, 1.03, 1],
        },
        {
          duration: 0.35,
          type: "spring",
          stiffness: 400,
          damping: 14,
        }
      );
    } catch {
      // ignore
    }

    // Scroll smoothly to contact section
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <a
      ref={scope}
      href={href}
      onClick={handleClick}
      className={`group/btn relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-ink bg-chalk dark:hover:bg-white hover:bg-chalk/90 hover:shadow-[0_0_24px_var(--shadow-accent-strong)] transition-all duration-300 select-none overflow-hidden ${className}`}
    >
      <span>{label}</span>

      {/* Animated flying icon with spring arc */}
      <span className="relative flex size-4 items-center justify-center overflow-visible">
        <span className="fly-icon inline-block">
          <Send className="size-4 text-ink transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </span>
      </span>
    </a>
  );
}

export default AddToBasketButton;
