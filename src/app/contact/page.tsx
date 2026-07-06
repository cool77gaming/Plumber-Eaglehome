import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { CallLink, EmailLink } from "@/components/ContactLinks";
import { MapEmbed } from "@/components/MapEmbed";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} for a free estimate on your next residential or commercial project.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-black py-16 text-center text-white">
        <h1 className="heading-serif text-4xl font-bold uppercase">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 text-white/70">
          Call us for a free estimate — we&apos;ll get back to you fast.
        </p>
      </section>

      <Section containerClassName="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="heading-serif text-2xl font-bold text-brand-black">Send a Message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="heading-serif text-2xl font-bold text-brand-black">Our Location</h2>
            <p className="mt-2 text-brand-black/70">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </p>
            <div className="mt-4">
              <MapEmbed />
            </div>
          </div>

          <div>
            <h2 className="heading-serif text-xl font-bold text-brand-black">Phone &amp; Email</h2>
            <ul className="mt-2 space-y-1 text-brand-black/70">
              <li>
                Phone 1: <CallLink className="font-semibold text-brand-teal-dark hover:underline" />
              </li>
              <li>
                Phone 2:{" "}
                <a
                  href={`tel:${siteConfig.phoneSecondary.tel}`}
                  className="font-semibold text-brand-teal-dark hover:underline"
                >
                  {siteConfig.phoneSecondary.display}
                </a>
              </li>
              <li>
                Email: <EmailLink className="font-semibold text-brand-teal-dark hover:underline" />
              </li>
            </ul>
          </div>

          <div>
            <h2 className="heading-serif text-xl font-bold text-brand-black">Business Hours</h2>
            <ul className="mt-2 space-y-1 text-brand-black/70">
              {siteConfig.hours.map((entry) => (
                <li key={entry.label} className="flex justify-between gap-4 sm:max-w-xs">
                  <span>{entry.label}</span>
                  <span className="font-semibold">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="heading-serif text-xl font-bold text-brand-black">Stay Connected</h2>
            <nav aria-label="Social media" className="mt-2 flex gap-4 text-brand-teal-dark">
              <a href={siteConfig.social.facebook} className="hover:underline">
                Facebook
              </a>
              <a href={siteConfig.social.instagram} className="hover:underline">
                Instagram
              </a>
            </nav>
          </div>
        </div>
      </Section>
    </>
  );
}
