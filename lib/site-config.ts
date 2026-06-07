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
  name: "Lahore Clothes & Branded Cut Piece",
  tagline: "Premium Branded Cut Pieces & Quality Pakistani Clothing",
  description:
    "Lahore Clothes & Branded Cut Piece - Trusted clothing store in Islamabad offering quality branded cut pieces, fashion wear, handbags and accessories. Built with Kleap - the AI website builder.",
  url: process.env.NEXT_PUBLIC_URL || "https://lahore-clothes.kleap.io",
  ogImage: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821383465-hero-pakistani-fashion.jpg",
  showNavbar: true,
  navLinks: [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: "Categories", link: "/categories" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ],
};
