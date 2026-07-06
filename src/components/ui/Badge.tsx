import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-brand-gold px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
      {children}
    </span>
  );
}
