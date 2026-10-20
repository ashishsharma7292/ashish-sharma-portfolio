import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-paper-2 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="experience-title" kicker="02 — Experience" title="Six years, three steps up." />

        <ol className="relative">
          <div className="absolute bottom-0 left-[5px] top-2 w-px bg-line md:left-[calc(28%-5px)]" aria-hidden="true" />
          {experience.map((r, i) => (
            <li key={r.company} className="relative pb-14 pl-8 last:pb-0 md:grid md:grid-cols-[28%_1fr] md:pl-0">
              <span
                className={`absolute left-0 top-[9px] h-[11px] w-[11px] rounded-full border-2 border-paper-2 md:left-[calc(28%-5px)] ${
                  i === 0 ? "bg-accent ring-4 ring-accent-soft" : "bg-ink"
                }`}
                aria-hidden="true"
              />
              <Reveal className="md:pr-12">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-2">{r.period}</p>
                <p className="mt-1 text-sm text-ink-2">{r.location}</p>
              </Reveal>
              <Reveal delay={100} className="mt-3 md:mt-0 md:pl-12">
                <h3 className="font-display text-2xl font-medium leading-tight md:text-3xl">{r.title}</h3>
                <p className="mt-1 text-[15px] text-ink-2">
                  <span className="font-medium text-ink">{r.company}</span> · {r.context}
                </p>
                <ul className="mt-5 space-y-3">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-2">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
