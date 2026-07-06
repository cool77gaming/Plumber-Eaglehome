import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Recent residential and commercial projects completed by Eagle Home Improvement VA.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-brand-black py-16 text-center text-white">
        <h1 className="heading-serif text-4xl font-bold uppercase">Our Projects</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 text-white/70">
          A look at the work we&apos;re proud of — more projects added regularly.
        </p>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
