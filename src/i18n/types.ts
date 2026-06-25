export interface Dictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  nav: {
    mission: string;
    research: string;
    miningHeatReuse: string;
    energyWasteReduction: string;
    sustainabilityReports: string;
    education: string;
    publicResources: string;
    contact: string;
    toggleMenu: string;
    mainNav: string;
    language: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaMission: string;
    ctaResources: string;
  };
  mission: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    principlesTitle: string;
    principles: [string, string, string, string];
  };
  research: {
    title: string;
    subtitle: string;
    footnote: string;
    footnoteLink: string;
    footnoteEnd: string;
    cards: Array<{ tag: string; title: string; description: string }>;
  };
  miningHeatReuse: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    stats: Array<{ value: string; label: string }>;
    cards: Array<{ title: string; description: string }>;
  };
  energyWasteReduction: {
    title: string;
    subtitle: string;
    cards: Array<{ title: string; description: string }>;
    hierarchyTitle: string;
    hierarchySubtitle: string;
    hierarchySteps: Array<{ step: string; title: string; desc: string }>;
    stepLabel: string;
  };
  sustainabilityReports: {
    title: string;
    subtitle: string;
    statusPublished: string;
    statusInProgress: string;
    availableInResources: string;
    willBePublished: string;
    reports: Array<{ year: string; title: string; status: "Published" | "In Progress"; summary: string }>;
  };
  education: {
    title: string;
    subtitle: string;
    cards: Array<{ tag: string; title: string; description: string }>;
  };
  publicResources: {
    title: string;
    subtitle: string;
    cards: Array<{ tag: string; title: string; description: string }>;
    freeTitle: string;
    freeDescription: string;
  };
  contact: {
    title: string;
    subtitle: string;
    generalInquiries: string;
    researchCollaboration: string;
    educationOutreach: string;
    disclaimer: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formNamePlaceholder: string;
    formEmailPlaceholder: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    subjects: [string, string, string, string, string];
  };
  footer: {
    description: string;
    explore: string;
    resources: string;
    rights: string;
    tagline: string;
    languages: string;
  };
  tags: {
    active: string;
    published: string;
    planning: string;
    course: string;
    workshop: string;
    guide: string;
    webinar: string;
    curriculum: string;
    toolkit: string;
    dataset: string;
    document: string;
    tool: string;
  };
  faq: Array<{ question: string; answer: string }>;
  articles: Array<{ headline: string; description: string; datePublished: string }>;
  internalLinks: {
    readIn: string;
    alsoAvailable: string;
  };
  faqSection: {
    title: string;
  };
}
