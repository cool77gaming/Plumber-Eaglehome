import { siteConfig } from "@/data/site";

export function CallLink({ className = "", label }: { className?: string; label?: string }) {
  return (
    <a href={`tel:${siteConfig.phonePrimary.tel}`} className={className}>
      {label ?? siteConfig.phonePrimary.display}
    </a>
  );
}

export function EmailLink({ className = "", label }: { className?: string; label?: string }) {
  return (
    <a href={`mailto:${siteConfig.emailPrimary}`} className={className}>
      {label ?? siteConfig.emailPrimary}
    </a>
  );
}
