"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}

export function TypingAnimation({
  text,
  duration = 50,
  className,
  as: Component = "h1",
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    setDisplayedText("");
    setI(0);
  }, [text]);

  useEffect(() => {
    if (i >= text.length) return;

    const typingTimeout = window.setTimeout(() => {
      const next = i + 1;
      setDisplayedText(text.substring(0, next));
      setI(next);
    }, duration);

    return () => {
      window.clearTimeout(typingTimeout);
    };
  }, [duration, i, text]);

  return (
    <Component
      className={cn(
        "relative block",
        className
      )}
    >
      {/* Preserve final layout to avoid reflow while typing */}
      <span className="invisible block whitespace-pre-wrap">{text}</span>
      <span className="absolute inset-0 block whitespace-pre-wrap">
        {displayedText}
        {i < text.length && <span className="animate-pulse">|</span>}
      </span>
    </Component>
  );
}
