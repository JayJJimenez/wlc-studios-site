import { site } from "@/content/site";
import { cn } from "@/lib/utils";

import { Section } from "./Section";

export function ServicesSection() {
  return (
    <Section id="services" className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Focused, premium output across brand, content, and automation.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {site.services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">{service.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{service.blurb}</p>
              </div>
              <ul className="mt-auto space-y-2 text-sm text-zinc-300">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className={cn("h-1.5 w-1.5 rounded-full bg-amber-300")} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
