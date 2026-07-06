import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { CallLink } from "@/components/ContactLinks";

export const metadata: Metadata = pageMetadata({
  title: "Home",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const featuredProject = projects.find((project) => !project.isPlaceholder);

  return (
    <>
      <section className="bg-brand-black text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6 lg:px-8">
          <Badge>{siteConfig.badge}</Badge>
          <h1 className="heading-serif max-w-3xl text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Welcome to {siteConfig.name}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">{siteConfig.tagline}</p>
          <p className="max-w-2xl text-white/70">
            Residential and commercial remodeling across Hampton Roads and Richmond, Virginia.
            Call today for a free estimate.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <LinkButton href="/contact">Get a Free Estimate</LinkButton>
            <LinkButton variant="outline" href={`tel:${siteConfig.phonePrimary.tel}`}>
              Call {siteConfig.phonePrimary.display}
            </LinkButton>
          </div>
        </div>
      </section>

      <Section>
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="heading-serif text-3xl font-bold text-brand-black">Our Services</h2>
          <p className="text-brand-black/70">
            From full remodels to finish work, one crew handles it start to finish.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-8">
          <LinkButton variant="outline" href="/services">
            View All Services
          </LinkButton>
        </div>
      </Section>

      {featuredProject && (
        <Section className="bg-white">
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="heading-serif text-3xl font-bold text-brand-black">Recent Work</h2>
            <p className="text-brand-black/70">A look at a project we&apos;re proud of.</p>
          </div>
          <div className="max-w-2xl">
            <ProjectCard project={featuredProject} />
          </div>
          <div className="mt-8">
            <LinkButton variant="outline" href="/projects">
              View All Projects
            </LinkButton>
          </div>
        </Section>
      )}

      <Section>
        <div className="flex flex-col gap-2">
          <h2 className="heading-serif text-3xl font-bold text-brand-black">Proudly Serving</h2>
          <p className="max-w-2xl text-brand-black/70">
            {siteConfig.serviceArea.join(", ")}, Virginia, and surrounding communities.
          </p>
        </div>
      </Section>

      <section className="bg-brand-black py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="heading-serif text-3xl font-bold uppercase">Call Us For A Free Estimate</h2>
          <p className="mt-3 text-white/70">
            Tell us what you&apos;re dreaming up — we&apos;ll help you get it done.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <LinkButton href="/contact">Contact Us</LinkButton>
            <CallLink className="inline-flex items-center font-semibold text-brand-gold hover:underline" />
          </div>
        </div>
      </section>
    </>
  );
}
