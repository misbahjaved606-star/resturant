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
  name: "Bennie",
  tagline: "Mediterranean Dining in the Heart of Fitzrovia",
  description:
    "An intimate Mediterranean escape in the heart of Fitzrovia. Handcrafted seafood, fine wines, private dining & unforgettable evenings. Dog-friendly. Built with Kleap - the AI website builder.",
  url: process.env.NEXT_PUBLIC_URL || "https://bennie-restaurant.kleap.io",
  ogImage:
    "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1779724170098-hero-restaurant",
  showNavbar: true,
  navLinks: [
    { title: "Menu", link: "/menu" },
    { title: "Private Hire", link: "/private-hire" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ],
};
