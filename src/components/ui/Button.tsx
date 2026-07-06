import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

const variantClasses = {
  primary: "bg-brand-gold text-brand-black hover:bg-brand-gold-dark",
  secondary: "bg-brand-teal text-brand-black hover:bg-brand-teal-dark",
  outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black",
};

type Variant = keyof typeof variantClasses;

export function LinkButton({
  variant = "primary",
  className = "",
  href = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // Internal routes get client-side navigation via next/link; tel:/mailto:/
  // external links stay as plain anchors.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a href={href} className={classes} {...props} />;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props} />;
}
