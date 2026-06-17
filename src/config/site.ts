/**
 * Central site configuration for ACHO.
 *
 * NOTE: Values marked `// PLACEHOLDER` should be replaced with real details
 * before launch (phone, email, address, social links, insurance carriers).
 */

export const site = {
  name: "ACHO",
  fullName: "Autism Clinical Health Organization",
  tagline: "Compassionate, evidence-based autism care",
  description:
    "ACHO provides individualized, neurodiversity-affirming ABA therapy and behavioral support for children and families — led by board-certified behavior analysts.",

  // PLACEHOLDER contact details
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@achocare.com",
  emailHref: "mailto:hello@achocare.com",

  // PLACEHOLDER location / service area
  address: {
    line1: "123 Care Avenue, Suite 200",
    city: "Brooklyn",
    state: "NY",
    zip: "11201",
  },
  serviceArea: "In-home, in-clinic & telehealth across the New York metro area",

  // PLACEHOLDER social
  social: {
    linkedin: "https://www.linkedin.com/in/sumanmohammad",
    instagram: "#",
    facebook: "#",
  },

  founder: {
    name: "Suman Mohammad Asra",
    credentials: "M.A., LBA, BCBA",
    role: "Founder & Lead Behavior Analyst",
    linkedin: "https://www.linkedin.com/in/sumanmohammad",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
