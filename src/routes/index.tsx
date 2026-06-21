import { createFileRoute } from "@tanstack/react-router";
import giftcard from "@/assets/giftcard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "lululemon Reward — Claim Your Gift Card" },
      { name: "description", content: "Complete a few quick steps to claim your lululemon gift card reward." },
      { property: "og:title", content: "lululemon Reward — Claim Your Gift Card" },
      { property: "og:description", content: "Complete a few quick steps to claim your lululemon gift card reward." },
    ],
  }),
  component: Index,
});

const steps = [
  "Click the button below",
  "Enter your email & basic info",
  "Complete 3 to 5 required deals",
  "Receive your reward once verified",
];

function Index() {
  return (
    <main className="relative flex min-h-screen items-start justify-center overflow-hidden px-4 py-10 sm:py-16">
      {/* Decorative background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.75 0.22 30 / 0.6), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.22 350 / 0.55), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.18 80 / 0.5), transparent 70%)" }}
      />

      {/* Sparkle dots */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute top-[12%] left-[8%] h-2 w-2 rounded-full bg-primary/60 animate-pulse" />
        <span className="absolute top-[22%] right-[14%] h-1.5 w-1.5 rounded-full bg-accent/70 animate-pulse [animation-delay:300ms]" />
        <span className="absolute bottom-[18%] left-[12%] h-2 w-2 rounded-full bg-accent/60 animate-pulse [animation-delay:600ms]" />
        <span className="absolute bottom-[28%] right-[10%] h-1.5 w-1.5 rounded-full bg-primary/70 animate-pulse [animation-delay:900ms]" />
      </div>

      <div className="relative z-10 w-full max-w-md animate-fade-in">
        {/* Top badge */}
        <div className="mb-6 flex justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-soft)]"
            style={{ background: "var(--gradient-brand)" }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Limited Time Offer
          </span>
        </div>

        {/* Gift card with glow */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-3xl opacity-70 blur-2xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] ring-1 ring-border/50 transition hover:scale-[1.02]">
            <img
              src={giftcard}
              alt="lululemon gift card"
              width={1024}
              height={640}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>

        <header className="mt-10 text-center">
          <h1 className="text-3xl leading-tight text-foreground sm:text-[2rem]">
            Follow the steps below<br />to receive your reward
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
            Complete each step to qualify. Verification is required before your reward is issued.
          </p>
        </header>

        <ol className="mt-8 space-y-3">
          {steps.map((step, i) => (
            <li
              key={i}
              className="group flex items-center gap-4 rounded-xl bg-card/80 px-4 py-4 shadow-[var(--shadow-card)] ring-1 ring-border/60 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-card hover:ring-primary/30"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition group-hover:scale-110"
                style={{ background: "var(--gradient-brand)" }}
              >
                {i + 1}
              </span>
              <span className="text-sm font-medium text-foreground sm:text-base">{step}</span>
            </li>
          ))}
        </ol>

        <a
          href="https://giftclick.org/aff_c?offer_id=1587&aff_id=12008"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-8 block w-full overflow-hidden rounded-xl px-6 py-4 text-center text-base font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:scale-[1.02] active:scale-[0.99]"
          style={{ background: "var(--gradient-brand)" }}
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
          <span className="relative">Get Started →</span>
        </a>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Available in selected countries — US, UK, AU, CA
        </p>
      </div>
    </main>
  );
}
