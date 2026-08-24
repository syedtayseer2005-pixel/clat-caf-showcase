import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { ratingSummary, reviews } from "@/data/reviews";

const title = "Éclat Café — All-day café on Union Road, Ascot Vale";
const description =
  "Éclat Café, 234 Union Rd Ascot Vale. Espresso, house-made all-day plates, smoothies and juices. Rated 4.7 on Google. Dine in, takeaway or order online.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
                <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/eclat-hero-bg.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-40 blur-sm"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20">
            <Reveal>
              <p className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
                Ascot Vale · Melbourne
              </p>
            </Reveal>
            <Reveal delay={90}>
              <img
                src="/images/eclat-logo.png"
                alt="Éclat Café"
                className="mt-8 h-16 w-auto sm:h-24 lg:h-28"
              />
            </Reveal>
            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center">
              <Reveal delay={170}>
                <h1 className="max-w-md text-2xl leading-[1.25] text-balance sm:text-3xl">
                  An all-day café on Union Road — espresso, house-made plates and an unhurried room.
                </h1>
                <p className="mt-5 max-w-md text-sm text-muted-foreground">
                  Breakfast from open, lunch through to close, and coffee in between. Sit street-side
                  and watch the tram roll past, or take it with you.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    to="/menu"
                    className="border border-foreground px-6 py-3 text-[0.68rem] tracking-[0.22em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
                  >
                    View menu
                  </Link>
                  <a
                    href={site.orderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.68rem] tracking-[0.22em] uppercase underline decoration-border decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-accent"
                  >
                    Order online
                  </a>
                  
                    href={site.phoneHref}
                    className="text-[0.68rem] tracking-[0.22em] uppercase underline decoration-border decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-accent"
                  >
                    Book a table
                  </a>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <figure className="overflow-hidden">
                  <img
                    src="/images/eclat-shopfront.png"
                    alt="Éclat Café shopfront on Union Road, Ascot Vale, with a Melbourne tram passing by"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                    loading="eager"
                  />
                  <figcaption className="mt-2.5 text-[0.68rem] text-muted-foreground">
                    234 Union Rd — corner windows open to the street.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-sm">
              <span className="font-display text-lg">{ratingSummary.score}</span>
              <span className="ml-2 text-muted-foreground">
                from {ratingSummary.count} Google reviews
              </span>
            </p>
            <Link
              to="/reviews"
              className="self-start text-[0.68rem] tracking-[0.22em] uppercase underline decoration-border decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-accent sm:self-auto"
            >
              Read reviews
            </Link>
          </div>
        </section>

                <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/eclat-hero-bg.jpg"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-40 blur-sm"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20">
          <Reveal>
            <h2 className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
              Inside Éclat
            </h2>
          </Reveal>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/eclat-interior.png",
                alt: "A guest's breakfast bowl by the window at Éclat Café",
                caption: "Breakfast, window-side.",
              },
              {
                src: "/images/eclat-coffee.png",
                alt: "Fries, toast and a burger from Éclat's all-day menu",
                caption: "House-made plates, shared.",
              },
              {
                src: "/images/eclat-laptop.png",
                alt: "A guest working on a laptop at a table inside Éclat Café",
                caption: "Room to sit, work and stay a while.",
              },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 110} as="figure">
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-2.5 text-[0.68rem] text-muted-foreground">
                  {img.caption}
                </figcaption>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-6 text-[0.68rem] text-muted-foreground">
              Photography from our own{" "}
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-[5px] hover:text-accent"
              >
                Instagram
              </a>
              .
            </p>
          </Reveal>
        </section>

        <section className="border-t border-border/70 bg-card">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
            <Reveal>
              <h2 className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
                How to visit
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {site.services.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="border-t border-border pt-4">
                    <h3 className="text-base">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <h2 className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
                Find us
              </h2>
              <p className="mt-6 font-display text-xl leading-snug">
                234 Union Rd, Ascot Vale
                <br />
                VIC 3032
              </p>
              <dl className="mt-8 max-w-sm space-y-1.5 text-sm">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex flex-wrap justify-between gap-x-6">
                    <dt className="text-muted-foreground">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 max-w-sm text-[0.68rem] text-muted-foreground">
                {site.hoursNote}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-foreground px-6 py-3 text-[0.68rem] tracking-[0.22em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
                >
                  Directions
                </a>
                <Link
                  to="/contact"
                  className="text-[0.68rem] tracking-[0.22em] uppercase underline decoration-border decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-accent"
                >
                  Contact & bookings
                </Link>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="overflow-hidden border border-border">
                <iframe
                  title="Map showing Éclat Café at 234 Union Rd, Ascot Vale"
                  src={site.mapEmbed}
                  loading="lazy"
                  className="h-[340px] w-full grayscale-[0.3]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-border/70">
          <div className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8">
            <Reveal>
              <blockquote className="font-display text-lg leading-relaxed text-balance sm:text-xl">
                “{reviews[0]?.quote}”
              </blockquote>
              <p className="mt-5 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                {reviews[0]?.author} · Google
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
