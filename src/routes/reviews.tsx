import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ratingSummary, reviews } from "@/data/reviews";
import { site } from "@/data/site";

const title = "Reviews — Éclat Café, Ascot Vale";
const description =
  "Rated 4.7 from 73 Google reviews. Read what guests say about breakfast, coffee and service at Éclat Café on Union Road, Ascot Vale.";

export const Route = createFileRoute("/reviews")({
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
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <header className="pt-14 pb-12 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <Reveal>
              <p className="text-[0.62rem] tracking-brand text-muted-foreground uppercase">
                Guest feedback
              </p>
              <h1 className="mt-5 font-display text-3xl sm:text-4xl">Reviews</h1>
            </Reveal>

            <Reveal delay={100} as="figure">
              <div className="overflow-hidden">
                <img
                  src="/images/eclat-portrait.png"
                  alt="A guest with coffee outside on Union Road"
                  loading="eager"
                  className="aspect-[3/4] w-full max-w-xs object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={110}>
            <div className="mt-9 flex flex-wrap items-end gap-x-10 gap-y-6 border-t border-border pt-7">
              <div>
                <p className="font-display text-4xl leading-none tabular-nums">
                  {ratingSummary.score}
                </p>
                <p className="mt-2 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {ratingSummary.count} Google reviews
                </p>
              </div>
              <dl className="flex flex-wrap gap-x-10 gap-y-4">
                {ratingSummary.breakdown.map((b) => (
                  <div key={b.label}>
                    <dt className="text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {b.label}
                    </dt>
                    <dd className="mt-1 font-display text-base">{b.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </header>

        <div className="divide-y divide-border/70">
          {reviews.map((review, i) => (
            <Reveal as="article" key={review.author} delay={i * 90} className="py-10">
              <blockquote className="max-w-2xl font-display text-lg leading-relaxed sm:text-xl">
                “{review.quote}”
              </blockquote>
              <p className="mt-5 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                {review.author}
                {review.meta ? ` · ${review.meta}` : ""} · {review.when}
              </p>
              {review.ownerReply && (
                <div className="mt-6 max-w-2xl border-l border-border pl-5">
                  <p className="text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Reply from Éclat
                  </p>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-muted-foreground">
                    {review.ownerReply}
                  </p>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/70 py-12">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-foreground px-6 py-3 text-[0.68rem] tracking-[0.22em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
            >
              See all Google reviews
            </a>
            <Link
              to="/contact"
              className="text-[0.68rem] tracking-[0.22em] uppercase underline decoration-border decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-accent"
            >
              Plan a visit
            </Link>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
