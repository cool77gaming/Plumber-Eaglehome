import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <h1 className="heading-serif text-4xl font-bold text-brand-black">Page Not Found</h1>
      <p className="max-w-md text-brand-black/70">
        Sorry, we couldn&apos;t find that page. Let&apos;s get you back on track.
      </p>
      <LinkButton href="/">Back to Home</LinkButton>
    </section>
  );
}
