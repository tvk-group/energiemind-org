import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  alt?: boolean;
  children: ReactNode;
}

export function Section({ id, title, subtitle, alt = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 ${alt ? "bg-section-alt" : "bg-background"}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-accent-dark md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
