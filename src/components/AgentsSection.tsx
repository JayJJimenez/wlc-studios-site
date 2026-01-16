import { site } from "@/content/site";
import { cn } from "@/lib/utils";

import { Section } from "./Section";

const statusStyles: Record<string, string> = {
  Prototype: "bg-amber-300/20 text-amber-200 border-amber-200/40",
  "In progress": "bg-emerald-300/15 text-emerald-200 border-emerald-200/40",
  Live: "bg-sky-300/15 text-sky-200 border-sky-200/40",
};

export function AgentsSection() {
  return (
    <Section id="agents" className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Agents / Experiments
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Early experiments powering quieter, smarter operations.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {site.agents.map((agent) => (
            <div
              key={agent.title}
              className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-100">{agent.title}</h3>
                <span
                  className={cn(
                    "rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]",
                    statusStyles[agent.status] ?? "border-white/20 text-zinc-200",
                  )}
                >
                  {agent.status}
                </span>
              </div>
              <p className="text-sm text-zinc-300">{agent.description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {agent.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
