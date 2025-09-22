import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonBaseProps = {
  invert?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ invert = false, className, children, href, ...props }: ButtonAsButton | ButtonAsAnchor) {
  const composedClassName = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert ? 'bg-white text-neutral-950 hover:bg-neutral-200' : 'bg-neutral-950 text-white hover:bg-neutral-800'
  );

  const inner = <span className="relative top-px">{children}</span>;

  if (!href) {
    return (
      <button className={composedClassName} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {inner}
      </button>
    );
  }

  return (
    <a className={composedClassName} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {inner}
    </a>
  );
}
