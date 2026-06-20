import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "whatsapp" | "outline";
};

export default function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  const base = "inline-block rounded-md px-5 py-2.5 text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    whatsapp: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-brand-600 text-brand-600 hover:bg-brand-50",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
