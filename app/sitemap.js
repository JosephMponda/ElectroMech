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
    "/projects/",
    "/insights/",
    "/contact/",
  ];
  return routes.map((route) => ({
    url: "https://electromechmw.com" + route,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
