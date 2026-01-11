export default function sitemap() {
  const baseUrl = "https://eddox-tech.vercel.app"; // 🔴 change after domain

  const staticPages = [
    "",
    "/about",
    "/courses",
    "/corporate-training",
    "/online-registration",
    "/talent-pool",
    "/contact",
    "/certificate",
    "/pay-fees",
  ];

  const categories = [
    "SAP",
    "Full Stack Developer",
    "Data Science",
    "Digital Marketing",
    "Workday",
    "Salesforce",
    "Microsoft Azure",
    "HR & Business Analytics",
    "Microsoft Tools",
    "Security",
    "SAP Success Factor",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/courses?category=${encodeURIComponent(cat)}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...categoryUrls];
}
