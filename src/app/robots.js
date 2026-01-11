export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://eddoxtechnology.com/sitemap.xml", // 🔴 change after domain
  };
}
