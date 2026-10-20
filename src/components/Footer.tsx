import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  const link = "p-2 text-ink-2 transition hover:text-accent";
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-ink-2 md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-1">
          <a className={link} href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
            <Linkedin size={18} />
          </a>
          <a className={link} href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
