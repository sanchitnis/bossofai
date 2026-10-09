export const siteConfig = {
  name: "BossOfAI Students Hub",
  shortName: "BossOfAI",
  tagline: "AI Empowerment for Higher Education",
  description: "An open, public reference hub providing students, educators, and researchers with AI tools, learning tracks, and best practices.",
  url: "https://bossofai.org/aihub",
  basePath: "/aihub",
  links: {
    mainSite: "https://bossofai.org",
    email: "hello@bossofai.org",
    supportEmail: "support@bossofai.org",
  },
  nav: {
    showNews: true,
    showGovernance: true,
  },
};

export type SiteConfig = typeof siteConfig;
