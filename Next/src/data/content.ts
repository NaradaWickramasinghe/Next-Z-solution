/* =========================================================
   Next Z Solutions — Centralised content data
   ========================================================= */

export const PHONE_DISPLAY = '076 489 3143';
export const PHONE_WA = '94764893143';
export const EMAIL = 'nextzsolution88@gmail.com';
export const WA_LINK = `https://wa.me/${PHONE_WA}`;

/* ---------- Navigation ---------- */
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

/* ---------- Services ---------- */
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  { icon: 'i-code', title: 'System Development', description: 'Custom software solutions tailored to your needs.' },
  { icon: 'i-megaphone', title: 'Digital Marketing', description: 'Grow your brand with strategic and result-driven marketing.' },
  { icon: 'i-search', title: 'SEO Handling', description: 'Rank higher. Get noticed. Drive more traffic.' },
  { icon: 'i-video', title: 'Video Editing & Creation', description: 'Turn moments into compelling stories.' },
  { icon: 'i-robot', title: 'RPA & Automation', description: 'Automate repetitive tasks and work smarter.' },
  { icon: 'i-phone', title: 'Mobile App Creation', description: 'Build powerful and user-friendly mobile apps.' },
  { icon: 'i-chat', title: 'Chatbot Creation', description: 'Automate conversations and enhance customer support.' },
  { icon: 'i-pen', title: 'Graphic Designing', description: 'Bring your ideas to life with stunning designs.' },
];

/* ---------- Why Us ---------- */
export interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

export const WHY_US: WhyItem[] = [
  { icon: 'i-bulb', title: 'Innovative Solutions', description: 'Fresh, practical ideas that fit your goals.' },
  { icon: 'i-users', title: 'Professional Support', description: 'A responsive team that stays with you after launch.' },
  { icon: 'i-bolt', title: 'On-Time Delivery', description: 'Clear timelines, and we keep to them.' },
  { icon: 'i-shield', title: 'Affordable Pricing', description: 'Quality work that respects your budget.' },
];

/* ---------- About pillars ---------- */
export interface Pillar {
  num: string;
  title: string;
  description: string;
}

export const PILLARS: Pillar[] = [
  { num: '01', title: 'Innovate', description: 'We design smart systems and creative work that set you apart.' },
  { num: '02', title: 'Automate', description: 'We remove repetitive tasks so your team can focus on what matters.' },
  { num: '03', title: 'Grow', description: 'We help you reach more people and turn attention into results.' },
];

/* ---------- Stats ---------- */
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '', label: 'Services Offered' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

/* ---------- Process steps ---------- */
export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { num: '01', title: 'Discovery', description: 'We listen, research and understand your goals, audience and challenges.' },
  { num: '02', title: 'Planning', description: 'We map out a clear roadmap with milestones, timelines and deliverables.' },
  { num: '03', title: 'Development', description: 'Our team builds, tests and iterates until every detail is right.' },
  { num: '04', title: 'Launch & Support', description: 'We deploy your project and stay with you for ongoing improvements.' },
];

/* ---------- Tech stack ---------- */
export const TECH_STACK = [
  'React', 'Node.js', 'Python', 'TypeScript', 'Flutter',
  'WordPress', 'Figma', 'PostgreSQL', 'AWS', 'Docker',
  'Next.js', 'Firebase', 'TensorFlow', 'MongoDB', 'Tailwind',
] as const;

/* ---------- Testimonials ---------- */
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Next Z Solutions transformed our outdated systems into a streamlined platform that our team actually enjoys using. Their attention to detail is outstanding.',
    name: 'Amara Perera',
    company: 'Lotus Trading Co.',
  },
  {
    quote: 'We saw a 3x increase in organic traffic within four months of working with their SEO and digital marketing team. Highly recommended.',
    name: 'Dinesh Rajapaksha',
    company: 'GreenLeaf Exports',
  },
  {
    quote: 'The mobile app they built for us was delivered on time and on budget. Our customers love it and our reviews have never been better.',
    name: 'Shanika Fernando',
    company: 'CeylonBites Restaurant',
  },
];

/* ---------- FAQ ---------- */
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines vary by scope. A simple website takes 2–4 weeks, while a custom system or mobile app may take 6–12 weeks. We provide a clear timeline during the planning phase.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes. Every project includes a post-launch support period, and we offer flexible maintenance plans so your product stays up to date.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer project-based fixed pricing for most engagements. For ongoing services such as SEO and digital marketing, we have monthly retainer packages. Contact us for a free quote.',
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely. We regularly integrate with and extend existing platforms, APIs and databases. We will audit your current setup and recommend the best approach.',
  },
  {
    question: 'Which industries do you serve?',
    answer: "We work across retail, hospitality, education, logistics, healthcare and more. Our solutions are tailored to each industry's unique needs.",
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out via our contact form, WhatsApp or email. We will schedule a free discovery call to understand your requirements and propose a plan.',
  },
];

/* ---------- Service options for contact form ---------- */
export const SERVICE_OPTIONS = [
  'System Development',
  'Digital Marketing',
  'SEO Handling',
  'Video Editing & Creation',
  'RPA & Automation',
  'Mobile App Creation',
  'Chatbot Creation',
  'Graphic Designing',
  'Other',
] as const;
