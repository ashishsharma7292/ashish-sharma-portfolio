// All content comes from the CV. Edit here to update the site.

export const profile = {
  name: "Ashish Sharma",
  monogram: "as",
  role: "Senior Backend Developer",
  location: "Delhi, India",
  email: "ashishsharma007.as46@gmail.com",
  linkedin: "https://www.linkedin.com/in/ashishsharmaoo7/",
  github: "https://github.com/ashishsharma7292",
  cv: "/Ashish_Sharma_CV.pdf",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export const stats = [
  { value: "6+", label: "years building backends" },
  { value: "30%", label: "faster average API response at Molitics" },
  { value: "10+", label: "client apps migrated to Laravel / CodeIgniter" },
  { value: "5", label: "junior developers mentored" },
];

export type Role = {
  title: string;
  company: string;
  context: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Backend Developer",
    company: "Molitics Infomedia",
    context: "Social media & news platform",
    period: "Nov 2024 – Present",
    location: "Delhi",
    points: [
      "Work across a microservices backend (Laravel, Lumen, Node.js, Python), shipping features and system improvements across repositories.",
      "Led the refactor of legacy monolithic modules into clean, SOLID-based service layers, cutting average API response time by 30% and reducing development time.",
      "Tuned high-traffic MySQL queries and response handling with indexing, query restructuring and Redis caching, lowering database load.",
      "Designed lean, well-documented REST APIs with frontend teams, shortening integration cycles.",
      "Pushed engineering standards: code reviews, structure conventions and CI/CD with GitHub Actions for more reliable releases.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Softintra Technology",
    context: "Client project delivery",
    period: "Mar 2021 – Sep 2024",
    location: "Uttar Pradesh",
    points: [
      "Led the migration of 10+ client applications from core PHP to CodeIgniter and Laravel, improving maintainability, security and delivery speed.",
      "Built a modular, reusable architecture with Eloquent ORM, queues, and third-party and payment gateway integrations, cutting repeated development effort.",
      "Mentored 5 junior developers through onboarding, code reviews and best practices, so they could deliver their first projects early.",
      "Owned features end to end across backend and frontend, meeting client deadlines on 7+ projects.",
    ],
  },
  {
    title: "PHP Developer",
    company: "Bharat Taxi",
    context: "Where it started",
    period: "Mar 2020 – Feb 2021",
    location: "Uttar Pradesh",
    points: [
      "Built core PHP modules that supported on-time production releases, working closely with senior engineers.",
      "Improved frontend UI and user flows to lift engagement.",
    ],
  },
];

export type Work = {
  index: string;
  title: string;
  kind: string;
  description: string;
  value: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const work: Work[] = [
  {
    index: "01",
    title: "Zeo Taxi",
    kind: "Cab booking & CRM platform · Solo build",
    description:
      "A complete cab booking platform built from scratch: a customer-facing website plus an admin CRM panel. Covers the booking flow, vendor and driver management, and payment modules, with REST APIs and Google Distance Matrix for the frontend-backend communication.",
    value:
      "Designed, built, optimised and deployed alone, from first commit to production, including a CRM dashboard with live booking insights and analytics.",
    stack: ["Laravel", "MySQL", "JavaScript", "AJAX", "Bootstrap"],
    links: [
      { label: "Live site", href: "https://www.zeotaxi.com/" },
      { label: "CRM panel", href: "https://crm.zeotaxi.com/" },
    ],
  },
  {
    index: "02",
    title: "Molitics",
    kind: "Microservices backend · Team",
    description:
      "Backend services for a social media and news platform, built as microservices across Laravel, Lumen, Node.js and Python. APIs in Laravel and Lumen, GraphQL for efficient data fetching, and work on service communication and modular architecture.",
    value:
      "Legacy modules refactored into SOLID service layers, with a 30% cut in average API response time.",
    stack: ["Laravel", "Lumen", "Node.js", "Python", "GraphQL", "Redis"],
    links: [{ label: "Live site", href: "https://molitics.in/" }],
  },
  {
    index: "03",
    title: "Legacy PHP modernisation",
    kind: "Migration programme · Softintra Technology",
    description:
      "Moved more than ten client applications off core PHP onto CodeIgniter and Laravel, standardising structure, queues, ORM usage and third-party integrations along the way.",
    value:
      "More maintainable and more secure codebases, faster delivery, and stronger client trust and retention.",
    stack: ["Laravel", "CodeIgniter", "Eloquent ORM", "Queues"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["PHP 8.x", "Laravel 8–13", "Lumen", "Eloquent ORM", "Laravel Queues", "Node.js (basic)", "Python (contributor)"] },
  { group: "Data & search", items: ["MySQL", "Redis (caching, queues, sessions)", "Elasticsearch"] },
  { group: "Architecture", items: ["System design", "Microservices", "REST APIs", "GraphQL", "Event-driven architecture", "OOP & SOLID", "Design patterns"] },
  { group: "Cloud & delivery", items: ["AWS (EC2, S3, RDS, SQS)", "Docker & Compose", "GitHub Actions CI/CD", "Nginx"] },
  { group: "Integrations", items: ["Payment gateways", "Third-party APIs", "Google Distance Matrix"] },
  { group: "Frontend & tools", items: ["HTML, CSS, Bootstrap", "jQuery, AJAX", "Angular (basic)", "Git, Bitbucket", "Jira"] },
];

export const education = [
  {
    title: "Bachelor of Computer Applications",
    place: "Swami Vivekanand Subharti University",
    period: "2017 – 2020",
    note: "Specialisation in web development and database management.",
  },
];
