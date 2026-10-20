import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { work } from "../data";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading id="work-title" kicker="03 — Selected work" title="Three things I'm proud of." />

      <div className="border-t border-ink">
        {work.map((w, i) => (
          <Reveal as="article" key={w.title} delay={i * 60} className="group border-b border-line py-10 md:py-14">
            <div className="grid gap-6 md:grid-cols-[96px_1fr_1fr] md:gap-10">
              <span className="font-mono text-sm text-accent">{w.index}</span>

              <div>
                <h3 className="font-display text-3xl font-medium leading-tight tracking-tight transition-colors group-hover:text-accent md:text-4xl">
                  {w.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-2">{w.kind}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${w.title} technologies`}>
                  {w.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11.5px] text-ink-2">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[15.5px] leading-relaxed text-ink-2">{w.description}</p>
                <p className="mt-4 border-l-2 border-accent pl-4 text-[15.5px] leading-relaxed text-ink">{w.value}</p>
                {w.links && (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {w.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium underline decoration-ink/30 underline-offset-4 transition hover:text-accent hover:decoration-accent"
                      >
                        {l.label}
                        <ArrowUpRight size={15} aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
