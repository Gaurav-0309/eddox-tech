export default function sitemap() {
  const baseUrl = "https://yourdomain.com"; // 🔴 change after domain purchase

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/courses`, lastModified: new Date() },
    { url: `${baseUrl}/corporate-training`, lastModified: new Date() },
    { url: `${baseUrl}/online-registration`, lastModified: new Date() },
    { url: `${baseUrl}/talent-pool`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/certificate`, lastModified: new Date() },
    { url: `${baseUrl}/pay-fees`, lastModified: new Date() },
  ];
}
