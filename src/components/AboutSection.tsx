import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section id="about" className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            White Lighter Club Studios builds deliberate, high-end systems for modern teams.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          We are a boutique studio shaping calm, confident digital experiences. Every engagement
          blends strategy, craft, and automation so your team can move fast without sounding loud.
        </p>
      </div>
    </Section>
  );
}
