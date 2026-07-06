export interface DayHours {
  label: string;
  hours: string;
}

export const siteConfig = {
  name: "Eagle Home Improvement VA",
  shortName: "Eagle Home Improvement",
  tagline: "You Dream It, We Do It.",
  badge: "Class A Contractor",
  foundedYear: 2019,
  description:
    "Class A licensed general contractor serving Hampton Roads and Richmond, Virginia with residential and commercial remodeling, kitchens, bathrooms, windows, and siding.",

  // Canonical production URL, used for metadata/OG/canonical/sitemap/JSON-LD.
  // TODO: confirm this is the domain the client wants the new site deployed under.
  url: "https://eaglehimva.com",

  phonePrimary: { display: "(757) 218-8426", tel: "+17572188426" },
  phoneSecondary: { display: "(757) 303-2002", tel: "+17573032002" },
  emailPrimary: "eagleinfo@eaglehimva.com",
  emailSecondary: "eaglehimva@gmail.com",

  address: {
    street: "74 Sanlun Lakes Dr",
    city: "Hampton",
    state: "VA",
    // TODO: confirm ZIP code with the client — not visible on the source site.
    zip: "23666",
  },

  // TODO: confirm real business hours — the source site's hours section
  // was cut off before it could be captured. Placeholder below.
  hours: [
    { label: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { label: "Saturday", hours: "9:00 AM – 2:00 PM" },
    { label: "Sunday", hours: "Closed" },
  ] satisfies DayHours[],

  serviceArea: [
    "Richmond",
    "Hampton",
    "New Kent",
    "Gloucester",
    "Williamsburg",
    "Yorktown",
    "Chesapeake",
    "Norfolk",
    "Virginia Beach",
    "Newport News",
  ],

  // TODO: replace with real profile URLs once provided by the client.
  social: {
    facebook: "#",
    instagram: "#",
  },

  // Third-party form endpoint for the static-export contact form (GitHub
  // Pages has no server to receive a POST). Create a free Formspree or
  // Web3Forms form and drop its endpoint/access key in here before launch.
  contactFormEndpoint: "https://formspree.io/f/REPLACE_WITH_REAL_FORM_ID",
};
