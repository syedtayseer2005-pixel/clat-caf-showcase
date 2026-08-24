import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Link to="/" aria-label="Éclat Café — home">
            <img src="/images/eclat-logo.png" alt="Éclat Café" className="h-4 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            All-day café on Union Road, Ascot Vale. Espresso, house-made plates and a light-filled
            room.
          </p>
        </div>

        <div>
          <h3 className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">Visit</h3>
          <address className="mt-4 space-y-0.5 text-sm not-italic">
            {site.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
          <a
            href={site.phoneHref}
            className="mt-3 inline-block text-sm transition-colors duration-300 hover:text-accent"
          >
            {site.phone}
          </a>
        </div>

        <div>
          <h3 className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">Hours</h3>
          <dl className="mt-4 space-y-1.5 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="flex flex-wrap justify-between gap-x-6">
                <dt className="text-muted-foreground">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-[0.68rem] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-accent"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-5 text-[0.68rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} Éclat Café, Ascot Vale.</span>
          <span>{site.address}</span>
        </div>
      </div>
    </footer>
  );
}
