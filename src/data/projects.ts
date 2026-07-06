export interface Project {
  slug: string;
  title: string;
  location: string;
  category: "residential" | "commercial";
  summary: string;
  body: string;
  isPlaceholder?: boolean;
}

export const projects: Project[] = [
  {
    slug: "laisy-daisy-fredericksburg",
    title: "Commercial Buildout — Laisy Daisy",
    location: "Fredericksburg, VA",
    category: "commercial",
    summary:
      "A full 5,000-square-foot commercial renovation, from framing to finished floors.",
    body: "Eagle Home Improvement VA completed a full 5,000-square-foot commercial renovation for Laisy Daisy in Fredericksburg. Our team framed two L-shaped interior walls, ran new electrical wiring throughout the space, hung and finished drywall, applied fresh paint, upgraded the lighting fixtures, and installed 5,000 square feet of laminate flooring. Thank you to John for trusting us with this project — you dreamed it, the Eagle team built it.",
  },
  {
    slug: "coming-soon-kitchen",
    title: "Kitchen Remodel",
    location: "Hampton Roads, VA",
    category: "residential",
    summary: "Project photos and details coming soon.",
    body: "We're gathering photos and details from a recent residential kitchen remodel to feature here. Check back soon, or call us to see examples of our kitchen work in person.",
    isPlaceholder: true,
  },
  {
    slug: "coming-soon-bathroom",
    title: "Bathroom Remodel",
    location: "Hampton Roads, VA",
    category: "residential",
    summary: "Project photos and details coming soon.",
    body: "We're gathering photos and details from a recent bathroom remodel to feature here. Check back soon, or call us to see examples of our bathroom work in person.",
    isPlaceholder: true,
  },
];
