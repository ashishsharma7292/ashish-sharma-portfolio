import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading id="education-title" kicker="05 — Education" title="Where it began." />
      {education.map((e) => (
        <Reveal key={e.title} className="grid gap-3 border-t border-ink pt-8 md:grid-cols-[28%_1fr] md:gap-10">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-2">{e.period}</p>
          <div>
            <h3 className="font-display text-2xl font-medium md:text-3xl">{e.title}</h3>
            <p className="mt-1 text-ink-2">{e.place}</p>
            <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-ink-2">{e.note}</p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
