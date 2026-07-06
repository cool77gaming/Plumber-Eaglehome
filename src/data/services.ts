export interface Service {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  category: "residential" | "commercial" | "both";
}

export const services: Service[] = [
  {
    slug: "general-remodeling",
    title: "General Remodeling",
    summary:
      "Full-scope renovations from framing to finish — walls, drywall, electrical, flooring, and paint handled by one crew.",
    details: [
      "Interior framing and layout changes",
      "Drywall hanging, finishing, and repair",
      "Electrical rough-in and lighting upgrades",
      "Flooring installation, including laminate and tile",
      "Interior and exterior painting",
    ],
    category: "both",
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    summary:
      "Cabinet layouts, countertops, and finishes designed around how your family actually uses the kitchen.",
    details: [
      "Custom cabinet layout and installation",
      "Countertop and backsplash upgrades",
      "Plumbing and electrical coordination for islands and appliances",
      "Lighting design",
    ],
    category: "residential",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    summary:
      "Tub-to-shower conversions, tile surrounds, and fixture upgrades built to last in a wet room.",
    details: [
      "Shower and tub surround replacement",
      "Vanity, sink, and toilet installation",
      "Tile work and waterproofing",
      "Ventilation and lighting updates",
    ],
    category: "residential",
  },
  {
    slug: "windows",
    title: "Window Installation",
    summary:
      "Energy-efficient replacement windows installed and sealed correctly the first time.",
    details: [
      "Vinyl replacement window installation",
      "Flashing and weatherproofing",
      "Trim and finish work to match existing siding",
    ],
    category: "residential",
  },
  {
    slug: "siding-exterior",
    title: "Siding & Exterior",
    summary:
      "Exterior upgrades that protect the building envelope and boost curb appeal.",
    details: [
      "Siding repair and replacement",
      "Exterior trim and painting",
      "Weatherproofing and moisture control",
    ],
    category: "both",
  },
  {
    slug: "commercial-buildouts",
    title: "Commercial Buildouts",
    summary:
      "Tenant improvements and commercial renovations delivered on schedule for business owners who can't afford downtime.",
    details: [
      "Interior framing and wall layout",
      "Commercial electrical and lighting",
      "Large-format flooring installation",
      "Drywall, paint, and finish-out",
    ],
    category: "commercial",
  },
];
