import { siteConfig } from "@/lib/site-config";

export default function WhatsAppButton({ label = "Chat on WhatsApp" }: { label?: string }) {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
    >
      {label}
    </a>
  );
}
