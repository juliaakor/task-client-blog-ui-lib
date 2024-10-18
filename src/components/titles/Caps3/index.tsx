import clsx from 'clsx';
import React from 'react';

import { HeadingProps } from '../types';

export const Caps3 = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={clsx('text-base font-medium leading-5 tracking-widest uppercase text-dark-blue', className)}>
      {children}
    </h1>
  );
};
