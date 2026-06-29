export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Insights", href: "#insights" },
  { label: "Talk to us", href: "#booking" },
];

export const BOOKING_TYPES = [
  {
    id: 1,
    label: "Initial Discovery",
    duration: "30 min",
    href: "https://cal.com/smiit-cyberai/initial-discovery",
    description:
      "Discuss your AI governance and infrastructure needs with a senior consultant.",
  },
  {
    id: 2,
    label: "Technical Consulting",
    duration: "60 min",
    href: "https://cal.com/smiit-cyberai/technical-consulting",
    description:
      "Deep-dive into architecture, compliance frameworks, or technical implementation.",
  },
  {
    id: 3,
    label: "Partnership",
    duration: "30 min",
    href: "https://cal.com/smiit-cyberai/partnership",
    description: "Explore how we can support your organisation as a strategic partner.",
  },
] as const;

export const DISCIPLINES = [
  "Governance",
  "Infrastructure",
  "AI Agents",
  "Cybersecurity",
  "Red Teaming",
  "Zero Trust",
];

export const SERVICES = [
  {
    id: 1,
    tag: "AI Governance",
    title: "AI Governance",
    description:
      "Governance programmes that satisfy regulators without slowing your teams. We build practical compliance from policy to audit trail.",
    bullets: [
      "Governance framework design & implementation",
      "EU AI Act readiness & compliance",
      "NIST AI RMF mapping",
      "ISO 42001 certification support",
      "DORA Alignment for financial services",
      "GDPR + AI data-processing obligations",
    ],
    sideItems: ["Regulation", "Framework", "Standard"],
    frameworks: ["EU AI Act", "NIST AI RMF", "ISO 42001", "DORA"],
  },
  {
    id: 2,
    tag: "Infrastructure",
    title: "AI Infrastructure",
    description:
      "The technical foundations AI adoption actually requires. Cloud architecture, data systems, and platform engineering for regulated industries.",
    bullets: [
      "Cloud landing zone architecture",
      "Data pipeline and lakehouse design",
      "AI/ML platform infrastructure",
      "Cost governance and FinOps",
      "Platform engineering and IDP",
      "Developer AI tooling integration",
    ],
    sideItems: ["Infrastructure", "Cloud", "Platform"],
    frameworks: ["AWS", "Azure", "GCP", "Terraform"],
  },
  {
    id: 3,
    tag: "AI Agents & MCP",
    title: "AI Agents & MCP",
    description:
      "Agent architecture design, MCP server implementation, and audit trails—building trustworthy autonomous AI.",
    bullets: [
      "Multi-agent system architecture",
      "MCP server design and configuration",
      "Claude enterprise integration",
      "Agent audit trail and observability",
      "Human-in-the-loop orchestration",
      "Agent governance and accountability",
    ],
    sideItems: ["Security", "Framework"],
    frameworks: ["Claude", "MCP", "OpenAI", "LangChain"],
  },
  {
    id: 4,
    tag: "DevOps & Platform Engineering",
    title: "DevOps & Platform Engineering",
    description:
      "Forward-deployed engineers who embed with your teams, build internal developer platforms, and streamline CI/CD for AI workloads.",
    bullets: [
      "Internal Developer Platform (IDP) design",
      "CI/CD pipeline modernisation",
      "GitOps and infrastructure automation",
      "Developer AI toolchain integration",
      "Observability and SRE practices",
      "Platform team structure and mentoring",
    ],
    sideItems: ["Infrastructure", "Cloud"],
    frameworks: ["GitHub Actions", "ArgoCD", "Kubernetes", "Pulumi"],
  },
  {
    id: 5,
    tag: "Cloud & Migration",
    title: "Cloud & Migration",
    description:
      "Landing zone design, migration strategy, and cloud security posture for organisations moving to regulated public cloud.",
    bullets: [
      "Cloud landing zone architecture",
      "Phased migration strategy and planning",
      "AWS / Azure / GCP security baselines",
      "Identity and access governance",
      "Cost governance and FinOps",
      "Multi-cloud networking and connectivity",
    ],
    sideItems: ["Cloud", "Security"],
    frameworks: ["AWS", "Azure", "GCP", "Terraform"],
  },
  {
    id: 6,
    tag: "Digital Transformation",
    title: "Digital Transformation",
    description:
      "Strategy and programme governance for organisations adopting AI at scale. Build-vs-buy decisions with governed implementation.",
    bullets: [
      "AI adoption readiness assessment",
      "Transformation strategy development",
      "Programme governance and delivery",
      "Build-vs-buy decision frameworks",
      "Stakeholder alignment and communication",
      "Change management for AI initiatives",
    ],
    sideItems: ["Strategy"],
    frameworks: ["PMI", "SAFe", "Prosci"],
  },
  {
    id: 7,
    tag: "Cybersecurity & Red Teaming",
    title: "Cybersecurity & Red Teaming",
    description: "AI-specific adversarial testing, red teaming, and penetration testing mapped to MITRE ATLAS and OWASP AI Top 10.",
    bullets: [
      "AI red teaming and adversarial ML",
      "Prompt injection and jailbreak testing",
      "MITRE ATLAS-mapped assessments",
      "OWASP AI Top 10 risk validation",
      "Traditional penetration testing",
      "Continuous security validation",
    ],
    sideItems: ["Security"],
    frameworks: ["MITRE ATLAS", "OWASP AI Top 10", "PTES"],
  },
  {
    id: 8,
    tag: "Cloud-Native Security & Zero Trust",
    title: "Cloud-Native Security & Zero Trust",
    description:
      "End-to-end cloud-native security: CNAPP, runtime protection, secrets management, and Zero Trust architecture.",
    bullets: [
      "CNAPP platform design and deployment",
      "Container and runtime security",
      "Zero Trust architecture implementation",
      "Secrets management and rotation",
      "SOC 2 / ISO 27001 / PCI / HIPAA baselines",
      "Threat detection and incident response",
    ],
    sideItems: ["Security", "Framework"],
    frameworks: ["SOC 2", "ISO 27001", "PCI DSS", "HIPAA"],
  },
  {
    id: 9,
    tag: "UI/UX & Design for Trust",
    title: "UI/UX & Design for Trust",
    description:
      "Governance dashboards, human-in-the-loop consoles, and audit UX that make complex AI systems comprehensible and accountable.",
    bullets: [
      "Governance dashboard UX",
      "Human-in-the-loop console design",
      "Audit trail visualisation",
      "Transparency and explainability patterns",
      "Internal design system governance",
      "Usability testing for compliance tools",
    ],
    sideItems: ["Design"],
    frameworks: ["WCAG 2.2", "Figma", "Storybook", "Design Tokens"],
  },
  {
    id: 10,
    tag: "M&A & Data Transformation",
    title: "M&A & Data Transformation",
    description:
      "Technology and data due diligence, post-merger integration, and carve-out execution for AI and data infrastructure.",
    bullets: [
      "Technical due diligence for AI assets",
      "Data estate assessment and mapping",
      "Post-merger integration planning",
      "Carve-out execution support",
      "AI platform rationalisation",
      "Data migration and governance transfer",
    ],
    sideItems: ["M&A", "Data"],
    frameworks: ["SOX", "IFRS", "PwC DD Framework"],
  },
];

export const BLOG_ARTICLES = [
  {
    id: 1,
    title: "Connecting Enterprise Systems to AI via MCP: An Architecture Guide",
    date: "May 2026",
    category: "AI Infrastructure",
    excerpt:
      "How Model Context Protocol bridges your existing enterprise data and AI systems—architecture patterns for regulated organisations.",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "EU AI Act Enforcement: What Regulated Organisations Must Do Now",
    date: "April 2026",
    category: "AI Governance",
    excerpt:
      "EU AI Act enforcement has begun. Here is the compliance roadmap for financial services, healthcare, and critical infrastructure.",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Cloud Architecture for AI Workloads in Regulated Industries",
    date: "March 2026",
    category: "Infrastructure",
    excerpt:
      "Designing cloud infrastructure that meets both AI performance demands and regulatory requirements—landing zones, networking, and identity.",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "The Real Cost of AI Governance Debt",
    date: "March 2026",
    category: "AI Governance",
    excerpt:
      "Governance debt is real. It compounds silently and becomes catastrophically expensive to address. Here is how to measure and reduce it.",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Governing Autonomous AI Systems: Accountability, Audit & Control",
    date: "February 2026",
    category: "AI Governance",
    excerpt:
      "Autonomous AI systems challenge traditional governance models. A practical framework for accountability and audit in agent-based systems.",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Why AI Transformation Programmes Stall After the Pilot",
    date: "January 2026",
    category: "Transformation",
    excerpt:
      "Most AI transformation stalls after the successful pilot. Why—and how to build governance infrastructure that scales.",
    readTime: "6 min read",
  },
];

export const FRAMEWORKS = [
  {
    id: "eu-ai-act",
    category: "Regulation",
    name: "EU AI ACT",
    description: "Risk-based regulation for AI in EU markets",
  },
  {
    id: "nist-ai-rmf",
    category: "Framework",
    name: "NIST AI RMF",
    description: "Govern, Map, Measure, Manage",
  },
  {
    id: "iso-42001",
    category: "Standard",
    name: "ISO 42001",
    description: "AI management systems",
  },
  {
    id: "iso-27001",
    category: "Standard",
    name: "ISO 27001",
    description: "Information Security for AI systems",
  },
  {
    id: "dora",
    category: "Regulation",
    name: "DORA",
    description: "EU financial sector ICT resilience",
  },
  {
    id: "owasp-ai",
    category: "Security",
    name: "OWASP AI",
    description: "Top 10 AI/LLM risks",
  },
  {
    id: "gdpr-ai",
    category: "Regulation",
    name: "GDPR + AI",
    description: "Data-processing obligations for AI",
  },
];

export const INDUSTRIES = [
  {
    id: 1,
    name: "Financial Services & Insurance",
    description:
      "Banks, insurers, and fintech navigating DORA, EU AI Act, FCA, PRA, and GDPR AI obligations.",
    tags: ["DORA", "EU AI Act", "FCA", "PRA", "GDPR"],
  },
  {
    id: 2,
    name: "Healthcare & Life Sciences",
    description:
      "Patient safety, data protection, and device regulation for AI/ML in clinical and pharmaceutical contexts.",
    tags: ["GDPR", "MDR", "ISO 13485", "NHS"],
  },
  {
    id: 3,
    name: "Energy & Critical Infrastructure",
    description:
      "Operational-resilience and cybersecurity for energy, utilities, and national infrastructure operators.",
    tags: ["NIS2", "ISO 27001", "CNI", "OT Security"],
  },
];

export const LEAD_MAGNETS = [
  {
    id: 1,
    title: "Free Assessment",
    subtitle: "AI Governance Readiness Check",
    description:
      "A six-dimension diagnostic you can complete in 10 minutes, with a gap report within 24 hours.",
    cta: "Start the check →",
    icon: "check",
  },
  {
    id: 2,
    title: "Whitepaper",
    subtitle: "AI Infrastructure for Regulated Industries",
    description:
      "Our 24-page guide to cloud architecture, data systems, and governance for AI in regulated environments.",
    cta: "Download →",
    icon: "download",
  },
  {
    id: 3,
    title: "Newsletter",
    subtitle: "The SMIIT Intelligence Brief",
    description:
      "Fortnightly analysis for technology and compliance leaders. No noise, just signal. Cancel anytime.",
    cta: "Subscribe →",
    icon: "mail",
  },
];

export const READINESS_DATA = [
  { label: "Policy & Framework", pct: 72 },
  { label: "AI Risk Management", pct: 58 },
  { label: "AI System Inventory", pct: 45 },
  { label: "Regulatory Compliance", pct: 65 },
  { label: "Infrastructure Controls", pct: 52 },
  { label: "Agent Accountability", pct: 38 },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "AI Governance", href: "#services" },
    { label: "AI Infrastructure", href: "#services" },
    { label: "AI Agents & MCP", href: "#services" },
    { label: "DevOps & Platform Engineering", href: "#services" },
    { label: "Cloud & Migration", href: "#services" },
    { label: "Digital Transformation", href: "#services" },
    { label: "Cybersecurity & Red Teaming", href: "#services" },
    { label: "Zero Trust", href: "#services" },
  ],
  intelligence: [
    { label: "All articles", href: "#insights" },
    { label: "AI Governance", href: "#insights" },
    { label: "Infrastructure", href: "#insights" },
    { label: "AI Agents", href: "#insights" },
    { label: "Transformation", href: "#insights" },
  ],
  frameworks: [
    { label: "EU AI Act", href: "#frameworks" },
    { label: "NIST AI RMF", href: "#frameworks" },
    { label: "ISO 42001", href: "#frameworks" },
    { label: "ISO 27001", href: "#frameworks" },
    { label: "DORA", href: "#frameworks" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#booking" },
    { label: "Careers", href: "#" },
    { label: "Privacy", href: "#" },
  ],
};
