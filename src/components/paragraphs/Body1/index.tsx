import clsx from 'clsx';
import React from 'react';

import { ParagraphProps } from '../types';

export const Body1 = ({ children, className }: ParagraphProps) => {
  return <p className={clsx('font-normal text-base leading-7 text-dark-blue', className)}>{children}</p>;
};
