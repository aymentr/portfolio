import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs font-medium uppercase tracking-widest2 transition-colors duration-300 ease-cinematic focus-visible:outline-offset-4';

const variants = {
  primary: 'bg-paper text-void hover:bg-white',
  ghost: 'border border-mist/30 text-paper hover:border-paper hover:bg-white/5',
};

interface CommonProps {
  variant?: keyof typeof variants;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  href,
  ...rest
}: CommonProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
