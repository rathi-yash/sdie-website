import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "whatsapp" | "outline";
};

export default function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  const base =
    "inline-block rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-all duration-150";
  const variants = {
    primary: "bg-brand-700 text-white shadow-sm hover:bg-brand-600 hover:shadow-md",
    whatsapp: "bg-green-700 text-white shadow-sm hover:bg-green-600 hover:shadow-md",
    outline: "border border-brand-700 text-brand-700 hover:bg-brand-50",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
