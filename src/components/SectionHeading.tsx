import Reveal from "./Reveal";

export default function SectionHeading({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{kicker}</p>
      <h2 id={id} className="mt-3 max-w-3xl font-display text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
