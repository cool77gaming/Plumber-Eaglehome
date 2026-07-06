import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `Learn about ${siteConfig.name}, a Class A licensed contractor serving Hampton Roads and Richmond, VA since ${siteConfig.foundedYear}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-black py-16 text-center text-white">
        <h1 className="heading-serif text-4xl font-bold uppercase">About {siteConfig.name}</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 text-white/70 italic">&ldquo;{siteConfig.tagline}&rdquo;</p>
      </section>

      <Section>
        <div className="max-w-3xl text-brand-black/80">
          <p>
            Since {siteConfig.foundedYear}, {siteConfig.name} has brought a hands-on, family-run
            approach to home improvement and general contracting across Hampton Roads and
            Richmond, Virginia. We&apos;re a {siteConfig.badge}, licensed and insured to take on
            everything from a single-room remodel to a full commercial buildout.
          </p>
          <p className="mt-4">
            Our crew handles the whole job — framing, electrical, drywall, flooring, and paint —
            so homeowners and business owners don&apos;t have to coordinate multiple contractors.
            Whether it&apos;s a kitchen, a bathroom, new windows, or a 5,000-square-foot commercial
            space, our approach stays the same: listen carefully, plan it right, and do the work
            with pride.
          </p>
          <p className="mt-4">
            <strong>You dream it, we do it.</strong>
          </p>
        </div>

        <div className="mt-10">
          <h2 className="heading-serif text-xl font-bold text-brand-black">Where We Work</h2>
          <p className="mt-2 max-w-2xl text-brand-black/70">
            {siteConfig.serviceArea.join(", ")}, Virginia, and surrounding communities.
          </p>
        </div>

        <div className="mt-10">
          <LinkButton href="/contact">Get a Free Estimate</LinkButton>
        </div>
      </Section>
    </>
  );
}
