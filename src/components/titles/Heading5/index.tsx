import clsx from 'clsx';
import React from 'react';

import { HeadingProps } from '../types';

export const Heading5 = ({ children, className }: HeadingProps) => {
  return <h5 className={clsx('text-xl font-bold leading-8 text-dark-blue', className)}>{children}</h5>;
};
