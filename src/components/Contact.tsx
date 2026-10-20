import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data";

const rows = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { icon: Linkedin, label: "LinkedIn", value: "in/ashishsharmaoo7", href: profile.linkedin, external: true },
  { icon: Github, label: "GitHub", value: "ashishsharma7292", href: profile.github, external: true },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-paper-2 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">06 — Contact</p>
          <h2
            id="contact-title"
            className="mt-3 max-w-4xl font-display text-[clamp(2.4rem,7vw,5.2rem)] font-medium leading-[1] tracking-[-0.025em]"
          >
            Have a backend that needs to be faster, cleaner or built from scratch?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-2">
            I'm always glad to talk about engineering roles, system design problems or a product that needs an owner.
          </p>
        </Reveal>

        <Reveal delay={100} as="ul" className="mt-14 border-t border-ink">
          {rows.map((r) => (
            <li key={r.label} className="border-b border-line">
              <a
                href={r.href}
                {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 py-6 transition-colors hover:text-accent"
              >
                <span className="flex items-center gap-4">
                  <r.icon size={20} aria-hidden="true" className="text-ink-2 group-hover:text-accent" />
                  <span className="w-20 font-mono text-xs uppercase tracking-wider text-ink-2">{r.label}</span>
                  <span className="break-all text-lg md:text-2xl">{r.value}</span>
                </span>
                <ArrowUpRight
                  size={22}
                  aria-hidden="true"
                  className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                {r.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </Reveal>

        <Reveal delay={160} className="mt-10">
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent"
          >
            <Download size={16} aria-hidden="true" />
            Download my CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}
