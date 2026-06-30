interface Config {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  showNavbar: boolean;
  navLinks: Array<{ title: string; link: string }>;
}

export const siteConfig: Config = {
  name: "Misbah Javed",
  tagline: "Real Estate AI Chatbot Specialist",
  description:
    "Misbah Javed helps real estate agencies, brokers, and property developers automate customer conversations, capture qualified leads, and grow their business with intelligent AI-powered chatbots available 24/7. Built with Kleap - the AI website builder.",
  url: process.env.NEXT_PUBLIC_URL || "https://misbah-javed.kleap.io",
  ogImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  showNavbar: true,
  navLinks: [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Portfolio", link: "#portfolio" },
    { title: "Process", link: "#process" },
    { title: "Testimonials", link: "#testimonials" },
    { title: "FAQ", link: "#faq" },
    { title: "Contact", link: "#contact" },
  ],
};
