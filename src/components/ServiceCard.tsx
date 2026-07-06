import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-brand-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="heading-serif text-xl font-bold text-brand-black">{service.title}</h3>
      <p className="mt-3 text-sm text-brand-black/70">{service.summary}</p>
      <ul className="mt-4 space-y-1 text-sm text-brand-black/80">
        {service.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span aria-hidden className="text-brand-gold">
              •
            </span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
