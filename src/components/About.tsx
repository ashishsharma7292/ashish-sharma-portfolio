import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    title: "Clean boundaries",
    text: "Legacy modules become small, SOLID service layers that are easier to change and cheaper to extend.",
  },
  {
    title: "Fast where it counts",
    text: "Indexing, query restructuring and Redis caching on the paths that carry the traffic.",
  },
  {
    title: "APIs people enjoy using",
    text: "Lean, documented REST APIs designed alongside the frontend teams who consume them.",
  },
];

export default function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <SectionHeading id="about-title" kicker="01 — About" title="Started with core PHP. Now I own the architecture." />
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <Reveal className="space-y-5 text-lg leading-relaxed text-ink-2">
          <p>
            I'm a backend developer in Delhi. I began in 2020 writing core PHP modules for a taxi company, and I've
            spent the years since moving closer to the systems underneath: migrating client applications to Laravel,
            then working on a microservices backend where speed and structure matter every day.
          </p>
          <p>
            What I care about most is how a system holds up as it grows: how requests are served, how data is fetched
            and cached, and how a codebase stays readable for the next person. I like the unglamorous work of
            untangling a legacy module and measuring the difference afterwards.
          </p>
          <p>
            I also build whole products. Zeo Taxi, a cab booking platform with its own CRM, was designed, built and
            deployed by me alone. And I like helping others get good: I've mentored five junior developers through
            their first projects. Next, I want to keep taking ownership of system design and search and caching
            layers on products with real traffic.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="divide-y divide-line border-y border-line">
            {principles.map((p, i) => (
              <li key={p.title} className="flex gap-5 py-6">
                <span className="pt-1 font-mono text-xs text-accent">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
