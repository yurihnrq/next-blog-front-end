import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  size?: 'small' | 'medium' | 'large';
  asChild?: boolean;
}

export function Text({
  size,
  asChild,
  children,
  className,
  ...rest
}: TextProps) {
  const Comp = asChild ? Slot : 'p';

  return (
    <Comp
      className={clsx(className, {
        'text-sm': size === 'small',
        'text-base': size === 'medium',
        'text-lg': size === 'large'
      })}
      {...rest}
    >
      {children}
    </Comp>
  );
}
