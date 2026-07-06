import { siteConfig } from "@/data/site";

export function StickyCallBar() {
  return (
    <a
      href={`tel:${siteConfig.phonePrimary.tel}`}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-brand-gold py-3 font-bold uppercase tracking-wide text-brand-black shadow-lg md:hidden"
    >
      Call Now: {siteConfig.phonePrimary.display}
    </a>
  );
}
