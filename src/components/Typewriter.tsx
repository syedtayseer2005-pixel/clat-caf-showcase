import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  text: string;
  className?: string;
  /** ms before typing starts */
  startDelay?: number;
  /** ms per character */
  speed?: number;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Types `text` one character at a time. The full string is always present in
 * the DOM (visually hidden clone) so layout never reflows and there is no
 * overlap or jump as characters appear. Reduced-motion users get the full
 * text immediately.
 */
export function Typewriter({ text, className, startDelay = 350, speed = 34 }: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(text.length);
      setDone(true);
      return;
    }

    const start = setTimeout(() => {
      let i = 0;
      const tick = () => {
        i += 1;
        setCount(i);
        if (i < text.length) {
          const t = setTimeout(tick, speed);
          timers.current.push(t);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);
    timers.current.push(start);

    return () => {
      for (const t of timers.current) clearTimeout(t);
      timers.current = [];
    };
  }, [text, speed, startDelay]);

  return (
    <span className={cn("relative block", className)}>
      {/* Reserves the final layout box so nothing shifts or overlaps while typing. */}
      <span aria-hidden className="invisible block">
        {text}
      </span>
      <span className="absolute inset-0 block">
        <span className="sr-only">{text}</span>
        <span aria-hidden>
          {text.slice(0, count)}
          {!done && <span className="typewriter-caret" />}
        </span>
      </span>
    </span>
  );
}
