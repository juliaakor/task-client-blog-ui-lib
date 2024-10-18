import clsx from 'clsx';
import React from 'react';

import { HeadingProps } from '../types';

export const Heading6 = ({ children, className }: HeadingProps) => {
  return <h6 className={clsx('text-base font-bold leading-6 text-dark-blue', className)}>{children}</h6>;
};
