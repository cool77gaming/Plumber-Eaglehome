import { siteConfig } from "@/data/site";

function dayHoursToSchema() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ];
}

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phonePrimary.tel,
    email: siteConfig.emailPrimary,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City",
      name: `${city}, VA`,
    })),
    openingHoursSpecification: dayHoursToSchema(),
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram].filter(
      (link) => link && link !== "#",
    ),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
