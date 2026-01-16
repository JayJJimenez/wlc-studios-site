import { Section } from "./Section";

const steps = [
  {
    title: "Discover",
    detail: "Audit the current story, systems, and gaps. Align on a calm, premium direction.",
  },
  {
    title: "Build Sprint",
    detail: "Ship the brand, content, and automation pieces that unlock momentum fast.",
  },
  {
    title: "Launch + Iterate",
    detail: "Deploy, measure, and refine. We keep the system fresh and responsive.",
  },
];

export function ProcessSection() {
  return (
    <Section id="process" className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Process
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Three steps, built for decisive teams.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                0{index + 1}
              </p>
              <h3 className="text-xl font-semibold text-zinc-100">{step.title}</h3>
              <p className="text-sm text-zinc-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
