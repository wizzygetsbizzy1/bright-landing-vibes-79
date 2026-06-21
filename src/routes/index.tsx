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
    <main className="flex min-h-screen items-start justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
          <img
            src={giftcard}
            alt="lululemon gift card"
            width={1024}
            height={640}
            className="aspect-[16/10] w-full object-cover"
          />
        </div>

        <header className="mt-8 text-center">
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
              className="flex items-center gap-4 rounded-xl bg-secondary/60 px-4 py-4 ring-1 ring-border/60 transition hover:bg-secondary"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground"
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
          className="mt-8 block w-full rounded-xl px-6 py-4 text-center text-base font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:scale-[1.01] active:scale-[0.99]"
          style={{ background: "var(--gradient-brand)" }}
        >
          Get Started
        </a>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Available in selected countries — US, UK, AU, CA
        </p>
      </div>
    </main>
  );
}
