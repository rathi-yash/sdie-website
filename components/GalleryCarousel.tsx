"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const placeholderSlides = Array.from({ length: 6 }, (_, i) => i);

export default function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 4000);
    const stop = () => clearInterval(autoplay);
    emblaApi.rootNode().addEventListener("mouseenter", stop);
    return () => {
      clearInterval(autoplay);
      emblaApi.rootNode().removeEventListener("mouseenter", stop);
    };
  }, [emblaApi]);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative">
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {placeholderSlides.map((i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%] px-1 sm:flex-[0_0_50%]">
                <div className="flex aspect-square items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-xs text-ink-500">
                  [photo placeholder]
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous photo"
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow hover:bg-white"
        >
          &larr;
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={scrollNext}
          className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow hover:bg-white"
        >
          &rarr;
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {placeholderSlides.map((i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === selectedIndex ? "bg-brand-700" : "bg-brand-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
