import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-night py-24 text-paper md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#c4a5ee]">04 — Skills & expertise</p>
          <h2 id="skills-title" className="mt-3 max-w-3xl font-display text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl">
            The toolkit behind the systems.
          </h2>
        </Reveal>

        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 80}>
              <h3 className="border-b border-white/15 pb-3 font-mono text-xs uppercase tracking-[0.16em] text-paper/60">
                {g.group}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((s) => (
                  <li key={s} className="text-[15.5px] text-paper/90">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
