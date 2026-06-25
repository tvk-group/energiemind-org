import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  tag?: string;
}

export function Card({ title, description, icon, tag }: CardProps) {
  return (
    <article className="group rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md">
      {icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-section-alt text-accent">
          {icon}
        </div>
      )}
      {tag && (
        <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
          {tag}
        </span>
      )}
      <h3 className="font-serif text-lg font-semibold text-accent-dark group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
