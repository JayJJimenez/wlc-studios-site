import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type SiteNavProps = {
  className?: string;
};

export function SiteNav({ className }: SiteNavProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-100">
          {site.name}
        </a>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-zinc-300 sm:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 transition-colors hover:border-white/40"
        >
          {site.contact.ctaPrimary}
        </a>
      </div>
    </header>
  );
}
