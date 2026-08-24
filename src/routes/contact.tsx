import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const title = "Contact & Hours — Éclat Café, Ascot Vale";
const description =
  "Éclat Café: 234 Union Rd, Ascot Vale VIC 3032. Call +61 3 9578 0940. Opening hours, directions, parking, bookings and online ordering.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="pt-14 pb-12 sm:pt-20">
          <Reveal>
            <p className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
              Union Road · Ascot Vale
            </p>
            <h1 className="mt-5 font-display text-3xl sm:text-4xl">Contact</h1>
            <p className="mt-5 max-w-xl text-sm text-muted-foreground">
              Walk-ins are always welcome. For larger tables, catering or a question about the menu,
              give us a call during trading hours.
            </p>
          </Reveal>
        </header>

        <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="space-y-10">
            <Reveal>
              <h2 className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
                Address
              </h2>
              <address className="mt-4 space-y-0.5 text-base not-italic">
                {site.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </Reveal>

            <Reveal delay={70}>
              <h2 className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
                Phone
              </h2>
              
                href={site.phoneHref}
                className="mt-4 inline-block text-base transition-colors duration-300 hover:text-accent"
              >
                {site.phone}
              </a>
            </Reveal>

            <Reveal delay={140}>
              <h2 className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
                Opening hours
              </h2>
              <dl className="mt-4 max-w-sm space-y-1.5 text-sm">
                {site.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex flex-wrap justify-between gap-x-6 border-b border-border/60 pb-1.5"
                  >
                    <dt className="text-muted-foreground">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 max-w-sm text-[0.68rem] text-muted-foreground">
                {site.hoursNote}
              </p>
            </Reveal>

            <Reveal delay={210}>
              <h2 className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
                Reservations & orders
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                
                  href={site.phoneHref}
                  className="border border-foreground px-6 py-3 text-[0.68rem] tracking-[0.22em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
                >
                  Call to book
                </a>
                
                  href={site.orderUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.68rem] tracking-[0.22em] uppercase underline decoration-border decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-accent"
                >
                  Order online
                </a>
                
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.68rem] tracking-[0.22em] uppercase underline decoration-border decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-accent"
                >
                  Instagram
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={90}>
              <div className="overflow-hidden border border-border">
                <iframe
                  title="Map showing Éclat Café at 234 Union Rd, Ascot Vale"
                  src={site.mapEmbed}
                  loading="lazy"
                  className="h-[320px] w-full grayscale-[0.3]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-[0.68rem] tracking-[0.22em] uppercase underline decoration-border decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-accent"
              >
                Get directions
              </a>
            </Reveal>

            <Reveal delay={160} as="figure">
              <div className="overflow-hidden">
                <img
                  src="/images/eclat-thankyou.png"
                  alt="A drink from Éclat Café with a handwritten 'thank you' note"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-[0.68rem] text-muted-foreground">
                Thanks for stopping by — we'll see you on Union Road.
              </figcaption>
            </Reveal>
          </div>
        </div>

        <div className="py-16" />
      </main>

      <SiteFooter />
    </div>
  );
}
