/**
 * Editorial content for ACHO.
 * All copy is professionally written but generic — review with Suman and
 * adjust specifics (ages served, exact programs, insurance carriers) before launch.
 */

export type Service = {
  id: string;
  title: string;
  blurb: string;
  detail: string;
  points: string[];
  icon: IconName;
};

export type IconName =
  | "puzzle"
  | "compass"
  | "spark"
  | "chat"
  | "heart"
  | "shield"
  | "users"
  | "leaf";

export const services: Service[] = [
  {
    id: "aba-therapy",
    title: "ABA Therapy",
    blurb:
      "Individualized Applied Behavior Analysis that builds communication, social, and daily-living skills.",
    detail:
      "Every ABA program at ACHO is designed and overseen by a board-certified behavior analyst and tailored to your child's strengths, interests, and goals. We focus on meaningful skills that improve everyday life — at home, at school, and in the community.",
    points: [
      "1:1 therapy guided by a BCBA-designed treatment plan",
      "Naturalistic, play-based teaching",
      "Continuous data-driven progress tracking",
    ],
    icon: "puzzle",
  },
  {
    id: "early-intervention",
    title: "Early Intervention",
    blurb:
      "Focused early support for our youngest learners, when it makes the greatest difference.",
    detail:
      "Research consistently shows the impact of early, intensive support. Our early-intervention services help toddlers and preschoolers develop foundational communication and social skills through warm, structured, developmentally-appropriate sessions.",
    points: [
      "Developmentally appropriate, relationship-based",
      "Foundational language & social skills",
      "Close family coaching and involvement",
    ],
    icon: "spark",
  },
  {
    id: "assessment",
    title: "Assessment & Diagnostics Support",
    blurb:
      "Thorough behavioral assessments that turn observation into a clear, personalized plan.",
    detail:
      "We begin with a comprehensive assessment of skills and behaviors to understand your child fully. The result is an individualized treatment plan with concrete, measurable goals — and a clear path forward you can understand and trust.",
    points: [
      "Comprehensive skills & behavior assessment",
      "Clear, measurable individualized goals",
      "Plain-language results you can act on",
    ],
    icon: "compass",
  },
  {
    id: "parent-training",
    title: "Parent & Caregiver Training",
    blurb:
      "We equip the whole family with strategies that carry progress into everyday moments.",
    detail:
      "Lasting change happens between sessions. We partner closely with caregivers — teaching practical, evidence-based strategies you can use during meals, bedtime, transitions, and play so progress generalizes across every part of life.",
    points: [
      "Practical strategies for daily routines",
      "Hands-on coaching and feedback",
      "Confidence to support progress at home",
    ],
    icon: "chat",
  },
  {
    id: "social-skills",
    title: "Social Skills Support",
    blurb:
      "Building connection, play, and friendship in a supportive, affirming environment.",
    detail:
      "Social connection is at the heart of childhood. We help children practice sharing, turn-taking, perspective-taking, and friendship skills in structured, encouraging settings that celebrate who they are.",
    points: [
      "Play, sharing & turn-taking",
      "Perspective-taking & communication",
      "Affirming, strengths-based approach",
    ],
    icon: "users",
  },
  {
    id: "telehealth",
    title: "Telehealth & In-Home",
    blurb:
      "Care that fits your family — in our clinic, in your home, or securely online.",
    detail:
      "Flexibility shouldn't be a barrier to great care. We offer in-clinic, in-home, and secure telehealth options so families can access consistent, high-quality support in the setting that works best for them.",
    points: [
      "In-clinic, in-home & virtual options",
      "Consistent care across settings",
      "Designed around your family's schedule",
    ],
    icon: "heart",
  },
];

export type ApproachStep = {
  step: string;
  title: string;
  body: string;
};

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Connect",
    body: "We start with a warm, no-pressure conversation to understand your child, your family, and your hopes. We'll walk you through how ACHO works and answer every question.",
  },
  {
    step: "02",
    title: "Assess",
    body: "A board-certified behavior analyst conducts a thorough assessment of your child's strengths and needs — the foundation for a plan built entirely around them.",
  },
  {
    step: "03",
    title: "Personalize",
    body: "We craft an individualized treatment plan with clear, measurable goals, and match your child with a care team they'll feel comfortable and safe with.",
  },
  {
    step: "04",
    title: "Grow Together",
    body: "Therapy begins, progress is tracked with real data, and we adjust continuously — keeping families informed and involved every step of the way.",
  },
];

export type Value = { title: string; body: string; icon: IconName };

export const values: Value[] = [
  {
    title: "Neurodiversity-affirming",
    body: "We celebrate every child's strengths and individuality. Our goal is never to change who a child is — it's to help them thrive as themselves.",
    icon: "leaf",
  },
  {
    title: "Evidence-based",
    body: "Every plan is grounded in the science of applied behavior analysis and guided by measurable, transparent data.",
    icon: "shield",
  },
  {
    title: "Family-centered",
    body: "Families are partners, not bystanders. We coach, communicate, and collaborate so progress lasts well beyond our sessions.",
    icon: "heart",
  },
  {
    title: "Whole-child focused",
    body: "We see the whole child — communication, social connection, independence, and joy — not a checklist of behaviors.",
    icon: "spark",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "1:1", label: "Individualized care for every child" },
  { value: "100%", label: "BCBA-designed treatment plans" },
  { value: "3", label: "Settings — clinic, home & telehealth" },
  { value: "0", label: "Cookie-cutter programs" },
];

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "From our very first call, ACHO felt different. They saw our son for who he is and built a plan around his strengths. We finally feel supported.",
    name: "A parent in Brooklyn", // PLACEHOLDER
    role: "Parent of a 4-year-old",
  },
  {
    quote:
      "The parent coaching changed everything at home. We have real strategies now, and mealtimes and bedtime are so much calmer.",
    name: "A parent in Queens", // PLACEHOLDER
    role: "Parent of a 6-year-old",
  },
  {
    quote:
      "Compassionate, professional, and genuinely invested in our daughter's progress. We're so grateful we found them.",
    name: "A grateful family", // PLACEHOLDER
    role: "Parent of a 3-year-old",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is ABA therapy?",
    a: "Applied Behavior Analysis (ABA) is an evidence-based approach that helps children build communication, social, and daily-living skills. At ACHO, every program is designed and overseen by a board-certified behavior analyst (BCBA) and individualized to your child.",
  },
  {
    q: "What ages do you work with?",
    a: "We support children across early childhood and beyond. The best way to know if we're a fit is a quick, free conversation — reach out and we'll guide you. (Confirm exact ages served before launch.)",
  },
  {
    q: "Do you take insurance?",
    a: "We work with many major insurance plans and will help you verify your benefits. Contact us and we'll walk you through coverage options. (Add accepted carriers before launch.)",
  },
  {
    q: "Where do sessions take place?",
    a: "We offer care in our clinic, in your home, and via secure telehealth — whichever setting works best for your family.",
  },
  {
    q: "How do we get started?",
    a: "It begins with a simple, no-pressure conversation. Reach out through our contact page or give us a call, and we'll explain every step from there.",
  },
];

export type ResourceLink = { title: string; description: string; href: string };

export const resources: ResourceLink[] = [
  {
    title: "What to expect from ABA",
    description:
      "A plain-language overview of how applied behavior analysis works and what a typical journey looks like.",
    href: "/approach",
  },
  {
    title: "Insurance & getting started",
    description:
      "How we help families verify benefits and begin care without the usual paperwork stress.",
    href: "/contact",
  },
  {
    title: "Supporting your child at home",
    description:
      "Simple, evidence-based strategies caregivers can use during everyday routines.",
    href: "/services",
  },
];
