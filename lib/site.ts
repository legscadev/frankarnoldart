export const siteConfig = {
  name: "Frank Arnold",
  title: "Frank Arnold Art",
  tagline: "International Abstract Figurative Painter & Sculptor",
  location: "San José del Cabo · Mexico City · Central California",
  email: "frank@frankarnoldart.com",
  phones: {
    gallery: "+52 624-142-4422",
    usa: "+1 559-301-1148",
  },
  address: {
    street: "1137 Calle Comonfort",
    locality: "San José del Cabo, BCS Mexico, 23400",
  },
  hours: [
    { label: "Tuesday – Sunday", value: "2:00 pm – 7:00 pm" },
    { label: "Art Walk Thursdays", value: "5:00 pm – 9:00 pm" },
    { label: "Mondays", value: "Closed" },
  ],
  // Frank's public portfolio on artgalleria.com — public catalog + inquiry
  // flow are served from here, embedded as an iframe on /painting-sculpture.
  artgalleriaFolioId: "72d5151c-5892-4650-992f-8f3ce17f9180",
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Paintings & Sculptures", href: "/painting-sculpture" },
  { label: "Books", href: "/purchase" },
  {
    label: "Bio",
    href: "/bio",
    children: [
      { label: "About Frank Arnold", href: "/bio" },
      { label: "Reviews", href: "/bio/reviews" },
      { label: "CV", href: "/bio/cv" },
    ],
  },
  { label: "Contact", href: "/san-jose-del-cabo-gallery" },
] as const;

export type NavItem = (typeof primaryNav)[number];
