"use client";

import * as React from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";

import { Section } from "./Section";

export function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log("Contact form submission", {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    event.currentTarget.reset();
  };

  return (
    <Section id="contact" className="border-t border-white/10 pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-10 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              Ready to move quietly, but fast?
            </h2>
          </div>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            Tell us about your team, timeline, and where you want momentum. We will come back with
            a clear next step.
          </p>
          <div className="flex flex-col gap-2 text-sm text-zinc-300">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Direct
            </span>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-lg font-semibold text-zinc-100"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-1 flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Name
            <input
              name="name"
              required
              className={cn(
                "rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-amber-300",
              )}
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Email
            <input
              type="email"
              name="email"
              required
              className={cn(
                "rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-amber-300",
              )}
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Message
            <textarea
              name="message"
              rows={4}
              required
              className={cn(
                "rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-amber-300",
              )}
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:bg-amber-200"
          >
            Send a note
          </button>
        </form>
      </div>
    </Section>
  );
}
