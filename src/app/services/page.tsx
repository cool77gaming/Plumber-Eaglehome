import type { Metadata } from "next";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Residential and commercial remodeling services: kitchens, bathrooms, windows, siding, and full-scope renovations.",
  path: "/services",
});

export default function ServicesPage() {
  const residential = services.filter((s) => s.category !== "commercial");
  const commercial = services.filter((s) => s.category !== "residential");

  return (
    <>
      <section className="bg-brand-black py-16 text-center text-white">
        <h1 className="heading-serif text-4xl font-bold uppercase">Our Services</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 text-white/70">
          You dream it, we do it — from framing to finish, residential and commercial.
        </p>
      </section>

      <Section>
        <h2 className="heading-serif text-2xl font-bold text-brand-black">Residential</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {residential.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="heading-serif text-2xl font-bold text-brand-black">Commercial</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commercial.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <section className="bg-brand-black py-16 text-center text-white">
        <h2 className="heading-serif text-2xl font-bold uppercase">Ready to start your project?</h2>
        <div className="mt-6">
          <LinkButton href="/contact">Get a Free Estimate</LinkButton>
        </div>
      </section>
    </>
  );
}
