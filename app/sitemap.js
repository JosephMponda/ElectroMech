export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    "",
    "/about/",
    "/services/",
    "/services/design-development/",
    "/services/project-management/",
    "/services/asset-management/",
    "/services/advisory/",
    "/contact/",
    "/privacy/",
  ];
  return routes.map((route) => ({
    url: "https://electromechmw.com" + route,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/privacy/" ? 0.3 : 0.8,
  }));
}
