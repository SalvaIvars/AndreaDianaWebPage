'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className?: string;
  bg?: string; // Tailwind bg-* value
  roundedTop?: boolean;
  borderTop?: boolean;
};

export default function SectionWrapper({
  children,
  className = '',
  bg = 'bg-white',
  roundedTop = false,
  borderTop = false,
}: Props) {
  return (
    <section
      className={clsx(
        'py-24 px-6',
        bg,
        roundedTop && 'rounded-t-[4rem]',
        borderTop && 'border-t border-gray-200',
        className
      )}
    >
      {children}
    </section>
  );
}
