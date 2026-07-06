import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path?: string;
}

export function pageMetadata({
  title,
  description,
  path = "",
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
