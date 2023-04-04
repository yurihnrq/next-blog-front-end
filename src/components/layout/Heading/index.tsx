import { clsx } from 'clsx';
import { ElementType, HTMLAttributes } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: 'small' | 'medium' | 'large';
}

/**
 * Renders a heading with the given size.
 *
 * size: 'small' (h3) | 'medium' (h2) | 'large' (h1)
 */
export function Heading({
  className,
  children,
  size = 'large',
  ...rest
}: HeadingProps) {
  let Comp: ElementType = 'h1';

  if (size === 'medium') {
    Comp = 'h2';
  }

  if (size === 'small') {
    Comp = 'h3';
  }

  return (
    <Comp
      className={clsx(
        className,
        'font-bold',
        {
          'text-xl': size === 'small',
          'text-2xl': size === 'medium',
          'text-3xl': size === 'large'
        },
        'dark:text-slate-100'
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
