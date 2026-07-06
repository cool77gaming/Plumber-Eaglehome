import Link from "next/link";
import { siteConfig } from "@/data/site";
import { CallLink, EmailLink } from "@/components/ContactLinks";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-16 w-16" />
          <p className="heading-serif mt-4 text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-2 text-sm italic text-brand-gold">&ldquo;{siteConfig.tagline}&rdquo;</p>
        </div>

        <div>
          <h2 className="heading-serif text-sm font-bold uppercase tracking-widest text-brand-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <CallLink className="hover:text-brand-teal" />
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneSecondary.tel}`} className="hover:text-brand-teal">
                {siteConfig.phoneSecondary.display}
              </a>
            </li>
            <li>
              <EmailLink className="hover:text-brand-teal" />
            </li>
            <li className="pt-2 text-white/80">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="heading-serif text-sm font-bold uppercase tracking-widest text-brand-gold">
            Service Area
          </h2>
          <p className="mt-4 text-sm text-white/80">{siteConfig.serviceArea.join(", ")}, VA</p>
        </div>

        <div>
          <h2 className="heading-serif text-sm font-bold uppercase tracking-widest text-brand-gold">
            Stay Connected
          </h2>
          <nav aria-label="Social media" className="mt-4 flex gap-4">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-brand-teal">
              Facebook
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-brand-teal">
              Instagram
            </a>
          </nav>
          <nav aria-label="Footer" className="mt-6 flex flex-col gap-1 text-sm text-white/80">
            <Link href="/services" className="hover:text-brand-teal">
              Services
            </Link>
            <Link href="/projects" className="hover:text-brand-teal">
              Projects
            </Link>
            <Link href="/about" className="hover:text-brand-teal">
              About
            </Link>
          </nav>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.badge}. All rights reserved.
      </div>
    </footer>
  );
}
