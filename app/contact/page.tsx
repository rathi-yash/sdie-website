import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import MapEmbed from "@/components/MapEmbed";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | [branch name]",
  description: "Get in touch with us for questions about courses, fees, or admissions.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-2 text-center font-display text-3xl font-semibold text-brand-900">Get in touch</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-ink-700">
        Questions about a course, fees, or admissions? We reply as soon as we see your message.
      </p>

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold text-brand-900">Centre details</h2>
          <ul className="space-y-2 text-sm text-ink-700">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.helpline}</li>
            <li>
              <a href={siteConfig.whatsappLink} className="text-brand-700 hover:text-gold-600 hover:underline">
                Chat on WhatsApp
              </a>
            </li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.hours}</li>
          </ul>
          <p className="mt-3 text-xs text-gold-600">
            Visiting in person? Please schedule an appointment beforehand.
          </p>
          <div className="mt-6">
            <MapEmbed />
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-display text-lg font-semibold text-brand-900">Send an enquiry</h2>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
