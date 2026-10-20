import { ArrowDownRight, Download } from "lucide-react";
import { profile, stats } from "../data";

function ResponseCard() {
  return (
    <div
      className="w-full rounded-lg border border-ink/15 bg-night text-paper shadow-[0_30px_60px_-30px_rgba(23,21,26,0.55)]"
      role="img"
      aria-label="A JSON response summarising Ashish Sharma: senior backend developer, 6 plus years, Laravel, 30 percent faster API responses, 10 plus migrations, based in Delhi."
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[11px] text-paper/60">
        <span>GET /developers/ashish-sharma</span>
        <span className="flex items-center gap-2 text-[#8fd9a8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8fd9a8]" /> 200 OK
        </span>
      </div>
      <pre className="overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-[1.75] sm:text-[13px]" aria-hidden="true">
        <code>
          <span className="text-paper/50">{"{"}</span>
          {"\n"}
          {"  "}
          <span className="text-[#c4a5ee]">"role"</span>: <span className="text-[#f2d49b]">"Senior Backend Developer"</span>,{"\n"}
          {"  "}
          <span className="text-[#c4a5ee]">"experience"</span>: <span className="text-[#f2d49b]">"6+ years"</span>,{"\n"}
          {"  "}
          <span className="text-[#c4a5ee]">"stack"</span>: [<span className="text-[#f2d49b]">"PHP 8.x"</span>, <span className="text-[#f2d49b]">"Laravel"</span>,{"\n"}
          {"            "}
          <span className="text-[#f2d49b]">"MySQL"</span>, <span className="text-[#f2d49b]">"Redis"</span>],{"\n"}
          {"  "}
          <span className="text-[#c4a5ee]">"api_response_time"</span>: <span className="text-[#8fd9a8]">"-30%"</span>,{"\n"}
          {"  "}
          <span className="text-[#c4a5ee]">"apps_migrated"</span>: <span className="text-[#8fd9a8]">10</span>,{"\n"}
          {"  "}
          <span className="text-[#c4a5ee]">"mentees"</span>: <span className="text-[#8fd9a8]">5</span>,{"\n"}
          {"  "}
          <span className="text-[#c4a5ee]">"location"</span>: <span className="text-[#f2d49b]">"Delhi, India"</span>
          {"\n"}
          <span className="text-paper/50">{"}"}</span>
          <span className="caret ml-1" />
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {profile.role} · {profile.location}
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.2rem,9vw,6.6rem)] font-medium leading-[0.95] tracking-[-0.03em]">
              Ashish
              <br />
              Sharma<span className="text-accent">.</span>
            </h1>
            <p className="mt-7 max-w-xl font-display text-2xl leading-snug text-ink md:text-[1.7rem]">
              I build Laravel backends that stay fast as they grow.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-2 md:text-lg">
              Six years across PHP, microservices and REST APIs, from untangling legacy monoliths to tuning the queries
              behind high-traffic products. Currently at Molitics, where refactoring and caching cut average API response
              time by 30%.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent"
              >
                View my work
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium transition hover:border-ink hover:bg-ink hover:text-paper"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
          <ResponseCard />
        </div>

        <dl className="mt-16 grid grid-cols-2 border-y border-line md:mt-24 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-1 py-6 md:px-6 md:py-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i > 0 ? "md:border-l md:border-line" : ""
              } ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-medium tracking-tight md:text-5xl">{s.value}</span>
                <span className="mt-2 block max-w-[16ch] text-[13px] leading-snug text-ink-2">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
