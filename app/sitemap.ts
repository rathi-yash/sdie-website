import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";

const baseUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/faq"].map(
    (route) => ({ url: `${baseUrl}${route}` })
  );
  const courseRoutes = courses.map((course) => ({ url: `${baseUrl}/courses/${course.slug}` }));
  return [...staticRoutes, ...courseRoutes];
}
