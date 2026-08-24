import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { menu, type MenuSection } from "@/data/menu";
import { site } from "@/data/site";

const title = "Menu — Éclat Café, Ascot Vale";
const description =
  "The full Éclat Café menu: all-day kitchen, melting buns, salads, pastas, smoothies, juices, coffee and loose leaf teas, with prices and add-ons.";

export const Route = createFileRoute("/menu")({
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
  component: MenuPage,
});

const sectionImages: Record<string, { url: string; alt: string }> = {
  coffee: {
    url: "/images/eclat-coffee.png",
    alt: "Fries, toast and a burger from Éclat's all-day menu",
  },
};

function Price({ value }: { value: string }) {
  return <span className="shrink-0 font-display text-sm tabular-nums">${value}</span>;
}

function DetailedSection({ section }: { section: MenuSection }) {
  return (
    <ul className="mt-7 grid gap-x-12 gap-y-7 sm:grid-cols-2">
      {section.items.map((item, i) => (
        <Reveal as="li" key={item.name} delay={Math.min(i, 6) * 60}>
          <div className="flex items-baseline justify-between gap-4 border-b border-border/70 pb-1.5">
            <h3 className="text-[0.95rem] leading-snug">{item.name}</h3>
            <Price value={item.price} />
          </div>
          {item.description && (
            <p className="mt-2 text-[0.83rem] leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          )}
        </Reveal>
      ))}
    </ul>
  );
}

function CompactSection({ section }: { section: MenuSection }) {
  return (
    <>
      {section.note && (
        <p className="mt-4 max-w-xl text-[0.83rem] leading-relaxed text-muted-foreground">
          {section.note}
        </p>
      )}
      <ul className="mt-6 grid gap-x-12 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={Math.min(i, 6) * 45}>
            <div className="flex items-baseline gap-3">
              <span className="text-[0.9rem]">{item.name}</span>
              <span
                aria-hidden
                className="mb-1 grow border-b border-dotted border-border"
              />
              <Price value={item.price} />
            </div>
          </Reveal>
        ))}
      </ul>
    </>
  );
}

function MenuPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="pt-14 pb-10 sm:pt-20">
          <Reveal>
            <p className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
              Éclat Café · Ascot Vale
            </p>
            <h1 className="mt-5 font-display text-3xl sm:text-4xl">Menu</h1>
            <p className="mt-5 max-w-xl text-sm text-muted-foreground">
              Served all day, from open until {site.hours[0]?.time.split("–")[1]?.trim()}. Prices in
              AUD. Alternative milks and dietary swaps are listed with each section.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <nav aria-label="Menu sections" className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {menu.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-[0.66rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </header>

        <div className="divide-y divide-border/70 pb-10">
          {menu.map((section) => {
            const image = sectionImages[section.id];
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14">
                <Reveal>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h2 className="font-display text-xl sm:text-2xl">{section.title}</h2>
                    {section.kicker && (
                      <p className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
                        {section.kicker}
                      </p>
                    )}
                  </div>
                </Reveal>

                {image ? (
                  <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
                    <div>
                      {section.layout === "detailed" ? (
                        <DetailedSection section={section} />
                      ) : (
                        <CompactSection section={section} />
                      )}
                    </div>
                    <Reveal delay={120} as="figure" className="order-first lg:order-none">
                      <div className="overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.alt}
                          loading="lazy"
                          className="aspect-[4/5] w-full object-cover"
                        />
                      </div>
                    </Reveal>
                  </div>
                ) : section.layout === "detailed" ? (
                  <DetailedSection section={section} />
                ) : (
                  <CompactSection section={section} />
                )}
              </section>
            );
          })}
        </div>

        <Reveal>
          <div className="border-t border-border/70 py-12">
            <p className="max-w-xl text-sm text-muted-foreground">
              Gluten free and vegan options are available — ask our team. To order ahead, call{" "}
              <a
                href={site.phoneHref}
                className="text-foreground underline decoration-border underline-offset-[5px] hover:text-accent"
              >
                {site.phone}
              </a>{" "}
              or{" "}
              <a
                href={site.orderUrl}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-border underline-offset-[5px] hover:text-accent"
              >
                order online
              </a>
              .
            </p>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
