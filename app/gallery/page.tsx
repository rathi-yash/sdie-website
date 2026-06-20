import { siteConfig } from "@/lib/site-config";

const placeholderImages = Array.from({ length: 6 }, (_, i) => i);

export default function GalleryPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-2 text-center text-3xl font-semibold text-ink-900">Picture gallery</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-ink-700">
        A look inside {siteConfig.branchName}, classrooms, events, and student activities.
      </p>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
        {placeholderImages.map((i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-md bg-ink-100 text-xs text-ink-500"
          >
            [photo placeholder]
          </div>
        ))}
      </div>
    </section>
  );
}
