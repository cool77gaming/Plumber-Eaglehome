import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const routes = ["", "/services", "/projects", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
