import { siteConfig } from "@/lib/site-config";

export default function MapEmbed() {
  const query = encodeURIComponent(siteConfig.address);
  return (
    <iframe
      title="Centre location map"
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      className="h-72 w-full rounded-lg border border-ink-100"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
