import { siteConfig } from "@/lib/site-config";

export default function FounderNote() {
  return (
    <section className="border-t border-brand-100 bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <span className="text-xs uppercase tracking-[0.2em] text-gold-600">
          Founder&apos;s note
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-brand-900">
          From the Founder&apos;s Desk
        </h2>
        <p className="mt-3 font-display text-lg italic text-brand-700">
          Building a Legacy of Education and Empowerment
        </p>

        <div className="mt-8 border-l-2 border-gold-400 pl-6 text-ink-700">
          <p>Welcome to {siteConfig.fullName}.</p>
          <p className="mt-4">
            This institute is deeply personal to me. I named it in honor of my mother, Sharda
            Devi, who played an irreplaceable role in my life. Her unwavering support paved the
            way for my own education, teaching me firsthand that a mother&apos;s guidance and a
            good education can completely transform a life. This institute is my way of
            honoring her legacy by empowering the next generation of educators.
          </p>
          <p className="mt-4">
            When we set up our campus in {siteConfig.city}, our goal was simple: to make
            world-class teacher training accessible and affordable for everyone. Today, top
            schools look for more than just a certificate. They look for confident, expressive
            leaders. That is why we focus heavily on holistic personality development, public
            speaking, and practical classroom skills alongside our curriculum.
          </p>
          <p className="mt-4">
            Whether you are a young student, a working professional, or a homemaker looking to
            start a rewarding career, we are here to support your journey every step of the way.
            Join us, and let us build a bright future together.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:items-center">
          <div
            className="h-40 w-40 shrink-0 rounded-full border-2 border-gold-400 bg-brand-50"
            aria-hidden="true"
          />
          <div className="text-center sm:text-left">
            <p className="font-display text-lg italic text-brand-900">Warm regards,</p>
            <p className="mt-1 font-display text-base font-semibold text-brand-900">
              {siteConfig.founderName}
            </p>
            <p className="text-xs uppercase tracking-wide text-gold-600">
              Founder, {siteConfig.fullName}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
