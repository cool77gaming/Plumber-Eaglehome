import { siteConfig } from "@/data/site";

export function MapEmbed() {
  const query = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  );

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border border-brand-black/10 shadow-sm">
      <iframe
        title={`Map to ${siteConfig.name}`}
        src={`https://maps.google.com/maps?q=${query}&z=13&output=embed`}
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
