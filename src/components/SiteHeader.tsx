import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/eclat-logo.png.asset.json";
import monogram from "@/assets/eclat-monogram.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          to="/"
          aria-label={isHome ? "Éclat Café" : "Éclat Café — return to homepage"}
          className="flex shrink-0 items-center gap-2.5 transition-opacity duration-300 hover:opacity-70"
        >
          <img
            src={isHome ? logo.url : monogram.url}
            alt="Éclat Café logo"
            className={isHome ? "h-4 w-auto sm:h-5" : "h-5 w-auto sm:h-6"}
          />
          {!isHome && (
            <span className="hidden text-[0.68rem] tracking-brand text-muted-foreground uppercase sm:inline">
              Ascot Vale
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.75rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={cn(
              "h-px w-5 bg-foreground transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-5 bg-foreground transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-border/60 transition-[grid-template-rows] duration-400 ease-out md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent",
        )}
      >
        <nav className="min-h-0">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block border-b border-border/50 py-3 text-[0.76rem] tracking-[0.22em] text-muted-foreground uppercase last:border-b-0"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
