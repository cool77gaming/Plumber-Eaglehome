import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-brand-black/10 bg-white shadow-sm">
      <div
        className={`flex aspect-video items-center justify-center rounded-t-lg text-sm font-medium ${
          project.isPlaceholder
            ? "bg-brand-cream text-brand-black/40"
            : "bg-brand-black text-brand-gold"
        }`}
      >
        {project.isPlaceholder ? "Project photo placeholder" : project.title}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal-dark">
          {project.category === "commercial" ? "Commercial" : "Residential"} · {project.location}
        </span>
        <h3 className="heading-serif mt-2 text-xl font-bold text-brand-black">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm text-brand-black/70">{project.body}</p>
      </div>
    </div>
  );
}
